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
                <div className={classnames("row", styles.content)}>
                    <div className={classnames("col", styles.text)}>
                        <div className={"row"}>
                            <div className={"col-lg-2 d-flex align-self-center m-0"}>
                                <img className={styles.image} src={port} alt="port" />
                            </div>
                            <div className={classnames("col", styles.text)}>
                                Высокая заработная плата <br />
                                Максимально гибкий график<br />
                                Программа переселения из других городов<br />
                                Спортивные активитеты (байдарки, велосипеды, пейнбол, картинг, боулинг)
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className={"row"}>
                            <div className={"col-lg-2 d-flex align-self-center"}>
                                <img className={styles.image} src={handshake} alt="handshake" />
                            </div>
                            <div className={classnames("col", styles.text)}>
                                Горячие обеды за счет компании<br />
                                    Просторный офис в самом центре города<br />
                                    Книжная библиотека, PlayStation, кальян<br />
                                    Печеньки, фрукты и мороженое!)<br />
                                    Своя футбольная команда по мини-футболу
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