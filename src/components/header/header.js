import { Link } from "gatsby"
import React from "react"
import globalStyles from "../globalStyles.module.css"
import styles from "./header.module.css"
import classnames from "classnames"
import rupor from "../../images/bg.svg"
import logo from "../../images/logo.svg"
import sber from "../../images/sber.svg"
import hugges from "../../images/hugges.svg"
import nokia from "../../images/nokia.svg"
import vtb from "../../images/vtb.svg"
import close from "../../images/close.svg"

export const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <img src={rupor} alt={"rupor"} className={styles.ruporHeader}/>
    <div className={classnames(styles.navContainer, styles.mynavbar, globalStyles.globalContainer)}>
      <div className={styles.flyout} id="flyout-example">
          <div className={styles.flyoutButtons}>
            <a className={styles.logoLink} href = "https://dex-it.ru">
              <img className={styles.logo} src={logo}/>
              <span className={styles.bottomLogo}> iT компания #1</span>
            </a>
            <ul id="myTopnav" className={classnames(styles.navbarRight)}>
              <div className={styles.contResp}>

                <a href="#">
                  <div className={styles.logo}></div>
                </a>
                <a href="#">
                  <img src={close} alt="close"/>
                </a>
              </div>
              <a onClick="closeBurger()" className={classnames(styles.linkImg, styles.level1)} href="#about">НАШИ ПЛЮШКИ</a>
              <a onClick="closeBurger()" className={classnames(styles.linkImg, styles.level1)} href="#rewards">МЫ В РЕЙТИНГАХ</a>
              <a onClick="closeBurger()" className={classnames(styles.linkImg, styles.level1)} href="#events">МЕРОПРИЯТИЯ</a>
              <a onClick="closeBurger()" className={classnames(styles.linkImg, styles.level1)} href="#requires">КОНТАКТЫ</a>
            </ul>
          </div>
      </div>
    </div>



    <div className={styles.containerFluid}>
    <div className={styles.send}>
    <span className={styles.need}>
    Нам нужны
    </span>


    {/*<!-- Carousel container -->*/}
      <div className={classnames(styles.carousel, styles.slide)} data-ride="carousel" data-interval="2000">
        {/*<!-- Content -->*/}
        <div className="carousel-inner" role="listbox">
          {/*<!-- Slide 1 -->*/}
          <div className="position item active">
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
          <a href="#" className={styles.btn} data-toggle="modal" data-target="#sendResume">Напишите нам</a>
          {/*</div>*/}
        </div>
        <span className={styles.ourClients}>Наши клиенты</span>
        {/*<div>*/}
        <img className={styles.clientIcon} src={hugges}/>
        <img className={styles.clientIcon} src={nokia}/>
        <img className={styles.clientIcon} src={vtb}/>
        <img className={styles.clientIcon} src={sber}/>
      </div>
    </div>


    </div>
  </header>
)