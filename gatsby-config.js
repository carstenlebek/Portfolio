/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Carsten Lebek - Webdeveloper aus Wuppertal`,
    description: "Freelancer Webentwickler aus Wuppertal",
    author: "Carsten Lebek",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carsten Lebek - Webdeveloper aus Wuppertal`,
        short_name: `C. Lebek - Webdev`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#E53E3E`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`quicksand\:300,400,500`],
    //     display: "swap",
    //   },
    // },
  ],
}
