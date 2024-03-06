/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Themed } from '@theme-ui/mdx'

const OutsideLink = ({ children, ...props }) => (
  <Themed.a {...props} target='_blank' rel='noopener noreferrer'>
    {children}
  </Themed.a>
)

export default OutsideLink
