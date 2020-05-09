import React from "react"

import { Header } from "./header/header"
import "./layout.css"
import { OurBun } from "./bun/OurBun"
import { Footer } from "./footer/Footer"
import { TeamVideo } from "./video/TeamVideo"
import { Images } from "./images/images"

export const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={"title"} />
      <div>
        <main>
          <OurBun />
          <TeamVideo />
          <Images />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
