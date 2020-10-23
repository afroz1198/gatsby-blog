import React from "react"
import App from "./App"
import "./src/css/style.css"

export const wrapRootElement = ({ element }) => {
  return <App>{element}</App>
}
