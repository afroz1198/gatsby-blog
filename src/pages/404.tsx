import React from "react"

import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const ErrorPage: React.FC = () => (
  <Layout>
    <Wrapper>
      <SEO title="404: Not found" />
      <h1>Oops!</h1>
      <h3>This is clearly not the page you're looking for.</h3>
      <p>
        Looks like the page you’re looking for does not exist, or the link that
        got you here is outdated or broken. You may find what you’re looking for
        in one of the sections available in the menu at the top right of this
        page.
      </p>
      <Link to="/">Back Home</Link>
    </Wrapper>
  </Layout>
)
const Wrapper = styled.div`
  padding-top: 4rem;

  h1 {
    font-size: 5rem;
    font-weight: 700;

    @media all and (min-width: 625px) {
      font-size: 10rem;
    }
  }
  @media all and (max-width: 625px) {
    p {
      display: none;
    }
  }
  grid-column: 1/13;
  width: 75%;
  margin: 0 auto;
  text-align: center;
  h3 {
    font-size: 2rem;
    font-weight: 400;
  }
  a:link {
    &:hover &:active {
      text-decoration: underline;
    }
  }
`

export default ErrorPage
