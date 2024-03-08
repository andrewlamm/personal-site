/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'
import { motion } from 'framer-motion'

import { barAnimation, wiperAnimation, wiperLeftAnimation } from '../animation/animations'

const SplashScreen = ({ ...props }) => {
  return (
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
  )
}

export default SplashScreen
