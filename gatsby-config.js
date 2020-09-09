module.exports = {
  siteMetadata: {
    title: `Leroy Clarke Jr. Front-end Developer`,
    description: `Front-end developer`,
    author: `@ldcjr`,
    description: "",
    image: "",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Leroy Clarke Jr - Front-end Developer`,
        short_name: `LDCJR`,
        start_url: `/`,
        background_color: `#0a70ff`,
        theme_color: `#0a70ff`,
        display: `standalone`,
        icon: `src/data/images/me.jpeg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.35, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-167200825-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],
}
