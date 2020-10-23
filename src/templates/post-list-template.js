import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Post from "../components/Posts/Post"
import SEO from "../components/SEO"
import styled from "styled-components"
import Navigator from "../components/Navigator"

import ErrorBoundary from "../components/ErrorBoundary"

const PostList = props => {
  const { data } = props
  const pageName = "/articles"
  const { currentPage, numPages } = props.pageContext

  return (
    <Layout>
      <SEO title={`All Articles | Page ${currentPage}`} dataHook="articles" />
      <ErrorBoundary>
        <section className={props.className}>
          <h2>Articles</h2>
          <div className="articles">
            {data.articles.edges.map(({ node }, index) => {
              return <Post key={index} {...node} />
            })}
          </div>
          <Navigator
            currentPage={currentPage}
            pageName={pageName}
            numPages={numPages}
          />
        </section>
      </ErrorBoundary>
    </Layout>
  )
}
export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    articles: allMdx(
      filter: { frontmatter: { project: { eq: "false" } } }
      skip: $skip
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            time_to_read
            title
            excerpt
            date(formatString: "MMM Do, YYYY")
            categories
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default styled(PostList)`
  width: calc(80vw- 70px);
  @media all and (min-width: 940px) {
    width: 70vw;
  }
  margin: 0 auto;
  grid-column: 1/13;
  transition: var(--main-transition);
  h2 {
    text-align: center;
  }

  .articles {
    margin-bottom: 4rem;
    min-height: 600px;

    > :not(:last-of-type) {
      border-bottom: 1px solid var(--clr-grey);
    }
  }
`
