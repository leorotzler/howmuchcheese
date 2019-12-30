module.exports = {
  siteMetadata: {
    title: `How much cheese?`,
    description: `How much cheese do I need for a swiss cheese fondue? How much cheese do I need for a raclette?`,
    author: `@_Everek`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `howmuchcheese`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E2B14B`,
        theme_color: `#E2B14B`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Pacifico`,
        ],
      }
    },
  ],
}