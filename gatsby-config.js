module.exports = {
  siteMetadata: {
    title: `Gullickson to Gifford`,
    description: `A bridal shower taking place for Piper Gullickson in August`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gullickson to Gifford`,
        short_name: `G to G`,
        description: `A bridal shower taking place for Piper Gullickson in August`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/gtogfavicon.svg`,
        start_url: `/`,
        background_color: `#fffdf9`,
        theme_color: `cf9f46`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["MadinaScript"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
  ],
}
