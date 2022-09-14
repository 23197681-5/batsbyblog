import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const blog =  ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{post.frontmatter.tittle}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}}/>
            </div>
        </Layout>
        )
}
export default blog;
export const query = graphql`
query($slug: String!){
    markdownRemark( fields: { slug: { eq: $slug}}){
        html
        frontmatter{
            title
        }
    }
}`;