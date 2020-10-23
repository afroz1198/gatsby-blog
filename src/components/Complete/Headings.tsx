import React from "react"
import styled from "styled-components"

interface HeadingProps {
  children: React.ReactNode
  title?: string
}

const myH2: React.FC<HeadingProps> = ({ children, title }) => {
  if (title) {
    return (
      <HeadingTwo>
        <h2>{children}</h2>
        <div className="underline" />
      </HeadingTwo>
    )
  }
  return (
    <h2
      style={{
        margin: "2rem 0",
        color: "var(--clr-grey-5)",
      }}
    >
      {children}
    </h2>
  )
}
const HeadingTwo = styled.div`
  margin: 2rem 0;
  .underline {
    width: 5rem;
    height: 5px;
    background: var(--clr-violet-5);
  }
`
const myH4: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h3 style={{ margin: "2rem 0", color: "var(--clr-violet-5)" }}>
      {children}
    </h3>
  )
}

export { myH2, myH4 }
