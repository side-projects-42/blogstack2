const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/workspace/blogstack2/src/pages/404.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("/workspace/blogstack2/src/templates/advanced.js"))),
  "component---src-templates-blog-js": hot(preferDefault(require("/workspace/blogstack2/src/templates/blog.js"))),
  "component---src-templates-docs-js": hot(preferDefault(require("/workspace/blogstack2/src/templates/docs.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/workspace/blogstack2/src/templates/page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("/workspace/blogstack2/src/templates/post.js")))
}

