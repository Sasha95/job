import React from "react"
import globalStyles from "../globalStyles.module.css"
import styles from "./bun.module.css"
import classnames from "classnames"
import port from "../../static/images/port.svg"
import handshake from "../../static/images/handshake.svg"
import backgroud from "../../static/images/bg.svg"
import { Profi } from "./Profi"
import men from "../../static/images/man.svg"

export const OurBun = () => {
    return (
        <div className={styles.main}>
            <img src={backgroud} alt="backgroud" className={styles.backgroud} />
            <div className={classnames(styles.wrapper, globalStyles.globalContainer)}>
                <div className={"row"}>
                    <h1 className={classnames(globalStyles.title, styles.title)}>#нашиПЛЮШКИ</h1>
                </div>
                <div className={classnames("row d-flex flex-column flex-xl-row", styles.content)}>
                    <div className={classnames("col", styles.text)}>
                        <div className={"row"}>
                            <div className={"col-lg-2 d-flex align-self-center m-0"}>
                                <img className={styles.image} src={port} alt="port" />
                            </div>
                            <div className={classnames("col", styles.text)}>
                                <span>Высокая заработная плата <br /></span>
                                <span>Максимально гибкий график<br /></span>
                                <span>Программа переселения из других городов<br /></span>
                                <span>Спортивные активитеты (байдарки, велосипеды, пейнбол, картинг, боулинг)</span>
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className={"row"}>
                            <div className={"col-lg-2 d-flex align-self-center"}>
                                <img className={styles.image} src={handshake} alt="handshake" />
                            </div>
                                <div className={classnames("col", styles.text)}>
                                    <span>Горячие обеды за счет компании<br/></span>
                                    <span>Просторный офис в самом центре города<br/></span>
                                    <span>Книжная библиотека, PlayStation, кальян<br/></span>
                                    <span>Печеньки, фрукты и мороженое!)<br/></span>
                                    <span>Своя футбольная команда по мини-футболу</span>
                                </div>
                        </div>
                    </div>
                </div>
                <Profi />
                <img className={styles.men} alt={"man"} src={men} />
            </div>
        </div>
    )
}