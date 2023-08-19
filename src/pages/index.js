/** @jsx jsx */
import * as React from 'react'
import { useCallback } from 'react'
import { graphql } from 'gatsby'
import { jsx, Flex, Box, Paragraph, Grid, IconButton } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { motion } from 'framer-motion'
import { Global, css } from '@emotion/react'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import { scroller } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

import { barAnimation, wiperAnimation, wiperLeftAnimation, showPageContent, headerAnimation, fadeInUp, staggerAnimation } from '../animation/animations'
import ContentCard from '../components/card'
import ContactLink from '../components/contact'
import HeaderLink from '../components/headerLink'
import ProjectCard from '../components/projectCard'
import SEO from '../components/seo'

const OutsideLink = ({ children, ...props }) => (
  <Themed.a {...props} target='_blank' rel='noopener noreferrer'>
    {children}
  </Themed.a>
)

const IndexPage = ({ data }) => {
  const {
    express: { childImageSharp: expressImg },
    dota: { childImageSharp: dotaImg },
    dotasim: { childImageSharp: dotasimImg },
    ratemytj: { childImageSharp: ratemytjImg },
    tjctf: { childImageSharp: tjctfImg },
    othello: { childImageSharp: othelloImg },
    fresh: { childImageSharp: freshImg },
    f1sim: { childImageSharp: f1simImg },
    cums: { childImageSharp: cumsImg },
    bazaar: { childImageSharp: bazaarImg },
    goosechase: { childImageSharp: goosechaseImg },
    crossword: { childImageSharp: crosswordImg },
    sudoku: { childImageSharp: sudokuImg },
    tetris: { childImageSharp: tetrisImg },
    focus: { childImageSharp: focusImg },
    csgodoku: { childImageSharp: csgodokuImg },
  } = data

  const scrollAbout = useCallback(() => {
    scroller.scrollTo('about', {
      duration: 400,
      smooth: 'easeInOut',
    })
  }, [])

  const scrollProjects = useCallback(() => {
    scroller.scrollTo('projects', {
      duration: 400,
      smooth: 'easeInOut',
    })
  }, [])

  const scrollContact = useCallback(() => {
    scroller.scrollTo('contact', {
      duration: 400,
      smooth: 'easeInOut',
    })
  }, [])

  const projects = [
    {
      name: 'CSGODOKU',
      fullname: 'CSGODOKU',
      img: csgodokuImg,
      desc: 'An immaculate grid game for CS:GO. Immaculate Grid is a game featuring a 3x3 board with a clue corresponding to each row and column. \
      The user\'s goal is to select a player in each grid spot such that the clue for each row and column in that grid spot is satisfied without repeating any players. \
      Data from the CS:GO players are scraped from HLTV using JavaScript and the puzzles are generated using a python script and are stored on a MongoDB database. \
      The site is built with Express and EJS and is stored on Render.',
      link: 'https://csgodoku.onrender.com/',
      github: 'https://github.com/superandybean/csgodoku',
    },
    {
      name: 'Learning the Express Way',
      fullname: 'Learning the Express Way',
      img: expressImg,
      desc: 'Learning the Express Way is a website that teaches the basics of web development and is for beginners and intermediates. \
      It was built as a tool to help students in TJHSST\'s Web Application Development class. The website was created in the Summer of 2022 and is built with Gatsby. \
      The lessons are written in Markdown and are converted to HTML using Gatsby\'s MDX plugin, allowing other users and students to easily create and add their own lessons onto the site.',
      link: 'https://lew.sites.tjhsst.edu/',
      github: 'https://github.com/superandybean/learning-the-express-way',
    },
    {
      name: 'CS:GO Predictions Game',
      fullname: 'CS:GO Predictions Game',
      img: dotaImg,
      desc: 'A predicting game inspired by FiveThirtyEight\'s NFL Forecasting game. On the site, users predict the outcome of professional CS:GO matches and earn/lose points based on how confident their predictions are. \
      A more confident correct pick earns more points than a less confident correct pick, but a confident incorrect pick loses more points than a less confident one! \
      Users can log in using their Steam account on the website through the Steam OpenID library. Users can also compare their picks with other users through the leaderboard feature. Custom leaderboards are also a upcoming planned feature. \
      The site was built with Express and EJS with user data being stored in a MongoDB database. ',
      note: 'The site was originally hosted on Render, but is currently down to host my other project, CSGODOKU.',
      github: 'https://github.com/superandybean/predictions-game-v2',
    },
    // {
    //   name: 'Dota Predictions Game',
    //   fullname: 'Dota Predictions Game',
    //   img: dotaImg,
    //   desc: 'A predicting game inspired by FiveThirtyEight\'s NFL Forecasting game. On the site, users predict the outcome of professional Dota 2 matches and earn/lose points based on how confident their predictions are. \
    //   A more confident correct pick earns more points than a less confident correct pick, but a confident incorrect pick loses more points than a less confident one! The site was built with Express and Handlebars, with data being stored in a MongoDB database. \
    //   The site originally was built for predicting Dota matches but also supports predictions on CS:GO games.',
    //   note: 'The site was originally hosted on Heroku, but is currently down due to the end of the Dota 2 season.',
    //   github: 'https://github.com/superandybean/predictions-game',
    // },
    {
      name: 'RateMyTJ',
      fullname: 'RateMyTJ',
      img: ratemytjImg,
      desc: 'RateMyTJ was my Senior Research project for the Mobile and Web Application Senior Research Lab. Inspired by Faculty Course Evaluations found in many colleges, the site allows students to rate their teachers and classes on different statistics such as difficult, enjoyment, and workload. \
      It is aimed at helping students make more informed decisions when choosing classes and also aims at fixing many of the issues found on the current TJHSST course catalog. The site was built with Express and Handlebars with data being stored in a mySQL database. \
      The site is hosted on TJHSST director and supports login with Ion authentication through OAuth.',
      link: 'https://ratemytj.sites.tjhsst.edu/',
      github: 'https://github.com/superandybean/RateMyTJ',
    },
    {
      name: 'DPC Simulator',
      fullname: 'DPC Simulator',
      img: dotasimImg,
      desc: 'The DPC Simulator allows users to try different scenario and \'what if\' situations in the Dota Pro Circuit. Users can simulate the DPC season by picking their winners and losers and view how each match affects the chances of each team from making the major or getting eliminated. \
      The site was built with pure Javascript and uses the OpenDota API to get data on the teams and matches. The site is hosted on Netlify.',
      link: 'https://dpc-simulator.netlify.app/',
      github: 'https://github.com/superandybean/dpc-simulator',
    },
    {
      name: 'TJCTF',
      fullname: 'TJCTF 2022',
      img: tjctfImg,
      desc: 'I helped host TJCTF 2022, a CTF (capture-the-flag) competition consisting of over 1100 players and 300 teams. I designed the TJCTF webpage and wrote a few challenges for the competition. ',
      note: 'The Github link links to the a repository to all of the problems from TJCTF 2022. My challenges are found at \'misc/cheapest-cookies-2\', \'web/game-leaderboard\', \'web/ascordle\', and \'web/portalstrology\'.',
      link: 'https://tjctf.org/',
      github: 'https://github.com/TJCSec/tjctf-2022-challenges',
    },
    {
      name: 'Othello',
      fullname: 'Othello AI',
      img: othelloImg,
      awards: '🥇 2021 TJHSST Othello Tournament Winner',
      desc: 'An AI that plays Othello (also known as Reversi) pretty well. The AI was built in Python and uses a minimax algorithm with alpha-beta pruning to search for the best move. \
      The AI was an assignment for my artificial Intelligence class in 2021 and won the TJHSST Othello Tournament in 2021.',
      note: 'For Honor Code Reasons, my Othello code is unfortunately not public. However, you can play against the AI in the link below and selecting on the \'🌟 T-2021 2022alam\' player.',
      link: 'https://othello.tjhsst.edu/play/',
    },
    {
      name: 'fresh',
      fullname: 'fresh',
      img: freshImg,
      awards: '⭐ HackTJ 8.0 Best Mobile App Winner',
      desc: 'fresh is a tool that is used to autonomously record and display locations of trash found outside, providing powerful and valuable analysis tools for researchers, volunteers, and environmentalists alike. \
      The mobile app was built with Flutter, backend with Express and MongoDB for website & API, and the frontend was built with Gatsby. The project was built for HackTJ 8.0 and won Best Mobile App.',
      github: 'https://github.com/AutinMitra/fresh-frontend',
    },
    {
      name: 'Bazaar Tracker',
      fullname: 'Bazaar Tracker',
      img: bazaarImg,
      desc: 'A web application that uses the Hypixel API to track prices of items in the Skyblock Bazaar. The site was built with Javascript and uses Chartjs to display prices over time.',
      link: 'https://bazaar-tracker.netlify.app/',
      github: 'https://github.com/superandybean/Bazaar-Tracker',
    },
    {
      name: 'Formula 1 Simulator',
      fullname: 'Formula 1 Simulator',
      img: f1simImg,
      desc: 'App built using Javascript that allows users to alter and add race results to see how F1 standings would change. It features drag and drop capabilities to aid users in changing race results. ',
      link: 'https://f1-simulator.netlify.app/',
      github: 'https://github.com/superandybean/f1-simulator',
    },
    {
      name: 'goosechase',
      fullname: 'goosechase',
      img: goosechaseImg,
      desc: 'Inspired by Wikiraces, goosechase is a game built using Express and EJS that allows users to compete against their friends with the goal of trying to find a certain CMU page first, sort of like a wild goosechase. \
      The game was built for HackCMU 2022 and unfortunately not all of the planned features were able to be implemented in the hackathon timeframe. The game uses SocketIO to allow for multiplayer functionality.',
      github: 'https://github.com/superandybean/goosechase',
    },
    {
      name: 'Crossword Generator',
      fullname: 'Crossword Generator',
      img: crosswordImg,
      desc: 'Python program that takes in the size of a crossword puzzle, the number of blocking squares, and a word list and outputs an American style crossword puzzle. Built for my Artificial Intelligence class to help students visualize their crossword puzzle outputs. \
      To display the GUI, tkinter was used. To generate the crossword, the python program used constraint satisfaction to generate crossword puzzles efficiently.',
      note: 'Unfortunately, due to Honor Code violations, code for crossword generation is not public. However, the code for the GUI is available and found in the link below. Instructions for running the program with your own crossword generator are also provided in the link below.',
      github: 'https://github.com/superandybean/personal-site/tree/master/static/program_code',
    },
    // {
    //   name: 'College Management System',
    //   fullname: 'College & University Management System',
    //   img: cumsImg,
    //   desc: 'The College & University Management System is a web application that was built for HackTJ 9.0. The site allows users to easily manage their college applications-from a calendar of deadlines to an easy way to keep track of all of their essays. \
    //   The site was built with Express and Handlebars and uses the Department of Education\'s API to obtain college information including average cost and SAT score. Unfortunately, not all of the planned features were implemented.',
    //   github: 'https://github.com/superandybean/college-university-managment-system',
    // },
    {
      name: 'Sudoku Solver',
      fullname: 'Sudoku Solver',
      img: sudokuImg,
      desc: 'Taking in a sudoku puzzle input of any NxN (minimum 9, maximum 16) size, the program will output a solved sudoku puzzle based on the input(unless the puzzle is not possible, which will cause the program to output that the puzzle is not possible. \
      The GUI was built with tkinter in Python and the solver used Python with constraint satisfaction and forward looking to efficiently solve sudoku puzzles. The program was built as a helpful addon for students for the Sudoku solving assingment in my Artificial Intelligence class.',
      note: 'Unfortunately, due to Honor Code violations, code for sudoku solving is not public. However, the code for the GUI is available and found in the link below. Instructions for running the program with your own sudoku solver are also provided in the link below.',
      github: 'https://github.com/superandybean/personal-site/tree/master/static/program_code',
    },
    {
      name: 'Tetris',
      fullname: 'Tetris',
      img: tetrisImg,
      desc: 'Tetris was a Java application that I buit in 2019. It is just a basic game of Tetris and allows users to customize their controls and add high scores.',
      github: 'https://github.com/superandybean/tetris',
    },
    {
      name: 'focus',
      fullname: 'focus',
      img: focusImg,
      awards: '⭐ YuHacks Challenge Winner',
      desc: 'A web application that detects user drowsiness to help prevent fatigue-related accidents. Gatsby was used for frontend visuals and Tensorflow was used for landmark detection. The app was built for YuHacks and was a Challenge Winner.',
      github: 'https://github.com/AutinMitra/focus',
    },
  ]

  const [selectedProject, setSelectedProject] = React.useState("")

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true
  })

  const [refProjects, inViewProjects] = useInView({
    triggerOnce: true
  })

  const [refProjectCard, inViewProjectCard] = useInView({
    triggerOnce: true
  })

  const [refContact, inViewContact] = useInView({
    triggerOnce: true
  })

  return (
    <Flex
      sx={{
        flexDirection: 'column',
      }}
    >
      <SEO />
      <Global
        styles={css`
          html {
            overflow-y: scroll;
          }
          ::-webkit-scrollbar {
            background: black;
            width: 5px;
          }
          ::-webkit-scrollbar-thumb {
            background: gray;
          }
        `}
      />
      <motion.div
        sx={{
          borderBottom: '1px solid',
          borderColor: '#9B9595',
          position: 'fixed',
          width: '100%',
          background: 'background',
          zIndex: 100,
        }}

        initial='initial'
        animate='animate'
        variants={headerAnimation()}
      >
        <Flex
          sx={{
            width: '100%',
            justifyContent: ['center', null, 'end'],
            pr: [0, null, 5],
            my: 3,
          }}
        >
          <HeaderLink>
            <Box
              onClick={scrollAbout}
              sx={{
                cursor: 'pointer',
              }}
            >
              ABOUT
            </Box>
          </HeaderLink>
          <HeaderLink>
            <Box
              onClick={scrollProjects}
              sx={{
                cursor: 'pointer',
              }}
            >
              PROJECTS
            </Box>
          </HeaderLink>
          <HeaderLink>
            <Box
              onClick={scrollContact}
              sx={{
                cursor: 'pointer',
              }}
            >
              CONTACT
            </Box>
          </HeaderLink>
        </Flex>
      </motion.div>
      <Flex
        sx={{
          minHeight: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            width: ['100%', '90%', '80%'],
            flexDirection: ['column', 'row', null],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            initial='initial'
            animate='animate'
            variants={barAnimation()}
            sx={{
              mr: [0, 3, null],
              pr: [0, 4, null],
              py: 5,
              display: 'flex',
              flexDirection: 'row',
              borderRight: ['0px', '1px solid', null],
              borderColor: '#9B9595',
              width: ['100%', '50%', null],
              justifyContent: ['center', 'right', null],
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                textAlign: 'right',
              }}
            >
              <motion.div
                sx={{
                  fontSize: [6, 8, 11],
                  fontWeight: 'bold',
                }}

                initial='initial'
                animate='animate'
                variants={wiperAnimation(0.5, 0.7)}
              >
                andrew lam
              </motion.div>
              <Flex
                sx={{
                  mt: 4,
                  flexDirection: 'column',
                  fontSize: [4, 5, 7],
                  fontWeight: 600,
                }}
              >
                <motion.div
                  initial='initial'
                  animate='animate'
                  variants={wiperAnimation(0.5, 1.0)}
                >
                  software engineer
                </motion.div>
                <motion.div
                  initial='initial'
                  animate='animate'
                  variants={wiperAnimation(0.5, 1.1)}
                >
                  web developer
                </motion.div>
              </Flex>
            </Flex>
          </motion.div>
          <motion.div
            sx={{
              px: [5, 0, null],
              ml: [0, 3, null],
              fontSize: [2, 2, 5],
              width: ['100%', '50%', null],
            }}

            initial='initial'
            animate='animate'
            variants={wiperLeftAnimation()}
          >
            Experienced programmer who loves just about anything and everything about computers.
            Currently studying Computer Science at <Themed.b>Carnegie Mellon University</Themed.b>.
          </motion.div>
        </Flex>
      </Flex>
      <motion.div
        initial='initial'
        animate='animate'
        variants={showPageContent()}
        sx={{
          mx: [3, 0, null]
        }}
      >
        <Flex
          sx={{
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          id="about"
        >
          <Flex
            sx={{
              flexDirection: 'column',
              width: ['100%', '80%', '50%'],
            }}
          >
            <motion.div
              sx={{
                fontWeight: 'bold',
                fontSize: 10,
                mb: 1,
              }}

              ref={refAbout}

              initial='initial'
              animate={inViewAbout ? 'animate' : 'none'}
              variants={fadeInUp()}
            >
              about me
            </motion.div>
            <ContentCard>
              I'm Andrew Lam, a sophomore studying Computer Science at Carnegie Mellon University. My classes this semester include <OutsideLink href="https://www.cs.cmu.edu/~213/">Introduction to Computer Systems</OutsideLink> and <OutsideLink href="https://www.cs.cmu.edu/~crary/317-f23/">Constructive Logic</OutsideLink>.
              Currently, I am currently a Teaching Assistant for <OutsideLink href="http://www.cs.cmu.edu/~15150/">15-150: Principles of Functional Programming</OutsideLink>. I was also a teaching assistant for <OutsideLink href="http://www.cs.cmu.edu/~15122-archive/s23/">15-122: Principles of Imperative Computation</OutsideLink> last semester as well.
              The Computer Science topics that interest me the most currently are web development, programming languages, and computer systems. Outside of class, I enjoy gaming and relaxing.
            </ContentCard>
            <ContentCard>
              Some of the classes that I have taken include (with the semester I took them in parentheses):
              <ul>
                <li><OutsideLink href="https://www.math.cmu.edu/~jmackey/151_128/welcome.html">Mathematical Foundations in Computer Science</OutsideLink> (Fall 2022)</li>
                <li><OutsideLink href="http://www.cs.cmu.edu/~15122-archive/f22/">Principles of Imperative Computation</OutsideLink> (Fall 2022)</li>
                <li><OutsideLink href="http://www.cs.cmu.edu/~15150/">Principles of Functional Programming</OutsideLink> (Spring 2023)</li>
                <li><OutsideLink href="https://www.cs.cmu.edu/~15281-s23/">Artificial Intelligence: Representation and Problem Solving</OutsideLink> (Spring 2023)</li>
                <li><OutsideLink href="https://s23.cs251.com/">Great Ideas in Theoretical Computer Science</OutsideLink> (Spring 2023)</li>
              </ul>
            </ContentCard>
            <ContentCard>
              I really enjoy helping people, and many of my projects are designed to help people with certain tasks. A couple summers ago, I helped pioneer a website that taught the basics of web development for a web development class at my high school. Additionally, during my senior year, I worked on a project that improved the school's course catalog to aid students in their course selection process. Also, I volunteered as a beginning Java teacher at my local Chinese school and taught introductory Java topics to middle school students every week for a year.
            </ContentCard>
            <ContentCard>
              I graduated from Thomas Jefferson High School for Science and Technology in 2022 with a 4.51 GPA. In high school, I took many advanced courses including Multivariable Calculus, Linear Algebra, AP Computer Science with Data Structures, Artificial Intelligence, Machine Learning, Advanced Math Techniques, and AP Physics C. During my senior year, I was the statisician for my school's <OutsideLink href="https://tjcsec.club/">Computer Security Club</OutsideLink> and helped host <OutsideLink href="https://tjctf.org/">TJCTF</OutsideLink>, a CTF consisting of over 1100 players and over 300 teams. Additionally, I marched trumpet for my school's marching band for all four years and volunteered to be a quartermaster for three.
            </ContentCard>
            {/* <ContentCard
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Themed.a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View my resume</Themed.a> <Themed.a href="/resume.pdf" sx={{display: 'flex', alignItems: 'center'}} target="_blank" rel="noopener noreferrer"><BiLinkExternal sx={{ml: 2}} /></Themed.a>
            </ContentCard> */}
          </Flex>
        </Flex>
        <Flex
          sx={{
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 8,
          }}
          id="projects"
        >
          <Flex
            sx={{
              flexDirection: 'column',
              width: ['100%', '80%', '50%'],
            }}
          >
            <motion.div
              sx={{
                fontWeight: 'bold',
                fontSize: 10,
                mb: 2,
              }}

              ref={refProjects}

              initial='initial'
              animate={inViewProjects ? 'animate' : 'none'}
              variants={fadeInUp()}
            >
              projects
            </motion.div>
            <motion.div
              sx={{
                fontSize: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}

              ref={refProjectCard}

              initial='initial'
              animate={inViewProjectCard ? 'animate' : 'none'}
              variants={staggerAnimation}
            >
              {/* <Paragraph
                sx={{
                  my: 2,
                }}
              >
                Some of my projects
              </Paragraph> */}
              <Grid
                columns={[1, 2, 3]}
                gap={20}
                sx={{
                  my: 1,
                  gridAutoFlow: 'dense',
                }}
              >
                {projects.map((project) => (
                  <>
                    <ProjectCard
                      img={project.img}
                      onClick={() => setSelectedProject(project.name === selectedProject ? '' : project.name)}
                      sx={{
                        filter: selectedProject === project.name ? 'grayscale(0)' : 'grayscale(0.8)',
                        transitionProperty: 'filter',
                        transitionDuration: '0.3s',
                        '&:hover': {
                          filter: 'grayscale(0)',
                        },
                        '::after': {
                          content: selectedProject === project.name ? '""' : undefined,
                          position: 'absolute',
                          borderBottom: '10px solid ',
                          borderBottomColor: 'altBackground',
                          borderLeft: '10px solid transparent',
                          borderRight: '10px solid transparent',
                          left: '50%',
                          top: '100%',
                          bottom: 'unset',
                          marginTop: '10px',
                          marginLeft: '-10px',
                          pointerEvents: 'none',
                        }
                      }}
                      key={project.name}
                    >
                      {project.name}
                    </ProjectCard>
                    <Flex
                      sx={{
                        background: 'altBackground',
                        px: 3,
                        py: 3,
                        gridColumn: '1 / -1',
                        flexDirection: 'column',
                        display: project.name === selectedProject ? 'flex' : 'none',
                        width: ['250px', '520px', '790px'],
                        borderRadius: '10px',
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: 'bold',
                          fontSize: [4, 6, null],
                          mb: 3,
                        }}
                      >
                        {project.fullname}
                      </Box>
                      {project.awards &&
                      <Box
                        sx={{
                          fontWeight: '600',
                          fontSize: [2, 4, null],
                          mb: 3,
                        }}
                      >
                        {project.awards}
                      </Box>}
                      <Paragraph>
                        {project.desc}
                      </Paragraph>
                      {project.note &&
                      <Paragraph
                        sx={{
                          mt: 2,
                        }}
                      >
                        <b>Note: </b>{project.note}
                      </Paragraph>}
                      {(project.link || project.github) &&
                      <Grid
                        columns={2}
                        gap={0}
                        sx={{
                          minWidth: 0,
                          width: 'fit-content',
                          mt: 2,
                          mb: 0,
                        }}
                      >
                        {project.link &&
                        <IconButton
                          as='a'
                          href={project.link}
                          target='_blank'
                          rel='nofollow noopener noreferrer'
                        >
                          <AiOutlineLink size={24} title={'Project Link'} />
                        </IconButton>}
                        {project.github &&
                        <IconButton
                          as='a'
                          href={project.github}
                          target='_blank'
                          rel='nofollow noopener noreferrer'
                        >
                          <AiFillGithub size={24} title={'Github Repository'} />
                        </IconButton>}
                      </Grid>}
                    </Flex>
                  </>
                ))}
              </Grid>
            </motion.div>
          </Flex>
        </Flex>
        <Flex
          sx={{
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          id="contact"
        >
          <Flex
            sx={{
              flexDirection: 'column',
              width: ['100%', '80%', '50%'],
            }}
          >
            <motion.div
              sx={{
                fontWeight: 'bold',
                fontSize: 10,
                mb: 1,
              }}

              ref={refContact}

              initial='initial'
              animate={inViewContact ? 'animate' : 'none'}
              variants={fadeInUp()}
            >
              contact
            </motion.div>
            <ContentCard>
              You can contact me at <code>andrew.lam</code> on Discord or <code>andrewlamm04@gmail.com</code> through email.
            </ContentCard>
            <ContentCard>
              Some other external links are also provided below:
              <ContactLink link="https://steamcommunity.com/id/superandybean">
                Steam Profile
              </ContactLink>
              <ContactLink link="https://github.com/superandybean">
                GitHub
              </ContactLink>
              <ContactLink link="https://www.youtube.com/channel/UCJtjhUA1jVhxJXDgzTT6AxA">
                Youtube
              </ContactLink>
              <ContactLink link="https://www.linkedin.com/in/andrew-lam-65b2a7204/">
                LinkedIn
              </ContactLink>
            </ContentCard>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  )
}

export default IndexPage

export const query = graphql`
  query Index {
    express: file(relativePath: { eq: "express.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    dota: file(relativePath: { eq: "dpc-game.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    dotasim: file(relativePath: { eq: "dpc-sim.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    ratemytj: file(relativePath: { eq: "ratemytj.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tjctf: file(relativePath: { eq: "tjctf.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    othello: file(relativePath: { eq: "othello.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    fresh: file(relativePath: { eq: "fresh.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    f1sim: file(relativePath: { eq: "f1sim.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    cums: file(relativePath: { eq: "cums.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    bazaar: file(relativePath: { eq: "bazaar.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    goosechase: file(relativePath: { eq: "goosechase.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    crossword: file(relativePath: { eq: "crossword.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sudoku: file(relativePath: { eq: "sudoku.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tetris: file(relativePath: { eq: "tetris.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    focus: file(relativePath: { eq: "focus.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    csgodoku: file(relativePath: { eq: "csgodoku.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 250
          height: 250
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
