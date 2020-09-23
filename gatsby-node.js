const path = require('path')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type == "ContentfulPost") {
    const slug = `/articles/${node.contentful_id}`
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  query {
    allContentfulPost {
      nodes {
        fields {
          slug
        }
      }
    }
  }
  `)

  result.data.allContentfulPost.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.jsx`),
      context: {
        slug: node.fields.slug
      }
    })
  })

}
