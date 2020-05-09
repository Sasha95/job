import React from "react"
import globalStyles from "../globalStyles.module.css"
import styles from "./header.module.css"
import classnames from "classnames"
import sber from "../../static/images/sber.svg"
import hugges from "../../static/images/hugges.svg"
import nokia from "../../static/images/nokia.svg"
import vtb from "../../static/images/vtb.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "../navbar/Navbar"
import rupor from "../../static/images/rupor.svg"
import rating_39 from "../../static/images/rating-39.svg"
import rating_41 from "../../static/images/rating-41.svg"

export const Header = () => {

  return (
    <header className={styles.header}>
      <img className={styles.ruporHeader} alt={"rupor"} src={rupor} />
      <Navbar />
      <div className={globalStyles.globalContainer}>
        <div className={classnames(styles.content)}>
          <span className={styles.need}>Нам нужны</span>
          <div className={classnames(styles.carousel)}>
            <div className="carousel-inner" role="listbox">
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
        <div className={styles.raiting}>
          <img src={rating_41} alt={"tagline"} />
          <img src={rating_39} alt={"tagline"} />
        </div>
      </div>
    </header>
  )
}
