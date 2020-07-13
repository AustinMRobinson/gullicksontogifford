module.exports = {
  siteMetadata: {
    title: `Gullickson to Gifford`,
    description: `A bridal shower taking place for Piper Gullickson in August`,
  },
  plugins: [
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
