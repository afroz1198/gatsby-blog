import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Projects from "../components/Projects"
import Navigator from "../components/Navigator"
import ErrorBoundary from "../components/ErrorBoundary"

const projectList = ({
  data: {
    projects: { nodes },
  },
  pageContext,
}) => {
  const { currentPage, numPagesProjects } = pageContext
  return (
    <Layout>
      <SEO title={`All Projects | Page ${currentPage}`} dataHook="projects" />
      <Wrapper>
        <h2>Projects</h2>
        <ErrorBoundary>
          <Projects projects={nodes} className="projects" />
        </ErrorBoundary>
        <Navigator
          currentPage={currentPage}
          numPages={numPagesProjects}
          pageName="/projects"
        />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getProjects($skip: Int!, $limit: Int!) {
    projects: allMdx(
      filter: { frontmatter: { project: { eq: "true" } } }
      skip: $skip
      limit: $limit
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

const Wrapper = styled.div`
  margin: 0 auto;
  grid-column: 1/13;

  .projects {
    margin-bottom: 3rem;
  }
  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }
`
export default projectList
