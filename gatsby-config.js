module.exports = {
  siteMetadata: {
    siteUrl: `https://andrewl.dev/`,
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
