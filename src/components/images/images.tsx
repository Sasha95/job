import React, { useState, useRef } from "react"
import styles from "./images.module.css"
import globalStyles from "../globalStyles.module.css"
import classnames from "classnames"
import img1webp from "../../static/images/1.jpg"
import img1jpg from "../../static/images/1.webp"
import img2webp from "../../static/images/2.jpg"
import img2jpg from "../../static/images/2.webp"
import img3webp from "../../static/images/3.jpg"
import img3jpg from "../../static/images/3.webp"
import img4webp from "../../static/images/4.jpg"
import img4jpg from "../../static/images/4.webp"
import img5webp from "../../static/images/5.jpg"
import img5jpg from "../../static/images/5.webp"
import img6webp from "../../static/images/6.jpg"
import img6jpg from "../../static/images/6.webp"
import img7webp from "../../static/images/7.jpg"
import img7jpg from "../../static/images/7.webp"
import img8webp from "../../static/images/8.jpg"
import img8jpg from "../../static/images/8.webp"
import img9webp from "../../static/images/9.jpg"
import img9jpg from "../../static/images/9.webp"
import img10webp from "../../static/images/10.jpg"
import img10jpg from "../../static/images/10.webp"
import img11webp from "../../static/images/11.jpg"
import img11jpg from "../../static/images/11.webp"
import img12webp from "../../static/images/12.jpg"
import img12jpg from "../../static/images/12.webp"

export const Images = () => {
  return(
    <div className={styles.items}>
      <h1 className={classnames(styles.title, globalStyles.title)}>Наши мероприятия</h1>
      <p className={styles.headText}>Самое важное, что у нас происходит: конференции, участие
        в соревнованиях,<br/>
        нескучные лекции и веселые корпоративы.</p>
      <div className={classnames(styles.imgeContainer, globalStyles.imgeContainer)}>
        <div className={styles.activityContainer}>
        <div className={styles.imageBlock}>

          <picture>
            <source srcSet={img1webp} type="image/webp"/>
            <source srcSet={img1jpg} type="image/jpeg"/>
            <img className={styles.bigImg} src={img1jpg}/>
          </picture>
          <div className={styles.downImageContainer}>
            <picture className={styles.firstSmollImage}>
              <source srcSet={img2webp} type="image/webp"/>
              <source srcSet={img2jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img2jpg}/>
            </picture>
            <picture>
              <source srcSet={img3webp} type="image/webp"/>
              <source srcSet={img3jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img3jpg}/>
            </picture>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.topImageContainer}>
            <picture className={styles.firstSmollImage}>
              <source srcSet={img5webp} type="image/webp"/>
              <source srcSet={img5jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img5jpg}/>
            </picture>
            <picture>
              <source srcSet={img4webp} type="image/webp"/>
              <source srcSet={img4jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img4jpg}/>
            </picture>
          </div>
          <picture>
            <source srcSet={img6webp} type="image/webp"/>
            <source srcSet={img6jpg} type="image/jpeg"/>
            <img className={styles.bigImg} src={img6jpg}/>
          </picture>
        </div>

        <div className={styles.imageBlock}>
          <picture>
            <source srcSet={img7webp} type="image/webp"/>
            <source srcSet={img7jpg} type="image/jpeg"/>
            <img className={styles.bigImg} src={img7jpg}/>
          </picture>
          <div className={styles.downImageContainer}>
            <picture className={styles.firstSmollImage}>
              <source srcSet={img8webp} type="image/webp"/>
              <source srcSet={img8jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img8jpg}/>
            </picture>
            <picture>
              <source srcSet={img9webp} type="image/webp"/>
              <source srcSet={img9jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img9jpg}/>
            </picture>
          </div>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.topImageContainer}>
            <picture className={styles.firstSmollImage}>
              <source srcSet={img10webp} type="image/webp"/>
              <source srcSet={img10jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img10jpg}/>
            </picture>
            <picture>
              <source srcSet={img11webp} type="image/webp"/>
              <source srcSet={img11jpg} type="image/jpeg"/>
              <img className={styles.smallImg} src={img11jpg}/>
            </picture>
          </div>
          <picture>
            <source srcSet={img12webp} type="image/webp"/>
            <source srcSet={img12jpg} type="image/jpeg"/>
            <img className={styles.bigImg} src={img12jpg}/>
          </picture>
        </div>
        </div>

      </div>
    </div>
  )
}

