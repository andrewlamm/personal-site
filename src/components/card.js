/** @jsx jsx */

import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { fadeInUp } from '../animation/animations'

const ContentCard = ({ children, ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  })
  return (
    <motion.div
      ref={ref}

      sx={{
        my: 2,
      }}

      initial='initial'
      animate={inView ? 'animate' : 'none'}
      variants={fadeInUp()}

      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ContentCard
