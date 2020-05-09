import React, { useState, useEffect } from "react"
import globalStyles from "../globalStyles.module.css"
import styles from "./header.module.css"
import classnames from "classnames"
import rupor from "../../static/images/rupor.svg"
import logo from "../../static/images/logohead.svg"
import sber from "../../static/images/sber.svg"
import hugges from "../../static/images/hugges.svg"
import nokia from "../../static/images/nokia.svg"
import vtb from "../../static/images/vtb.svg"
import close from "../../images/close.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import { useHideOnScrolled } from "../../hooks/UseHideScroll"

export const Header = () => {
  const hidden = useHideOnScrolled();

  return (
    <header className={styles.header}>
      {/* <img src={rupor} alt={"rupor"} className={styles.ruporHeader} /> */}
      <div className={globalStyles.globalContainer}>
        <div className={classnames(styles.navContainer, "navbar sticky-top navbar-light", hidden ? styles.scroll : "")}>
            <a className={styles.logoLink} href="https://dex-it.ru">
              <img className={styles.logo} src={logo} />
              <span className={styles.bottomLogo}> iT компания #1</span>
            </a>
            <ul id="myTopnav" className={classnames(styles.navbarRight)}>
              <div className={styles.contResp}>

                <a href="#">
                  <div className={styles.logo}></div>
                </a>
                <a href="#">
                  <img src={close} alt="close" />
                </a>
              </div>
              <a className={classnames(styles.linkImg, styles.level1)} href="#about">НАШИ ПЛЮШКИ</a>
              <a className={classnames(styles.linkImg, styles.level1)} href="#rewards">МЫ В РЕЙТИНГАХ</a>
              <a className={classnames(styles.linkImg, styles.level1)} href="#events">МЕРОПРИЯТИЯ</a>
              <a className={classnames(styles.linkImg, styles.level1)} href="#requires">КОНТАКТЫ</a>
            </ul>
        </div>

        <span className={styles.need}>Нам нужны</span>

        {/*<!-- Carousel container -->*/}
        <div className={classnames(styles.carousel)}>
          {/*<!-- Content -->*/}
          <div className="carousel-inner" role="listbox">
            {/*<!-- Slide 1 -->*/}
            <div className={styles.position}>
              Mobile
              </div>
            {/*<!-- Slide 2 -->*/}
            {/*<div className="position item">*/}
            {/*Back-end*/}
            {/*</div>*/}
            {/*<!-- Slide 3 -->*/}
            {/*<div className="position item">*/}
            {/*Front-end*/}
            {/*</div>*/}
            {/*<!-- Slide 4 -->*/}
            {/*<div className="position item">*/}
            {/*ML*/}
            {/*</div>*/}
          </div>
          <a href="#" className={styles.btn} data-toggle="modal" data-target="#sendResume">Напишите нам</a>
          <span className={styles.ourClients}>Наши клиенты</span>
          <div>
            <img className={styles.clientIcon} src={hugges} />
            <img className={styles.clientIcon} src={nokia} />
            <img className={styles.clientIcon} src={vtb} />
            <img className={styles.clientIcon} src={sber} />
          </div>
        </div>
      </div>
    </header>
  )
}
