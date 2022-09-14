const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if(node.internal.type === `MarkdownRemark`){
    const slug = createFilePath({node, getNode});
    createNodeField(
      {
        node,
        name: `slug`,
        value: slug
      }
    )
  }

}