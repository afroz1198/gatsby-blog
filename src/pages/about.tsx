import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"
import {
  FaKeybase,
  FaTwitterSquare,
  FaRedditSquare,
  FaLinkedin,
} from "react-icons/fa"

type AboutProps = {
  className?: string
  data: {
    allFile: {
      edges: any[]
    }
  }
}

const about: React.FC<AboutProps> = ({
  className,
  data: {
    allFile: { edges },
  },
}) => {
  const [{ node }] = edges

  return (
    <Layout>
      <SEO title="About me" dataHook="about" />
      <section className={`${className} about`}>
        <article>
          <Image fluid={node.childImageSharp.fluid} className="about__img" />
          <div className="about__info">
            <p>
              Hi,I am <em>Afroz</em>.I will be mostly dabbled in
              Javascript,html,css,rust.
            </p>
            <p className="about__info--links">
              Connect:
              <a
                href="https://twitter.com/messages/compose?recipient_id=2930622986"
                className="twitter"
              >
                <FaTwitterSquare></FaTwitterSquare>
              </a>
              <a
                href="https://www.linkedin.com/in/afroz1198/"
                className="linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.reddit.com/user/afroz1198"
                className="reddit"
              >
                <FaRedditSquare />
              </a>
              <a href="https://keybase.io/afroz1198" className="keybase">
                <FaKeybase></FaKeybase>
              </a>
            </p>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "me.jpeg" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default styled(about)`
  grid-column: 1/13;
  width: 90vw;
  @media all and (min-width: 940px) {
    width: 55vw;
    margin-top: 2rem;
  }
  margin: 0 auto;
  position: relative;
  transition: var(--main-transition);

  .about {
    &__img {
      float: left;
      width: 10rem;
      height: 10rem;
      margin: 0rem 1.2rem;
      border-radius: 50%;
      @media all and (max-width: 530px) {
        float: unset;
        margin: 0 auto;
      }
    }

    &__info {
      text-align: left;
      padding-top: 1rem;

      @media all and (max-width: 530px) {
        display: block;
      }
      &--links {
        a {
          font-size: 1.5em;
          color: var(--clr-links);

          svg {
            margin: 0 0.4em -0.2em 0.2em;
          }

          &::after {
            display: none;
          }
        }
        .twitter:hover {
          color: rgb(29, 161, 242);
        }
        .reddit:hover {
          color: #ff4500;
        }

        .linkedin:hover {
          color: rgb(0, 119, 181);
        }
        .keybase:hover {
          color: #ff6f21;
        }
      }
    }
  }
`
