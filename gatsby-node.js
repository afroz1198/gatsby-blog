const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      allMdx(filter: { frontmatter: { project: { eq: "false" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      projects: allMdx(filter: { frontmatter: { project: { eq: "true" } } }) {
        totalCount
      }
    }
  `)
  data.allMdx.edges.forEach(({ node: { frontmatter } }) => {
    const { slug } = frontmatter

    createPage({
      path: `articles/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    })
  })
  //amount of posts
  const posts = data.allMdx.edges
  //posts per page
  const postsPerPage = 5
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/articles` : `/articles/${index + 1}`,
      component: path.resolve("./src/templates/post-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  const projectCount = data.projects.totalCount
  //posts per page
  const projectsPerPage = 2
  //how many pages
  const numPagesProjects = Math.ceil(projectCount / projectsPerPage)

  Array.from({ length: numPagesProjects }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/projects` : `/projects/${index + 1}`,
      component: path.resolve("./src/templates/project-list-template.js"),
      context: {
        limit: projectsPerPage,
        skip: index * projectsPerPage,
        numPagesProjects,
        currentPage: index + 1,
      },
    })
  })

  const { data: articles } = await graphql(`
    {
      allMdx(filter: { frontmatter: { project: { eq: "false" } } }) {
        nodes {
          frontmatter {
            title
            categories
            slug
            date(formatString: "MMM D,YYYY")
          }
        }
      }
    }
  `)

  const { data: projects } = await graphql(`
    {
      allMdx(filter: { frontmatter: { project: { eq: "true" } } }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMM D,YYYY")
            categories
            urls {
              link
            }
          }
        }
      }
    }
  `)

  const grouped = {}
  const isInGrouped = (link, category) => {
    if (grouped[category].length == 0) {
      return false
    }
    grouped[category].forEach(node => {
      if (node.link == link) {
        return true
      }
    })

    return false
  }

  articles.allMdx.nodes.forEach(
    ({ frontmatter: { categories, slug, title, date } }) => {
      if (typeof categories !== null) {
        categories.forEach(category => {
          if (typeof grouped[category] == "undefined") {
            grouped[category] = []
          }
          const link = `/articles/${slug}`
          if (!isInGrouped(link, category)) {
            grouped[category].push({ link, title, date })
          }
        })
      }
    }
  )
  projects.allMdx.nodes.forEach(
    ({ frontmatter: { title, categories, urls, date } }) => {
      if (typeof categories !== null) {
        categories.forEach(category => {
          if (typeof grouped[category] == "undefined") {
            grouped[category] = []
          }
          const link = urls[0].link
          if (!isInGrouped(link, category)) {
            grouped[category].push({ link, title, date })
          }
        })
      }
    }
  )
  //

  for (const category in grouped) {
    grouped[category].sort((a, b) => new Date(b.date) - new Date(a.date))
    createPage({
      path: `group/${category.toLowerCase()}`,
      component: path.resolve("./src/templates/grouped-template.js"),
      context: {
        category: category,
        links: grouped[category],
      },
    })
  }

  createPage({
    path: "/tags",
    component: path.resolve("./src/templates/tags-template.js"),
    context: {
      categories: Object.keys(grouped),
    },
  })
}
