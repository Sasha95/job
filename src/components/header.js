import { Link } from "gatsby"
import React from "react"

export const Header = ({ siteTitle }) => (
  <header>
    
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
  </header>
)