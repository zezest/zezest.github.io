const {resolve} = require('path')

module.exports = async ({ graphql, actions }) => {
  const {createPage, createRedirect} = actions

  // Used to detect and prevent duplicate redirects
  const redirectToSlugMap = {}

  const devLogTemplate = resolve(__dirname, '../src/templates/devlog.js')

  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  })

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                redirect
                slug
              }
            }
          }
        }
      }
    `,
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)

    throw Error(allMarkdown.errors)
  }

  const posts = allMarkdown.data.allMarkdownRemark.edges
  posts.forEach(({ node }, idx) => {
    const slug = node.fields.slug

    if (slug.includes('devlog/')) {
      const createArticlePage = path =>
        createPage({
          path: path,
          component: devLogTemplate,
          context: {
            slug,
            prev: idx === 0 ? null : posts[idx - 1],
            next: idx === allMarkdown.length - 1 ? null : posts[idx + 1],
          },
        })

      // Register primary URL.
      createArticlePage(slug)

      // Register redirects as well if the markdown specifies them.
      if (node.fields.redirect) {
        let redirect = JSON.parse(node.fields.redirect)
        if (!Array.isArray(redirect)) {
          redirect = [redirect]
        }

        redirect.forEach(fromPath => {
          if (redirectToSlugMap[fromPath] != null) {
            console.error(
              `Duplicate redirect detected from "${fromPath}" to:\n` +
                `* ${redirectToSlugMap[fromPath]}\n` +
                `* ${slug}\n`,
            )
            process.exit(1)
          }

          // A leading "/" is required for redirects to work,
          // But multiple leading "/" will break redirects.
          // For more context see github.com/reactjs/reactjs.org/pull/194
          const toPath = slug.startsWith('/') ? slug : `/${slug}`

          redirectToSlugMap[fromPath] = slug
          createRedirect({
            fromPath: `/${fromPath}`,
            redirectInBrowser: true,
            toPath,
          })
        })
      }
    }
  })

  // const newestBlogEntry = await graphql(
  //   `
  //     {
  //       allMarkdownRemark(
  //         limit: 1
  //         filter: {fileAbsolutePath: {regex: "/blog/"}}
  //         sort: {fields: [fields___date], order: DESC}
  //       ) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // )

  // const newestBlogNode = newestBlogEntry.data.allMarkdownRemark.edges[0].node

  // // Blog landing page should always show the most recent blog entry.
  // ['/blog/', '/blog'].map(slug => {
  //   createRedirect({
  //     fromPath: slug,
  //     redirectInBrowser: true,
  //     toPath: newestBlogNode.fields.slug,
  //   })
  // })
}
