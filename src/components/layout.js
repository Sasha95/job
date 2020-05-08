import React from "react"

import { Header } from "./header/header"
import "./layout.css"
import { OurBun } from "./bun/OurBun"
import { Footer } from "./footer/Footer"
import { TeamVideo } from "./video/TeamVideo"

export const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"title"} />
      <div>
        <main>
          <OurBun />
          <TeamVideo />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
