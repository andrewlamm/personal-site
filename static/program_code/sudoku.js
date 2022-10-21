import React from 'react'
import { Flex, Box } from 'theme-ui'
import { motion } from 'framer-motion'
import { fadeInUp, staggerAnimation } from '../animation/animations'
import NavBar from "../components/navbar"
import Footer from "../components/footer"
import SideBar from "../components/sidebar"
import { StaticImage } from "gatsby-plugin-image"

const LinkLabel = ({ link, text }) => {
  return (
    <Box
      sx={{
        py: 0.7,
      }}
    >
      <a href={link} style={{textDecoration: 'none', width: '100%',justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', color: '#315d5a'}}>{text}</a>
    </Box>
  )
}

const OutsideLinkNoLine = ({ link, text }) => {
  return (
    <a href={link} style={{textDecoration: 'none', width: '100%',justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', color: '#315d5a'}}>{text}</a>
  )
}

const SudokuPage = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={staggerAnimation}
    >
      <Flex
        sx={{
          height: '100vh',
          width: '100%',
          margin: 0,
          color: 'text',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            pt: 2,
            pl: 2,
            pr: 2,
            width: ['100%', '90%', '60%'],
            mx: 'auto',
          }}
        >
          <NavBar currLink="Projects" />
          <SideBar />
          <Box
            sx={{
              
            }}
          >
            <Box>
              <motion.div variants={fadeInUp()}>
                <Flex
                  sx={{
                    backgroundColor: 'primary',
                    borderRadius: 'default',
                    flexDirection: 'column',
                    mt: 3,

                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      borderTopLeftRadius: 'default',
                      borderTopRightRadius: 'default',
                      backgroundColor: 'primarydark',
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <Box
                        sx={{
                            py: 2,
                            px: 3,
                            fontWeight: 'bold',
                            fontSize: 4,
                        }}
                    >
                        Sudoku Solver
                    </Box>
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: 4,
                            px: 4,
                            float: 'right',
                            justifyContent: 'flex-end',
                            marginLeft: 'auto'
                        }}
                    >
                        <StaticImage src="../images/sudoku.png" alt="" height={45} />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      px: 3,
                      pt: 2,
                      pb: 3,
                    }}
                  >
                    <Box>
                      This python program takes in an input of any sudoku puzzle (up to N=16) and uses constraint satisfaction to solve the puzzle.
                    </Box>
                    <Box
                      sx={{
                        pt: 3,
                        fontWeight: '500',
                        fontSize: 3,
                      }}
                    >
                      How to use
                    </Box>
                    <Box>
                      After <OutsideLinkNoLine link="#download" text="downloading" /> the two files, run the file <code>sudoku.py</code>. A GUI should pop up.
                      Enter the size N of the puzzle (default 9, max 16) and click the generate button to Generate the sudoku puzzle. 
                      Then, input the known numbers in the puzzle, and finally press the Solve button to solve the puzzle. The numbers of the solved puzzle will be blue.
                      If the puzzle is impossible, an error saying "Puzzle not possible" will show up next to the Solve button. 
                      In addition, if the puzzle is not valid (for example, two 1s on the same row), the invalid numbers will turn red when you press the Solve button.
                      If you wish to solve another puzzle, just press the Generate button again.
                    </Box>
                    <Box
                      sx={{
                        pt: 3,
                        fontWeight: '500',
                        fontSize: 3,
                      }}
                      id="howitworks"
                    >
                      How it works
                    </Box>
                    <Box>
                      The GUI was made using tkinter. The program drew lines for the grid of the puzzle, then put an Entry element in each square. 
                      When pressing the Solve button, the program will convert the inputted puzzle into a string, where the empty values are represented as <code>.</code>.
                    </Box>
                    <Box>
                      For example, the puzzle <br />
                      <code>1 . 2 3</code><br />
                      <code>. . . 4</code><br />
                      <code>. . . .</code><br />
                      <code>2 . 4 .</code><br />
                      would be represented as <code>"1.23...4....2.4."</code>
                    </Box>
                    <Box>
                      Then, it calls the <code>solve_sudoku.py</code> program, which uses constraint satisfaction to solve the puzzle. <code>solve_sudoku.py</code> uses constraint propogation and forward looking techniques to quickly solve each sudoku puzzle.
                      When it is finished, the program prints the sovled puzzle in a string format, which the main program reads and displays in the GUI puzzle.
                    </Box>
                    <Box>
                      If you would like to use your own python program to solve sudoku puzzles, just simply name your file <code>solve_sudoku.py</code> and move it to the same folder that the main program is in.
                      Make sure that your program prints the solved puzzle in a string format at the end. 
                    </Box>
                    <Box
                      sx={{
                        pt: 3,
                        fontWeight: '500',
                        fontSize: 3,
                      }}
                    >
                      Possible improvements
                    </Box>
                    <Box>
                      Many improvements can be made to this program. Some improvements possible for the main program are: <br />
                      - Make GUI look nicer. For example, when pressing a button, the background of the labels will mess up. <br />
                      - Automatically check for invalid numbers and mark them red (instead of checking when pressing the Solve button) <br />
                      Additionally, some improvements that can be made to the solve sudoku program include: <br />
                      - More efficient ways to use constraint propogation and forward looking techniques <br />
                      - Implementation of Sudoku logic, including: if only N values are possible in N squares of the same row, column, or subboard, then only these values can occur at these squares. <br />
                    </Box>
                    <Box
                      sx={{
                        pt: 3,
                        fontWeight: '500',
                        fontSize: 3,
                      }}
                      id="download"
                    >
                      Download
                    </Box>
                    <Box>
                      The <code>sudoku.py</code> file is the main python file which displays the GUI elements. <br />
                      The <code>solve_sudoku.py</code> file takes in the sudoku board in string representation, solves it, and prints out the solved puzzle board in a string repreesntation. <br />
                      You may skip the <code>solve_sudoku.py</code> download if you are using your own python program to solve sudoku. 
                      Instructions on how to do so are found in the <OutsideLinkNoLine link="#howitworks" text="How it Works" /> section. <br />
                    </Box>
                    <Box
                      sx={{
                        pt: 1,
                      }}
                    >
                      <a href="https://github.com/superandywaffle/personal-site/blob/main/src/project_code/sudoku.py" style={{textDecoration: 'none', width: '100%',justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', color: '#315d5a'}}>sudoku.py</a> <br />
                      <a href="https://github.com/superandywaffle/personal-site/blob/main/src/project_code/solve_sudoku.py" style={{textDecoration: 'none', width: '100%',justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: '100%', color: '#315d5a'}}>solve_sudoku.py</a>
                    </Box>
                  </Box>
                </Flex>
              </motion.div>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            pl: 2,
            pr: 2,
            width: ['100%', '90%', '60%'],
            mx: 'auto',
          }}
        >
          <Footer />
        </Box>
      </Flex>
    </motion.div>
  )
}

export default SudokuPage
