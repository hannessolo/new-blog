import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Hannes Hertach - Blog</title>
      </Helmet>
    <section id="articles">
      { data.allContentfulPost.nodes.map(node => (
          <article>
            <Link to={node.fields.slug}>
              <h2>{node.title}</h2>
            </Link>
          </article>
      ))}
    </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      nodes {
        title
        content {
          json
        }
        fields {
          slug
        }
      }
    }
  }
`
