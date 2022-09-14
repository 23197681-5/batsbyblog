const { notEqual } = require('assert');
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if(node.internal.type === `MarkdownRemark`){
    const slug = createFilePath({node, getNode, basePath: `pages`});
    createNodeField(
      {
        node,
        name: `slug`,
        value: slug
      }
    )
  }

}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
  {allMarkdownRemark{
    edges{
      node{
        fields{
          slug
        }
      }
    }
  }}`).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      console.log("creating file"+node.fields.slug);
     return createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.field.slug
        }
      }
      )
    })
  })
}
