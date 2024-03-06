/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Flex } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { motion } from 'framer-motion'
import { Global, css } from '@emotion/react'

import { barAnimation, wiperAnimation, wiperLeftAnimation, showPageContent } from '../animation/animations'
import SEO from '../components/seo'

import Header from '../components/header'
import AboutSection from '../components/about'
import CourseSection from '../components/courses'
import ProjectSection from '../components/projects'
import ContactSection from '../components/contact'

const IndexPage = ({ data }) => {
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
      <Header />
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
        <AboutSection />
        <CourseSection />
        <ProjectSection data={{ data }} />
        <ContactSection />
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
