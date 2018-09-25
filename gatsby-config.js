module.exports = {
  siteMetadata: {
    title: 'Knit2 Yarns - Kamloops Yarn and Knitting Shop',
    facebook_username: 'Knit2 - Yarns - 1683481525241962',
    instagram_username: 'carla_knit2yarns',
    pinterest_username: 'crfawcett1',
    description:
      "Knit2 Yarns is Kamloops' newest Yarn Shop. We have a great selection of yarns and notions for all your knitting needs. We carry Malabrigo, Noro, Sweet Georgia, Smith and Ewe, Cascade, Berroco, and much more!",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sessions`,
        path: `${__dirname}/markdown/sessions/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
