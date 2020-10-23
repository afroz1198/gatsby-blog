import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { AiOutlineLink } from "react-icons/ai"
import Tagger from "../Tagger"
import { ProjectItem } from "./types"

type ProjectProps = {
  className?: string
  project: ProjectItem
}

const Project: React.FC<ProjectProps> = ({
  className,
  project: { frontmatter },
}) => {
  const { urls, date, excerpt, image, title, categories } = frontmatter

  return (
    <article className={`${className} project`}>
      <Image className="project__img" fluid={image.childImageSharp.fluid} />
      <div className="project__info">
        <h3>{title}</h3>
        <span>{date}</span>
        <Tagger categories={categories} />
        <div className="project__info--excerpt">{excerpt}</div>
        <ul>
          {urls.map((url, index) => {
            return (
              <li key={index}>
                <a href={url.link} className="project__info--link">
                  <AiOutlineLink />
                  {url.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default styled(Project)`
  position: relative;
  font-size: 1rem;
  padding-bottom: 1.5rem;
  text-align: left;
  display: grid;
  align-items: center;
  transition: opacity 3s ease 0s;
  @media screen and (min-width: 1005px) {
    grid-template-columns: repeat(12, 1fr);
  }
  &:hover {
    .project__img::after {
      opacity: 0;
    }
  }

  .project__info {
    background: var(--clr-project-info);
    z-index: 2;
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--dark-shadow);
    h3 {
      margin: 0.3em 0;
    }

    @media screen and (min-width: 1005px) {
      grid-column: 6 / span 7;
      grid-row: 1/1;
    }
    &--excerpt {
      padding: 0.3em 0;
    }
    ul {
      margin: 0.3em 0;
      padding: 0;

      li {
        list-style: none;
      }
    }
    &--link {
      svg {
        margin-bottom: -0.1em;
      }
    }
  }
  .project__img {
    height: 24rem;
    overflow: hidden;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    z-index: 1;
    box-shadow: var(--dark-shadow);
    transition: opacity 0.3s ease 0s;

    @media screen and (min-width: 1005px) {
      grid-column: 1 / span 7;
      grid-row: 1 / 1;
    }
    @media screen and (max-width: 576px) {
      height: 15rem;
    }
    @media screen and (max-width: 768px) {
      height: 19rem;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        108deg,
        rgba(48, 207, 208, 1) 11.2%,
        rgba(51, 8, 103, 1) 92.5%
      );
      opacity: 0.85;
      transition: var(--main-transition);
      transition: opacity 0.3s ease 0s;
    }
  }
`
