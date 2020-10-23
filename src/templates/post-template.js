import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { MdDateRange } from "react-icons/md"
import { AiOutlineClockCircle } from "react-icons/ai"

const Template = ({ data }) => {
  const {
    frontmatter: { title, date, excerpt, pic, time_to_read },
    body,
  } = data.mdx
  return (
    <Layout>
      <SEO title={`Article | ${title}`} description={excerpt} image={pic} />
      <Wrapper>
        <div>
          <h2>{title}</h2>
          <span>
            <AiOutlineClockCircle />
            {time_to_read ? `${time_to_read} read` : null}
            <MdDateRange />
            {date}
          </span>
          <div className="underline" />
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </Wrapper>
    </Layout>
  )
}
export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        pic
        time_to_read
        date(formatString: "MMM DD YYYY")
        slug
        excerpt
      }
      body
    }
  }
`
const Wrapper = styled.article`
  grid-column: 1/13;
  width: 85vw;
  max-width: 1140px;
  margin: 0 auto;
  span {
    display: flex;
    align-items: center;
    svg:not(:first-of-type) {
      margin: 0 0.5em;
    }
    svg:first-of-type {
      margin-right: 0.5em;
    }
  }
`

export default Template
