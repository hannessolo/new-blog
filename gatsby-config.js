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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-141515779-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
