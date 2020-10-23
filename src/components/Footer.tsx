import { Link } from "gatsby"
import React from "react"
import { AiOutlineCopyright } from "react-icons/ai"
import styled from "styled-components"

interface Props {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={className}>
      <div className="footer">
        <AiOutlineCopyright /> {new Date().getFullYear()} by{" "}
        <Link to="/about">Afroz Mohammad</Link>, This site is Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on{" "}
        <a href="https://github.com/">Github</a>.
      </div>
    </footer>
  )
}

export default styled(Footer)`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #214;
  color: #eee;
  font-size: 0.9em;

  .footer {
    grid-column: 2 / 12;
    text-align: center;
    padding: 0.5em 0;
    font-size: 0.9em;
    align-items: center;
    svg {
      margin-bottom: -0.1rem;
    }
    a {
      font-size: 1em;
      font-weight: 400;
    }
  }
`
