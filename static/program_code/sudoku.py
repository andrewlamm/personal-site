import tkinter as tk
from tkinter.filedialog import askopenfilename
import subprocess
import ast

SYMBOLS = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
SOLVE_FILE = "solve_sudoku.py"

def find_height(length):
	test = int(length ** 0.5)
	while True:
		if length % test == 0:
			return test
		test -= 1

def find_width(length):
	if int(length ** 0.5) ** 2 == length:
		return int(length ** 0.5)
	test = int(length ** 0.5) + 1
	while True:
		if length % test == 0:
			return test
		test += 1

N = 9
HEIGHT = find_height(N)
WIDTH = find_width(N)

root = tk.Tk()
root.title("Sudoku Solver")
canvas = tk.Canvas(root, height=100+50*N, width=100+50*N)
canvas.pack(expand=True)
inputcanvas = tk.Canvas(height=75, width=100+50*N)
inputcanvas.pack(expand=True)

# for i in range(N+1):
# 	if i % HEIGHT == 0:
# 		canvas.create_line(50, 50*(i+1)+((i // HEIGHT))*5, 50+50*N+(N // HEIGHT)*5, 50*(i+1)+((i // HEIGHT))*5, width=5)
# 	else:
# 		canvas.create_line(50, 50*(i+1)+((i // HEIGHT)+1)*5, 50+50*N+(N // HEIGHT)*5, 50*(i+1)+((i // HEIGHT)+1)*5)
# for i in range(N+1):
# 	if i % WIDTH == 0:
# 		canvas.create_line(50*(i+1)+((i // WIDTH))*5, 50, 50*(i+1)+((i // WIDTH))*5, 50+50*N+(N // WIDTH)*5, width=5)
# 	else:
# 		canvas.create_line(50*(i+1)+((i // WIDTH)+1)*5, 50, 50*(i+1)+((i // WIDTH)+1)*5, 50+50*N+(N // WIDTH)*5)

for i in range(N+1):
	if i % HEIGHT == 0:
		canvas.create_line(50, 50*(i+1), 50+50*N, 50*(i+1), width=5)
	else:
		canvas.create_line(50, 50*(i+1), 50+50*N, 50*(i+1))
for i in range(N+1):
	if i % WIDTH == 0:
		canvas.create_line(50*(i+1), 50, 50*(i+1), 50+50*N, width=5)
	else:
		canvas.create_line(50*(i+1), 50, 50*(i+1), 50+50*N)

N = tk.IntVar()
N.set(9)

def check_cw_entry(inp, w):
	# print(w)
	# print(canvas.nametowidget(w))
	# print(type(canvas.nametowidget(w)))
	canvas.nametowidget(w).config(fg='black')
	if len(inp) > 1:
		return False
	if inp.upper() not in SYMBOLS[:N.get()]:
		return False
	solve_button.config(state="active")
	return True

board_entries = []

vcmd = root.register(check_cw_entry)
for i in range(N.get()):
	for j in range(N.get()):
		board_entries.append(tk.Entry(canvas, width=2, font="Helvetica 26 bold", justify="center", validate="key", validatecommand = (vcmd,'%P', '%W'), highlightthickness = 0, bd = 0, bg='#f0f0f0'))
		board_entries[i * N.get() + j].place(x=50*(j+1)+6, y=50*(i+1)+5)

N = tk.IntVar()
N.set(9)

def generate_puzzle():
	error_label.config(text="")
	generate_button.config(state="disabled")
	try:
		N.get()
	except:
		error_label.config(text="Numbers only please!")
		return

	if N.get() < 1 or N.get() > 16:
		error_label.config(text="Invalid dimensions!")
		return

	HEIGHT = find_height(N.get())
	WIDTH = find_width(N.get())

	solve_button.config(state="normal")

	canvas.delete("all")
	for i in range(N.get()+1):
		if i % HEIGHT == 0:
			canvas.create_line(50, 50*(i+1), 50+50*N.get(), 50*(i+1), width=5)
		else:
			canvas.create_line(50, 50*(i+1), 50+50*N.get(), 50*(i+1))
	for i in range(N.get()+1):
		if i % WIDTH == 0:
			canvas.create_line(50*(i+1), 50, 50*(i+1), 50+50*N.get(), width=5)
		else:
			canvas.create_line(50*(i+1), 50, 50*(i+1), 50+50*N.get())
	canvas.config(height=100+50*N.get(), width=100+50*N.get())

	for i in range(len(board_entries)):
		board_entries[i].destroy()
	
	board_entries.clear()
	for i in range(N.get()):
		for j in range(N.get()):
			board_entries.append(tk.Entry(canvas, width=2, font="Helvetica 26 bold", justify="center", validate="key", validatecommand = (vcmd,'%P', '%W'), highlightthickness = 0, bd = 0, bg='#f0f0f0'))
			board_entries[i * N.get() + j].place(x=50*(j+1)+6, y=50*(i+1)+5)

def solve_puzzle():
	error_label.config(text="")
	generate_button.config(state="active")

	HEIGHT = find_height(N.get())
	WIDTH = find_width(N.get())

	# print("W")
	# print(WIDTH)
	# print("H")
	# print(HEIGHT)

	valid_puzzle = True
	for i in range(N.get()):
		curr_nums = set()
		repeated_nums = set()
		for j in range(N.get()):
			if board_entries[i * N.get() + j].get() != "":
				if board_entries[i * N.get() + j].get() not in curr_nums:
					curr_nums.add(board_entries[i * N.get() + j].get())
				else:
					repeated_nums.add(board_entries[i * N.get() + j].get())
		if len(repeated_nums) > 0:
			valid_puzzle = False
			for j in range(N.get()):
				if board_entries[i * N.get() + j].get() in repeated_nums:
					board_entries[i * N.get() + j].config(fg="red")
	for i in range(N.get()):
		curr_nums = set()
		repeated_nums = set()
		for j in range(N.get()):
			if board_entries[(j * N.get()) + i].get() != "":
				if board_entries[(j * N.get()) + i].get() not in curr_nums:
					curr_nums.add(board_entries[(j * N.get()) + i].get())
				else:
					repeated_nums.add(board_entries[(j * N.get()) + i].get())
		if len(repeated_nums) > 0:
			valid_puzzle = False
			for j in range(N.get()):
				if board_entries[(j * N.get()) + i].get() in repeated_nums:
					board_entries[(j * N.get()) + i].config(fg="red")
	for x_start in range(0, N.get(), WIDTH):
		for y_start in range(0, N.get(), HEIGHT):
			curr_nums = set()
			repeated_nums = set()
			for i in range(x_start, x_start+WIDTH):
				for j in range(y_start, y_start+HEIGHT):
					# print(i)
					# print(j)
					# print((j*N.get())+i)
					if board_entries[(j*N.get())+i].get() != "":
						if board_entries[(j*N.get())+i].get() not in curr_nums:
							curr_nums.add(board_entries[(j*N.get())+i].get())
						else:
							repeated_nums.add(board_entries[(j*N.get())+i].get())
			if len(repeated_nums) > 0:
				valid_puzzle = False
				for i in range(x_start, x_start+WIDTH):
					for j in range(y_start, y_start+HEIGHT):
						if board_entries[(j*N.get())+i].get() in repeated_nums:
							board_entries[(j*N.get())+i].config(fg="red")

	if not valid_puzzle:
		error_label.config(text="Puzzle not possible!")
		return

	solve_button.config(state="disabled")
	

	puzzle = ""
	for i in range(len(board_entries)):
		if board_entries[i].get() == "":
			puzzle += "."
		else:
			puzzle += board_entries[i].get().upper()

	# print(puzzle)

	printed = subprocess.check_output("python " + SOLVE_FILE + " " + puzzle)
	# # print(printed.rstrip().decode('utf-8'))
	printed = printed.rstrip().decode('utf-8')

	# print(printed)
	if printed == "None":
		error_label.config(text="Puzzle not possible!")
		return

	root.focus()
	for i in range(len(printed)):
		empty = False
		if board_entries[i].get() == "":
			empty = True
		board_entries[i].delete(0, tk.END)
		board_entries[i].insert(0, printed[i])
		if empty:
			board_entries[i].config(fg='blue')	

def check_input_change(inp):
	generate_button.config(state="active")
	solve_button.config(state="disabled")
	return True

vcmd2 = root.register(check_input_change)

N_label = tk.Label(inputcanvas, text="N: ")
N_label.pack(side='left')
error_label = tk.Label(inputcanvas, text="")
error_label.pack(side="right")
solve_button = tk.Button(inputcanvas, text="Solve!", command=solve_puzzle)
solve_button.pack(side='right')
generate_button = tk.Button(inputcanvas, text="Generate!", command=generate_puzzle, state="disabled")
generate_button.pack(side='right')
N_input = tk.Entry(inputcanvas, width=2, textvariable=N, validate="key", validatecommand = (vcmd2,'%P'))
N_input.pack(side='left')

generate_button.config(state="disabled")
solve_button.config(state="active")

root.mainloop()