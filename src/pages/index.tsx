import { graphql } from "gatsby"
import React from "react"
import ErrorBoundary from "../components/ErrorBoundary"
import Layout from "../components/Layout"
import Posts from "../components/Posts"
import { PostItem } from "../components/Posts/types"
import Projects from "../components/Projects"
import { ProjectItem } from "../components/Projects/types"
import SEO from "../components/SEO"

type Props = {
  data: {
    allMdx: {
      nodes: PostItem[]
    }
    projects: {
      nodes: ProjectItem[]
    }
  }
}

const IndexPage: React.FC<Props> = ({
  data: {
    allMdx: { nodes: posts },
    projects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ErrorBoundary>
        <Posts posts={posts} title="Latest Articles" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Projects projects={projects} title="Projects" home />
      </ErrorBoundary>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { project: { eq: "false" } } }
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          slug
          title
          time_to_read
          categories
          date(formatString: "MMM D, YYYY")
          excerpt
        }
      }
    }
    projects: allMdx(
      filter: { frontmatter: { project: { eq: "true" } } }
      limit: 2
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          urls {
            link
            name
          }
          title
          categories
          date(formatString: "MMM,YYYY")
          excerpt
          image {
            childImageSharp {
              fluid(maxWidth: 400, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
