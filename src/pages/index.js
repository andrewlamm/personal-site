/** @jsx jsx */
import { graphql } from 'gatsby'
import { jsx, Flex } from 'theme-ui'
import { motion } from 'framer-motion'
import { Global, css } from '@emotion/react'

import { showPageContent } from '../animation/animations'
import SEO from '../components/seo'

import Header from '../components/header'
import SplashScreen from '../components/splash'
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
          flexDirection: 'column',
          position: 'absolute',
          top: 0,
        }}
      >
        <SplashScreen />
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
