import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.contentfulPost.titel}</title>
      </Helmet>
      <article>
        <h1>{data.contentfulPost.title}</h1>
        {documentToReactComponents(data.contentfulPost.content.json)}
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
