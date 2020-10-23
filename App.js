import React from "react"
import { MDXProvider } from "@mdx-js/react"
import {
  Headings,
  Code,
  Blockquote,
  PrismSetup,
} from "./src/components/Complete"
import { ThemeProvider } from "./src/ThemeContext"

const components = {
  h3: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
}
function App({ children }) {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  )
}

export default App
