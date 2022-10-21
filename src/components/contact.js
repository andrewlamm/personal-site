/** @jsx jsx */

import { jsx, Box } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'

const ContactLink = ({ link, children, ...props }) => (
  <Box
    sx={{
      my: 1,
    }}

    {...props}
  >
    <Themed.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Themed.a>
  </Box>
)

export default ContactLink
