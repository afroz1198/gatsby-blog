import React from "react"
import { Link } from "gatsby"
import Toggle from "../components/Toggle"
import styled from "styled-components"
import { HeaderProps } from "../components/Header"

const Links: React.FC<HeaderProps> = props => {
  const [firstName, lastName] = props.siteTitle.split(" ")

  return (
    <LinkWrapper>
      <li className="logo">
        <Link to="/">
          <span style={{ fontWeight: 600 }}>{firstName} </span>
          <span style={{ fontWeight: 200 }}>{lastName}</span>
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="navigator__active">
          /about
        </Link>
      </li>
      <li>
        <Link to="/projects" activeClassName="navigator__active">
          /projects
        </Link>
      </li>
      <li>
        <Link to="/articles" activeClassName="navigator__active">
          /articles
        </Link>
      </li>
      <li>
        <Link to="/tags" activeClassName="navigator__active">
          /tags
        </Link>
      </li>
      <li>
        <Toggle />
      </li>
    </LinkWrapper>
  )
}
const LinkWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media all and (max-width: 640px) {
    margin-top: 0;
    flex-direction: column;
    align-items: start;
    li {
      margin: .5em 2em;
    }
  }
  li {
    margin-bottom: 0;
    position: relative;
    transition: all 0.1s ease-out;
    display: inline-block;
    margin-right: calc(0.4em + 0.7vw);
    .active {
      color: var(--clr-green-light);
      &:after {
        width: 100%;
        left: 0%;
      }
    }
  }
`

export default Links
