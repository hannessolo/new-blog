import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { graphql, Link } from "gatsby"
import style from './index.module.css'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Hannes Hertach - Blog</title>
      </Helmet>
      <h2 className={style.subhead}>Articles</h2>
      <section id="articles">
        { data.allContentfulPost.nodes.map(node => (
            <article key={node.title}>
              <Link className={style.articleLink} to={node.fields.slug}>
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
