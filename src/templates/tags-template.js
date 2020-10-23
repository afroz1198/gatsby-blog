import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import SEO from "../components/SEO"

const Tags = ({ className, pageContext: { categories } }) => {
  return (
    <Layout>
      <SEO title="All Tags" dataHook="tags" />
      <section className={className}>
        <h2>Tags</h2>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <Link to={`/group/${category.toLowerCase()}`}>#{category}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default styled(Tags)`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  grid-column: 1/13;
  transition: var(--main-transition);
  h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      display: inline-block;
      padding: 0 0.3rem;
    }
  }
`
