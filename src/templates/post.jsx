import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import style from './post.module.css'
import options from '../utils/contentful-render-options'
import moment from 'moment'
import Prism from "prismjs"

export default ({ data }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout>
      <Helmet>
        <title>{data.contentfulPost.titel}</title>
      </Helmet>
      <article className={style.mainArticle}>
        <div className={style.titleSection}>
          <h1 className={style.blogTitle}>{data.contentfulPost.title}</h1>
          <span className={style.date}>{moment(data.contentfulPost.firstPublished).format("DD.MM.YYYY")}</span>
        </div>
        {documentToReactComponents(data.contentfulPost.content.json, options)}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(fields: {slug: {eq: $slug}}) {
      title
      content {
        json
      }
      firstPublished
    }
  }
`
