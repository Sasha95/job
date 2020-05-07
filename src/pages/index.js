import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { OurBun } from "../components/bun/OurBun"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "../static/fonts/stylesheet.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <OurBun />
  </Layout>
)

export default IndexPage
