module.exports = {
  siteMetadata: {
    title: `ZEZE Blog`,
    siteUrl: `https://zeze.dev`,
    author: `zeze`,
    description: `ZEZE Blog`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: `${__dirname}/src`,
        pages: `${__dirname}/src/pages`,
        views: `${__dirname}/src/views`,
        components: `${__dirname}/src/components`,
        utils: `${__dirname}/src/utils`,
      },
    },
    `gatsby-plugin-core-js`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/theme.js`).darkTheme,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
            },
          },
          'gatsby-remark-external-links',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `0`,
              icon: `<svg width="20" height="20" aria-hidden="true" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'gatsby-code-',
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZEZE blog`,
        short_name: `ZEZE`,
        start_url: `/`,
        background_color: `#F5F8F8`,
        theme_color: `#F5F8F8`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
