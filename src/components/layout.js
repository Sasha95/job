import React from "react"

import {Header} from "./header/header"
import "./layout.css"

export const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={'title'} />
      <div>
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}
