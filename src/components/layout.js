import React from "react"

import { Header } from "./header/header"
import "./layout.css"
import { OurBun } from "./bun/OurBun"
import { Footer } from "./footer/Footer"
import { TeamVideo } from "./video/TeamVideo"
import { Raiting } from "./rating/Rating"
import { Images } from "./images/images"
import SEO from "./seo"

export const Layout = ({ children }) => {
  return (
    <>
      <SEO title="DexTechnology - Хочешь стать лучшим, присоединяйся к лучшим!" />
      <Header />
      <div>
        <main>
          <OurBun />
          <TeamVideo />
          <Raiting />
          <Images />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
