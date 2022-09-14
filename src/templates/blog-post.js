import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.tittle}</h1>
                <div dangerouslySetInnerHTML={{___html: post.html}}/>
            </div>
        </Layout>
        )
}

export const query = graphql`
query($slug: String!){
    markdownRemark( fields: { slug: { eq: $slug}}){
        html
        frontmatter{
            title
        }
    }
}`;