let contentfulConfig

// Check if we can load contentful config from the json file
try {
  contentfulConfig = require("./.contentful")
} catch (_) {}

// Overwrite with env variables if available
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken:
    process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
}

module.exports = {
  siteMetadata: {
    title: `Hannes' Blog`,
    description: `My blog bringing you the best content!`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        ...contentfulConfig,
        // downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
