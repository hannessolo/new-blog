import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import style from './post.module.css'
import options from '../utils/contentful-render-options'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.contentfulPost.titel}</title>
      </Helmet>
      <article>
        <h1 className={style.he1}>{data.contentfulPost.title}</h1>
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
    }
  }
`
