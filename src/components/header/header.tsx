import React, { useState, useEffect, useRef } from "react"
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
import bg1 from "../../static/images/bg1.svg"
import rating_39 from "../../static/images/rating-39.svg"
import rating_41 from "../../static/images/rating-41.svg"
import { ModalShow } from "../modal/Modal"
import Carousel from 'react-bootstrap/Carousel'
import { useComponentSize } from "../../hooks/UseComponentSize"
import { useWindowSize } from "../../hooks/UseWindowSize"

export const Header = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(0)
  const innerContainerRef = useRef()

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      if (currentScroll !== scroll) {
        setScroll(currentScroll)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scroll])

  const { height } = useWindowSize()
  const { width: parentWidth } = useComponentSize(innerContainerRef)
  const fullWidth = 650

  let translateX =
    (3 * ((fullWidth - parentWidth) * scroll)) / height
  translateX =
    translateX > fullWidth - parentWidth ? fullWidth - parentWidth : translateX

  return (
    <>
      <ModalShow show={show} hideModal={hideModal} />
      <header className={styles.header} ref={innerContainerRef}>
        <img className={styles.ruporHeader} alt={"rupor"} src={rupor} />
        <img className={styles.bg1} alt={"rupor"} src={bg1} />
        <Navbar />
        <div className={globalStyles.globalContainer}>
          <div className={classnames(styles.content)}>
            <span className={styles.need}>Нам нужны</span>

            <Carousel controls={false} indicators={false} interval={2000}>
              <Carousel.Item>
                <div className={styles.position}>
                  Mobile
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.position}>
                  Back-end
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.position}>
                  Front-end
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={styles.position}>
                  ML
                </div>
              </Carousel.Item>
            </Carousel>
            <a
              onClick={showModal}
              className={classnames(styles.btn, globalStyles.btn)}
              data-toggle="modal"
            >
              Напишите нам
              </a>
          </div>

          <div className={styles.clients}>
            <span className={styles.ourClients}>Наши клиенты</span>
            <div className={styles.clientsContainer}>
              <div style={{ transform: `translateX(-${translateX}px)`, display: "flex" }} >
                <div className={styles.vtbContainer}>
                  <img className={styles.logo} src={vtb} alt={"vtb"} />
                </div>
                <div className={styles.huggiesContainer}>
                  <img className={styles.logo} src={hugges} alt={"hugges"} />
                </div>
                <div className={styles.sberContainer}>
                  <img className={styles.logo} src={sber} alt={"sber"} />
                </div>
                <div className={styles.nokiaContainer}>
                  <img className={styles.logo} src={nokia} alt={"nokia"} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.raiting}>
            <img className={styles.raitingImg} src={rating_41} alt={"tagline"} />
            <img className={styles.raitingImg} src={rating_39} alt={"tagline"} />
          </div>
        </div>
      </header>
    </>
  )
}
