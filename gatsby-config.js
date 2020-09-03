module.exports = {
  siteMetadata: {
    title: `Leroy Clarke Jr. Front-end Developer`,
    description: `Front-end developer`,
    author: `@ldcjr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leroy Clarke Jr - Front-end Developer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0a70ff`,
        theme_color: `#0a70ff`,
        display: `minimal-ui`,
        icon: `src/data/images/me.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
