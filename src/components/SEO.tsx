import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SEOProps = {
  title?: string
  description?: string
  path?: string
  image?: string
  dataHook?: string
}

const SEO: React.FC<SEOProps> = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
          author
          image
          twitterUsername
        }
      }
    }
  `)

  const defaults = data.site.siteMetadata

  if (defaults.baseUrl === "" && typeof window !== "undefined") {
    defaults.baseUrl = window.location.origin
  }

  if (defaults.baseUrl === "") {
    console.error("Please set a baseUrl in your site metadata!")
    return null
  }

  //TODO
  const title = props.title || defaults.title
  const description = props.description || defaults.description
  const url = new URL(props.path || "", defaults.baseUrl).href
  const image = props.image || defaults.image
  const dataHook = props.dataHook || "homepage"

  return (
    <Helmet htmlAttributes={{ lang: "en", dataHook }}>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={defaults.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  )
}

export default SEO
