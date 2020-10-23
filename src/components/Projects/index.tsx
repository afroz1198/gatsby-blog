import React from "react"
import Project from "./Project"
import styled from "styled-components"
import { Link } from "gatsby"

import { ProjectItem } from "./types"

type ProjectsProps = {
  title: string
  home: boolean
  projects: ProjectItem[]
}

const Projects: React.FC<ProjectsProps> = ({ title, home, projects }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>

      <div className="projects">
        {projects.map((project, index) => {
          return <Project key={index} project={project} />
        })}
        {home ? (
          <div className="projects__more">
            Check out{" "}
            <Link to="/projects">
              <em>Projects</em>
            </Link>{" "}
            for more...
          </div>
        ) : (
          ""
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  grid-column: 1/13;
  h2 {
    text-align: center;
  }

  .projects {
    margin: 0 auto;
    position: relative;
    display: grid;
    text-align: left;
    > article:not(:last-of-type) {
      padding-bottom: 1.2rem;
    }

    @media all and (max-width: 1004px) {
      max-width: 100%;
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
    &__more {
      text-align: left;
      position: absolute;
      bottom: -3%;
      em {
        font-weight: 400;
      }
    }

    @media all and (min-width: 1005px) {
      width: 70vw;
      margin: 0 auto;
      .project:nth-of-type(2n) .project__img {
        grid-column: 6 / span 7;
        grid-row: 1 / 1;
      }
      .project:nth-of-type(2n) .project__info {
        grid-column: 1 / span 7;
        grid-row: 1 / 1;
      }
    }
  }
`
export default Projects
