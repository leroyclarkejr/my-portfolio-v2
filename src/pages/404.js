import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <section className="error">
      <h2>NOT FOUND</h2>
      <h5>You just hit a route that doesn&#39;t exist... the sadness.</h5>
    </section>
  </Layout>
)

export default NotFoundPage
