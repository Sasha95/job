import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.css"

export const Header = ({ siteTitle }) => (
  <header>
    <h1 className={styles.test}>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)
