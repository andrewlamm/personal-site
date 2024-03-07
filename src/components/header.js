/** @jsx jsx */

import { jsx, Flex, Box } from 'theme-ui'
import { useCallback } from 'react'
import { scroller } from 'react-scroll'
import { motion } from 'framer-motion'

import Headroom from 'react-headroom'

import { headerAnimation } from '../animation/animations'
import HeaderLink from '../components/headerLink'

import '../styles/headroom.css'

const Header = ({ ...props }) => {
  const scrollAbout = useCallback(() => {
    scroller.scrollTo('about', {
      duration: 400,
      smooth: 'easeInOut',
    })
  }, [])

  const scrollCourses = useCallback(() => {
    scroller.scrollTo('courses', {
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

  return (
    // <Headroom>
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
            py: 3,
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
              onClick={scrollCourses}
              sx={{
                cursor: 'pointer',
              }}
            >
              COURSES
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
    // </Headroom>
  )
}

export default Header
