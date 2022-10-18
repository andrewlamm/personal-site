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
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useInView } from 'react-intersection-observer'

import { barAnimation, wiperAnimation, wiperLeftAnimation, showPageContent, headerAnimation, fadeInUp, staggerAnimation } from '../animation/animations'
import ContentCard from '../components/card'

const HeaderLink = ({ children, ...props }) => (
  <Box
    {...props}
    sx={{
      mx: [2, 4, null],
      fontSize: [2, 3, null],
    }}
  >
    {children}
  </Box>
)

const ProjectCard = ({ img, children, ...props }) => (
  <motion.div
    {...props}
    sx={{
      width: '250px',
      height: '250px',
      // border: '1px solid white'
      position: 'relative',
      cursor: 'pointer',
    }}

    variants={fadeInUp()}
  >
    <GatsbyImage
      image={getImage(img)}
      alt={children}
      width={200}
      height={200}
      sx={{
        position: 'absolute',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        width: '250px',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        py: 2,
        textAlign: 'center',
        bottom: '0',
        zIndex: 3,
      }}
    >
      {children}
    </Box>
  </motion.div>
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
      name: 'Learning the Express Way',
      fullname: 'Learning the Express Way',
      img: expressImg,
      desc: 'Learning the Express Way is a website that teaches the basics of web development and is for beginners and intermediates. It was built as a tool to help students in TJHSST\'s Web Application Development class. The website was created in the Summer of 2022 and is built with Gatsby. ',
      link: 'https://lew.sites.tjhsst.edu/',
      github: 'https://github.com/superandybean/learning-the-express-way',
    },
    {
      name: 'Dota Predictions Game',
      fullname: 'Dota Predictions Game',
      img: dotaImg,
      desc: 'asdf',
      github: 'https://github.com/superandybean/prediction-game',
    },
    {
      name: 'RateMyTJ',
      fullname: 'RateMyTJ',
      img: ratemytjImg,
      desc: 'asdf',
      link: 'https://ratemytj.sites.tjhsst.edu/',
      github: 'https://github.com/superandybean/RateMyTJ',
    },
    {
      name: 'DPC Simulator',
      fullname: 'DPC Simulator',
      img: dotasimImg,
      desc: 'asdf',
      link: 'https://dpc-simulator.netlify.app/',
      github: 'https://github.com/superandybean/dpc-simulator',
    },
    {
      name: 'TJCTF',
      fullname: 'TJCTF 2022',
      img: tjctfImg,
      desc: 'asdf',
      link: 'https://tjctf.org/',
      github: 'https://github.com/TJCSec/tjctf-2022-challenges',
    },
    {
      name: 'Othello',
      fullname: 'Othello AI',
      img: othelloImg,
      awards: '🥇 2021 TJHSST Othello Tournament Winner',
      desc: 'asdf',
      link: 'https://othello.tjhsst.edu/play/',
    },
    {
      name: 'fresh',
      fullname: 'fresh',
      img: freshImg,
      desc: 'asdf',
      awards: '⭐ HackTJ 8.0 Best Mobile App Winner',
      github: 'https://github.com/AutinMitra/fresh-frontend',
    },
    {
      name: 'Bazaar Tracker',
      fullname: 'Bazaar Tracker',
      img: bazaarImg,
      desc: 'asdf',
      link: 'https://bazaar-tracker.netlify.app/',
      github: 'https://github.com/superandybean/Bazaar-Tracker',
    },
    {
      name: 'Formula 1 Simulator',
      fullname: 'Formula 1 Simulator',
      img: f1simImg,
      desc: 'asdf',
      link: 'https://f1-simulator.netlify.app/',
      github: 'https://github.com/superandybean/f1-simulator',
    },
    {
      name: 'goosechase',
      fullname: 'goosechase',
      img: goosechaseImg,
      desc: 'asdf',
      github: 'https://github.com/superandybean/goosechase',
    },
    {
      name: 'Crossword Generator',
      fullname: 'Crossword Generator',
      img: crosswordImg,
      desc: 'asdf',
      note: 'Due to Honor Code violations, public code is',
      github: '',
    },
    {
      name: 'College Management System',
      fullname: 'College & University Management System',
      img: cumsImg,
      desc: 'asdf',
      github: 'https://github.com/superandybean/college-university-managment-system',
    },
    {
      name: 'Sudoku Solver',
      fullname: 'Sudoku Solver',
      img: sudokuImg,
      desc: 'asdf',
      github: '',
    },
    {
      name: 'Tetris',
      fullname: 'Tetris',
      img: tetrisImg,
      desc: 'asdf',
      github: 'https://github.com/superandybean/tetris',
    },
    {
      name: 'focus',
      fullname: 'focus',
      img: focusImg,
      desc: 'asdf',
      awards: '⭐ YuHacks Challenge Winner',
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
            Expierenced programmer who loves just about anything and everything about computers.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat eleifend augue, eu volutpat orci tempor at. Sed laoreet nunc vel ligula mollis ullamcorper. Nam mollis condimentum dolor ac maximus. Etiam finibus, lectus nec accumsan tincidunt, justo elit convallis orci, et viverra mauris sapien ut ipsum. Sed ac pharetra odio, eu pulvinar quam. Aenean sed tellus ac diam eleifend gravida. Ut vel enim sed urna porttitor placerat nec vitae nisl. Nunc fermentum ipsum sed suscipit tincidunt. Donec augue risus, commodo in tempus non, pharetra eu lacus. Quisque malesuada mauris quis ligula facilisis suscipit. Praesent suscipit sem felis, eget egestas tortor hendrerit et. Sed accumsan metus nec nisi lacinia, dignissim ullamcorper tortor congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </ContentCard>
            <ContentCard>
              In ultrices eros sit amet interdum pulvinar. Donec nec augue non libero pulvinar tincidunt eget eget ipsum. Proin sapien dolor, facilisis in libero ut, lacinia mattis libero. Cras efficitur libero lorem, ac fermentum purus hendrerit bibendum. In commodo mi in nisi efficitur pretium. Quisque ut varius metus, in laoreet libero. Suspendisse non eros venenatis nunc accumsan viverra et nec nunc. Mauris non bibendum purus. Aenean elit lorem, hendrerit nec felis eget, porta lobortis metus. Quisque consectetur lectus in dapibus ornare. Aliquam venenatis felis in blandit blandit. Aenean aliquet consectetur sem auctor fermentum. Pellentesque imperdiet leo a nisl aliquam, ac euismod mi blandit. Aliquam eu tortor sit amet ligula molestie tristique quis vel massa.
            </ContentCard>
            <ContentCard
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Themed.a href="/resume.pdf" target="_blank" rel="noopener noreferrer">View my resume</Themed.a> <Themed.a href="/resume.pdf" sx={{display: 'flex', alignItems: 'center'}} target="_blank" rel="noopener noreferrer"><BiLinkExternal sx={{ml: 2}} /></Themed.a>
            </ContentCard>
          </Flex>
        </Flex>
        <Flex
          sx={{
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
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
                mb: 1,
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
                        {project.name}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat eleifend augue, eu volutpat orci tempor at. Sed laoreet nunc vel ligula mollis ullamcorper. Nam mollis condimentum dolor ac maximus. Etiam finibus, lectus nec accumsan tincidunt, justo elit convallis orci, et viverra mauris sapien ut ipsum. Sed ac pharetra odio, eu pulvinar quam. Aenean sed tellus ac diam eleifend gravida. Ut vel enim sed urna porttitor placerat nec vitae nisl. Nunc fermentum ipsum sed suscipit tincidunt. Donec augue risus, commodo in tempus non, pharetra eu lacus. Quisque malesuada mauris quis ligula facilisis suscipit. Praesent suscipit sem felis, eget egestas tortor hendrerit et. Sed accumsan metus nec nisi lacinia, dignissim ullamcorper tortor congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </ContentCard>
            <ContentCard>
              In ultrices eros sit amet interdum pulvinar. Donec nec augue non libero pulvinar tincidunt eget eget ipsum. Proin sapien dolor, facilisis in libero ut, lacinia mattis libero. Cras efficitur libero lorem, ac fermentum purus hendrerit bibendum. In commodo mi in nisi efficitur pretium. Quisque ut varius metus, in laoreet libero. Suspendisse non eros venenatis nunc accumsan viverra et nec nunc. Mauris non bibendum purus. Aenean elit lorem, hendrerit nec felis eget, porta lobortis metus. Quisque consectetur lectus in dapibus ornare. Aliquam venenatis felis in blandit blandit. Aenean aliquet consectetur sem auctor fermentum. Pellentesque imperdiet leo a nisl aliquam, ac euismod mi blandit. Aliquam eu tortor sit amet ligula molestie tristique quis vel massa.
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
  }
`
