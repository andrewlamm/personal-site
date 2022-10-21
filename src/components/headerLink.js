/** @jsx jsx */

import { jsx, Box } from 'theme-ui'

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

export default HeaderLink
