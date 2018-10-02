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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-source-instagram-all',
      options: {
        access_token: '281166544.ed55e39.589a46fc1a094d1bb016dd825587405c',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sessions`,
        path: `${__dirname}/markdown/sessions/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero-images`,
        path: `${__dirname}/markdown/hero-images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero-text`,
        path: `${__dirname}/markdown/hero-text.md`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
