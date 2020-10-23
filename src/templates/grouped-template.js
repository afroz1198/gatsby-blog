import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Grouped = ({ className, pageContext: { category, links } }) => {
  return (
    <Layout>
      <SEO title={`${category} stuff`} dataHook="grouped" />
      <section className={className}>
        <h2>{category}</h2>
        <ul className="grouped">
          {links.map(({ link, title, date }, index) => {
            if (link.startsWith("http")) {
              return (
                <li key={index} className="grouped__article">
                  <a className="grouped__article--link" href={link}>
                    {title}
                  </a>
                  <div className="grouped__article--date">{date}</div>
                </li>
              )
            } else {
              return (
                <li key={index} className="grouped__article">
                  <Link className="grouped__article--link" to={link}>
                    {title}
                  </Link>
                  <div className="grouped__article--date">{date}</div>
                </li>
              )
            }
          })}
        </ul>
      </section>
    </Layout>
  )
}

export default styled(Grouped)`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  flex-direction: column;
  grid-column: 1/13;
  transition: var(--main-transition);

  h2 {
    text-align: center;
  }

  .grouped {
    &__article {
      counter-increment: count_post 1;

      &::before {
        content: counters(count_post, "decimal-leading-zero") ". ";
      }
      display: flex;
      justify-content: space-evenly;

      &--date {
        display: flex;
        align-items: center;
        svg {
          margin: 0 0.5em;
        }
      }
      &--link {
        margin: 0 1em 0 0.3em;
      }
    }
  }
`
