import tkinter as tk
from tkinter.filedialog import askopenfilename
import subprocess
import ast

HEIGHT = 10
WIDTH = 10
board_entries = [None] * (HEIGHT * WIDTH)
SOLVE_FILE = "create_puzzle.py"
MAX_DIM = 20

root = tk.Tk()
root.title("Crossword Generator")
canvas = tk.Canvas(root, height=100+50*HEIGHT, width=100+50*WIDTH)
canvas.pack(expand=True)
inputcanvas = tk.Canvas(height=75, width=100+50*WIDTH)
inputcanvas.pack(expand=True)
fileinputcanvas = tk.Canvas(height=75, width=100+50*WIDTH)
fileinputcanvas.pack(expand=True)

for i in range(HEIGHT+1):
	canvas.create_line(50, 50*(i+1), 50+50*WIDTH, 50*(i+1))
for i in range(WIDTH+1):
	canvas.create_line(50*(i+1), 50, 50*(i+1), 50+50*HEIGHT)

def check_cw_entry(inp):
	if len(inp) > 1:
		return False
	return True

vcmd = root.register(check_cw_entry)
for i in range(HEIGHT):
	for j in range(WIDTH):
		board_entries[i * WIDTH + j] = tk.Entry(canvas, width=2, font="Helvetica 26 bold", justify="center", validate="key", validatecommand = (vcmd,'%P'), highlightthickness = 0, bd = 0, bg="#f0f0f0")
		board_entries[i * WIDTH + j].place(x=50*(j+1)+6, y=50*(i+1)+5)

filename = tk.StringVar()
filename.set("No file currently chosen")

HEIGHT = tk.StringVar()
HEIGHT.set(10)
WIDTH = tk.StringVar()
WIDTH.set(10)
BLOCKING_SQUARES = tk.StringVar()
BLOCKING_SQUARES.set(20)

generated = tk.BooleanVar()
generated.set(True)
file_pick = tk.BooleanVar()
file_pick.set(False)

# def check_height(inp):
# 	# print(inp)
# 	# print(HEIGHT.get())
# 	if inp == "":
# 		return True
# 	try:
# 		int(inp)
# 		if int(inp) > 20:
# 			return False
# 	except:
# 		return False
# 	return True


# def check_width(inp):
# 	# print(inp)
# 	# print(WIDTH.get())
# 	if inp == "":
# 		return True
# 	try:
# 		int(inp)
# 		if int(inp) > 20:
# 			return False
# 	except:
# 		return False
# 	return True

# def check_block_sq(inp):
# 	# print(inp)
# 	# print(BLOCKING_SQUARES.get())
# 	if inp == "":
# 		return True
# 	try:
# 		int(inp)
# 		if int(inp) > int(WIDTH.get()) * int(HEIGHT.get()):
# 			return False
# 	except:
# 		return False
# 	return True

def generate_puzzle():
	generated.set(True)
	generate_button.config(state="disabled")
	error_label.config(text="")

	# print(generated.get())
	# print(file_pick.get())

	error_generation_label.config(text="")
	if not WIDTH.get().isdigit() or not HEIGHT.get().isdigit() or not BLOCKING_SQUARES.get().isdigit():
		error_generation_label.config(text="Numbers only please!")
		generated.set(False)
		return
	if int(WIDTH.get()) > MAX_DIM or int(HEIGHT.get()) > MAX_DIM or int(WIDTH.get()) < 3 or int(HEIGHT.get()) < 3:
		error_generation_label.config(text="Invalid dimensions!")
		generated.set(False)
		return
	if int(BLOCKING_SQUARES.get()) > int(WIDTH.get()) * int(HEIGHT.get()):
		error_generation_label.config(text="Too many blocking squares!")
		generated.set(False)
		return

	if generated.get() and file_pick.get():
		fill_puzzle_button.config(state="normal")

	canvas.delete("all")
	for i in range(int(HEIGHT.get())+1):
		canvas.create_line(50, 50*(i+1), 50+50*int(WIDTH.get()), 50*(i+1))
	for i in range(int(WIDTH.get())+1):
		canvas.create_line(50*(i+1), 50, 50*(i+1), 50+50*int(HEIGHT.get()))
	canvas.config(height=100+50*int(HEIGHT.get()), width=100+50*int(WIDTH.get()))

	for i in range(len(board_entries)):
		board_entries[i].destroy()
	
	# board_entries = [None] * (int(HEIGHT.get()) * int(WIDTH.get()))
	board_entries.clear()
	# print(len(board_entries))

	# test = tk.Entry(canvas, width=2, font="Helvetica 26 bold", justify="center")
	# test.place(x=55, y=53)

	for i in range(int(HEIGHT.get())):
		for j in range(int(WIDTH.get())):
			board_entries.append(tk.Entry(canvas, width=2, font="Helvetica 26 bold", justify="center", validate="key", validatecommand = (vcmd,'%P'), highlightthickness = 0, bd = 0, bg="#f0f0f0"))
			board_entries[i * int(WIDTH.get()) + j].place(x=50*(j+1)+6, y=50*(i+1)+5)

def fill_puzzle():
	# print(filename.get())
	# print("python create_puzzle.py " + HEIGHT.get() + "x" + WIDTH.get() + " " + BLOCKING_SQUARES.get() + ' "' + filename.get() + '"')
	# os.system("python create_puzzle.py " + HEIGHT.get() + "x" + WIDTH.get() + " " + BLOCKING_SQUARES.get() + ' "' + filename.get() + '"')

	generated.set(False)
	error_label.config(text="")
	generate_button.config(state="active")

	total_blocks = 0
	error_label.config(text="")
	fill_puzzle_button.config(state="disabled")

	try:
		open(filename.get())
	except:
		error_label.config(text="File not found!")
		return

	seeds = ""
	for i in range(len(board_entries)):
		if board_entries[i].get() != "":
			seeds += "H" + str(i // int(WIDTH.get())) + "x" + str(i % int(WIDTH.get())) + board_entries[i].get().upper() + " "
		if board_entries[i].get() == "#":
			total_blocks += 1
	# print(seeds)

	if total_blocks > int(BLOCKING_SQUARES.get()):
		error_label.config(text="Too many blocking squares!")
		return

	try:
		printed = subprocess.check_output("python " + SOLVE_FILE + " " + HEIGHT.get() + "x" + WIDTH.get() + " " + BLOCKING_SQUARES.get() + ' "' + filename.get() + '"' + " " + seeds)
	except:
		error_label.config(text="Crossword puzzle not possible!")
		return
	# print(printed.rstrip().decode('utf-8'))
	printed = printed.rstrip().decode('utf-8')

	if printed is None:
		error_label.config(text="Puzzle not possible!")
		return

	root.focus()
	board = ast.literal_eval(printed)
	# print(board)
	# print(type(board))
	for i in range(len(board)):
		board_entries[i].delete(0, tk.END)
		if board[i] == "#":
			curr_height = (i // int(WIDTH.get()))
			curr_width = (i % int(WIDTH.get()))

			canvas.create_rectangle(50*(curr_width+1), 50*(curr_height+1), 50*(curr_width+2), 50*(curr_height+2), fill='black')

			board_entries[i].config(bg="black")

		board_entries[i].insert(0, board[i].upper())

def pick_file():
	file_pick.set(True)

	# print(generated.get())
	# print(file_pick.get())
	if generated.get() and file_pick.get():
		fill_puzzle_button.config(state="normal")

	new_file = askopenfilename()
	filename.set(new_file)
	# print(filename.get())
	try:
		filename_label.config(text=filename.get()[filename.get().rindex("/")+1:])
	except:
		filename.set("No file currently chosen")
		filename_label.config(text="No file currently chosen")

def check_input_change(inp):
	# print("yay")
	generate_button.config(state="active")
	fill_puzzle_button.config(state="disabled")
	return True

vcmd2 = root.register(check_input_change)
error_generation_label = tk.Label(inputcanvas, text="")
error_generation_label.pack(side="right")
generate_button = tk.Button(inputcanvas, text="Generate!", command=generate_puzzle, state="disabled")
generate_button.pack(side='right')
filename_button = tk.Button(fileinputcanvas, text="Choose word list", command=pick_file)
filename_button.pack(side='left')
filename_label = tk.Label(fileinputcanvas, text="No file currently chosen")
filename_label.pack(side='left')
fill_puzzle_button = tk.Button(fileinputcanvas, text="Fill in puzzle!", command=fill_puzzle, state="disabled")
fill_puzzle_button.pack(side='left')
error_label = tk.Label(fileinputcanvas, text="")
error_label.pack(side="right")
height_label = tk.Label(inputcanvas, text="HEIGHT: ")
height_label.pack(side='left')
height_input = tk.Entry(inputcanvas, width=2, textvariable=HEIGHT, validate="key", validatecommand = (vcmd2,'%P'))
# vcmd = root.register(check_height)
# height_input = tk.Entry(inputcanvas, width=2, textvariable=HEIGHT, validate="key", validatecommand = (vcmd,'%P'))
height_input.pack(side='left')
width_label = tk.Label(inputcanvas, text="WIDTH: ")
width_label.pack(side='left')
width_input = tk.Entry(inputcanvas, width=2, textvariable=WIDTH, validate="key", validatecommand = (vcmd2,'%P'))
# vcmd2 = root.register(check_width)
# width_input = tk.Entry(inputcanvas, width=2, textvariable=WIDTH, validate="key", validatecommand = (vcmd2,'%P'))
width_input.pack(side='left')
blockingsquares_label = tk.Label(inputcanvas, text="BLOCKING SQS: ")
blockingsquares_label.pack(side='left')
blockingsquares_input = tk.Entry(inputcanvas, width=3, textvariable=BLOCKING_SQUARES, validate="key", validatecommand = (vcmd2,'%P'))
# vcmd3 = root.register(check_block_sq)
# blockingsquares_input = tk.Entry(inputcanvas, width=3, textvariable=BLOCKING_SQUARES, validate="key", validatecommand = (vcmd3,'%P'))
blockingsquares_input.pack(side='left')

generate_button.config(state="disabled")
fill_puzzle_button.config(state="disabled")

root.mainloop()