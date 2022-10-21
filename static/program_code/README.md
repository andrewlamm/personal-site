# How to Run Crossword Generator and Sudoku Solver

## Crossword Generator

Run the provided `crosswords.py` program and change the parameters of the puzzle on screen. Select a word list (a couple a provided; or, use your own: any `.txt` file with line separated words) and then hit `Generate`. The puzzle's dimensions will get updated, and from there add any letters/words you want in the puzzle. To add blocking squares, use `#`. Then, to generate the puzzle, click `Fill in puzzle!`       

For your own crossword generator program, name your file `create_puzzle.py` and allow it take in the arguments        
`HxW B DICTIONARY.txt seed`                 
where `H` is the height, `W` is the width, `B` is the number of black squares, `DICTIONARY.txt` is the word list, and `seed` are the letters in the puzzle, where each seed is space separated with the format `HRxCc` where `R, C` are the row and column of the character `c`.           
Then, your program should print the generated crossword puzzle in list representation.       

## Sudoku Solver

Run the provided `sudoku.py` program and change the parameters of the puzzle on screen. Then, add the numbers of the puzzle in the GUI. Finally, to solve the puzzle, click `Solve!`   

For your own sudoku solver, name your file `solve_sudoku.py` and allow it take in the arguments `s` where `s` is a string representation of the sudoku puzzle with empty spaces are represented by `.`. Your program should print the solved sudoku also as a string representation.
