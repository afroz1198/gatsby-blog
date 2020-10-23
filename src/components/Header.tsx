import React from "react"
import styled from "styled-components"
import Links from "../constants/links"

export type HeaderProps = {
  siteTitle: string
  subtitle?: string
}
const defaultProps = {
  siteTitle: `Afroz Mohammad`,
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <Wrapper>
      <input type="checkbox" id="navi-toggle" className="header__checkbox" />
      <label htmlFor="navi-toggle" className="header__button">
        <span className="header__icon">&nbsp;</span>
      </label>
      <nav className="nav">
        <Links {...props} />
      </nav>
    </Wrapper>
  )
}

Header.defaultProps = defaultProps

export const Wrapper = styled.header`


@media all and (min-width: 641px){
  .input,label {
    display: none;
  }
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 1000;
  }

  .header {
    &__checkbox{
      display: none;
    }

    &__button {
      height: 2em;
      width: 3em;
      position: fixed;
      top: 2em;
      right: 2em;
      z-index: 2000;
      text-align: center;
      cursor: pointer;
    }
    &__icon {
      position: relative;
      
      &::before,
      &::after {
        width: 2.5em;
        height: 2px;
        background-color: var(--clr-text);
        display: inline-block;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        left: -15px;
        transition: all 0.4s 0s ease;
      }
      &::before {
        top: 0em;
      }
      &::after {
        top: .8em;
      }
    }
  }
  .header__checkbox:checked + .header__button .header__icon::before {
      top: .5em;
      transform: rotate(135deg);
  }
  .header__checkbox:checked + .header__button .header__icon::after {
    top: .5em;
    transform: rotate(-135deg);
  }
  .header__checkbox:checked ~ .nav {
    width: 100%;
    opacity: 1;
  } 
  nav {
    padding: 0.2em;
    background: #214;

  }
  @media all and (max-width: 640px){

  nav {
    background: var(--clr-header);
    transition: opacity .8s 0s,width .4s 0s;
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    opacity: 0;
    width: 0;
    z-index: 1500;
  }
}
  .logo {
    font-size: calc(1rem + 0.3vw);
    letter-spacing: -1px;
    white-space: nowrap;
    margin-right: auto;
    a {
      padding: 1rem 3rem 0 0;
      &::after {
        display: none;
      }
    }
  }


`
export default Header
