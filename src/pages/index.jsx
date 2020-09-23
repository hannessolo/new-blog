import React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { graphql, Link } from "gatsby"
import style from './index.module.css'
import moment from "moment"

export default ({ data }) => {
  const sortByDate = (a, b) => {
    return moment(a.firstPublished).isBefore(moment(b.firstPublished)) ? 1 : -1
  }

  let currentYear = null

  return (
    <Layout>
      <Helmet>
        <title>Hannes Hertach - Blog</title>
      </Helmet>
      <h2 className={style.subhead}>Articles</h2>
      <section id="articles">
        { data.allContentfulPost.nodes.sort(sortByDate).map(node => {
          const nodeYear = moment(node.firstPublished).year()
          const shouldShowYear = nodeYear != currentYear
          currentYear = nodeYear

          return (
            <article className={style.article} key={node.title}>
              <Link className={style.articleLink} to={node.fields.slug}>
                <h2>{node.title}</h2>
              </Link>
              {shouldShowYear && <h2 className={style.yearMark}>{nodeYear}</h2>}
            </article>
        )})}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPost {
      nodes {
        title
        firstPublished
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
