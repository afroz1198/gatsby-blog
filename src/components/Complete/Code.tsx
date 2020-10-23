import React from "react"

interface CodeProps {
  children: React.ReactNode
}
const Code: React.FC<CodeProps> = ({ children }) => {
  return (
    <code
      style={{
        background: "var(--clr-grey-10)",
        color: "var(--clr-grey-5)",
        padding: ".5rem",
        borderRadius: "var(--radius)",
      }}
    >
      {children}
    </code>
  )
}

export default Code
