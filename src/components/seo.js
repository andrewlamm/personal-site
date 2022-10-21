/** @jsx jsx */

import { jsx } from 'theme-ui'
import { Helmet } from 'react-helmet'

const SEO = ({ ...props }) => (
  <Helmet
    title='Andrew Lam'
  >
    <meta name='description' content="Andrew Lam's Personal Page" />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://andrewl.dev/' />
    <meta property='og:title' content='Andrew Lam' />
    <meta property='og:description' content="Andrew Lam's Personal Page" />
    <link rel='canonical' href='https://andrewl.dev/' />
  </Helmet>
)

export default SEO
