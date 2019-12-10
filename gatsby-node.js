/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateNode = ({
    node,
    getNode,
    loadNodeContent,
    boundActionCreators,
  }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === `MarkdownRemark`) {
      fillNewsEntryData(node, createNodeField, getNode);
    }
    
    const { frontmatter } = node
    if (frontmatter) {
      const { image } = frontmatter
      if (image) {
        if (image.indexOf('/img') === 0) {
          frontmatter.image = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, '/upload/', image)
          )
        }
      }
    }
}