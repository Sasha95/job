import React from "react"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "../static/fonts/stylesheet.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
