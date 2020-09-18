/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image, url }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            title
            description
            image
            url
            author
          }
        }
      }
    `
  )

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.SiteMetadata.title}
      meta={[
        {
          name: `description`,
          content: site.SiteMetadata.description,
        },
        {
          name: `image`,
          content: site.SiteMetadata.image,
        },
        {
          property: `og:title`,
          content: site.SiteMetadata.title,
        },
        {
          property: `og:site_name`,
          content: site.SiteMetadata.title,
        },
        {
          property: `og:description`,
          content: site.SiteMetadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          propert: `og:image`,
          content: site.SiteMetadata.image,
        },
        {
          property: `og:url`,
          content: pathname,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: null,
  title: null,
  image: null,
  type: null,
  url: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
}

export default SEO
