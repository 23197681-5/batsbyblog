import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  const { edges, html } = allMarkdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        {/* <h1>{...edges}</h1> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query { allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges{
      node{
        id,
        frontmatter{
          description
          title
          date
        }
        fields{
          slug
        }
        excerpt
      }
    }
  }
  }`;