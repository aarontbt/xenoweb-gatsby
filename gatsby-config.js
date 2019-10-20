module.exports = {
  siteMetadata: {
    title: `Aaron Personal Web`,
    description: `A bootstrap Gatsby site to kickstart personal site`,
    author: `@aarontbt`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aaron-psersonal-web`,
        short_name: `aaronweb`,
        start_url: `/`,
        background_color: `#EB5757`,
        theme_color: `#EB5757`,
        display: `minimal-ui`,
        icon: `src/images/at-hi-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#EB5757",
          "link-color": "#EB5757",
          "font-family": "Arial",
          "heading-color": "#F2C94C",
          "layout-body-background": "#66ff79",
        },
      },
    },
    {
      resolve: `gatsby-plugin-minify-classnames`,
      options: {
        develop: true, // Enable on `gatsby develop`
      },
    },
    {
      resolve: "gatsby-plugin-zopfli",
      options: {
        extensions: ["css", "js", "svg"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
