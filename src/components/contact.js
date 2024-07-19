/** @jsx jsx */

import { jsx, Flex } from 'theme-ui'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from '../animation/animations'
import ContentCard from '../components/card'
import ContactLink from '../components/contactlink'

const AboutSection = ({ ...props }) => {
  const [refContact, inViewContact] = useInView({
    triggerOnce: true
  })

  return (
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
          <ContactLink link="https://github.com/andrewlamm">
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
  )
}

export default AboutSection
