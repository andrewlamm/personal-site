/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { motion } from 'framer-motion'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { fadeInUp } from '../animation/animations'

const ProjectCard = ({ img, children, ...props }) => (
  <motion.div
    {...props}
    sx={{
      width: '250px',
      height: '250px',
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

export default ProjectCard
