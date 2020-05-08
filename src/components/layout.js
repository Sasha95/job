import React from "react"

import { Header } from "./header/header"
import "./layout.css"
import { OurBun } from "./bun/OurBun"
import { Footer } from "./footer/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"title"} />
      <div>
        <main>
          <OurBun />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
