import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Footer from "./Footer"
import Header from "./Header"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subtitle
        }
      }
    }
  `)

  const { title, subtitle } = data.site.siteMetadata
  return (
    <React.Fragment>
      <Header siteTitle={title} subtitle={subtitle} />
      <main className="main">
        <div className="content-wrapper">{children}</div>
      </main>

      <Footer />
    </React.Fragment>
  )
}

export default Layout
