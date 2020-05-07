import React from "react"
import globalStyles from "../globalStyles.module.css"
import styles from "./bun.module.css"
import classnames from "classnames"
import port from "../../static/images/port.svg"
import handshake from "../../static/images/handshake.svg"
import backgroud from "../../static/images/bg_wave_up.svg"

export const OurBun = () => {
    return (
        <div >
            <img src={backgroud} alt="backgroud" className={styles.backgroud} />
            <div className={"container"}>
                <div className={"row"}>
                    <h1 className={globalStyles.title}>#нашиПЛЮШКИ</h1>
                </div>
                <div className={classnames("row", styles.content)}>
                    <div className={classnames("col", styles.text)}>
                        <div className={"row"}>
                            <div className={"col-lg-2"}>
                                <img className={styles.image} src={port} alt="port" />
                            </div>
                            <div className={"col"}>
                                Высокая заработная плата <br />
                                Максимально гибкий график<br />
                                Программа переселения из других городов<br />
                                Спортивные активитеты (байдарки, велосипеды, пейнбол, картинг, боулинг)
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className={"row"}>
                            <div className={"col-lg-2"}>
                                <img className={styles.image} src={handshake} alt="handshake" />
                            </div>
                            <div className={"col"}>
                                Горячие обеды за счет компании<br />
                            Просторный офис в самом центре города<br />
                            Книжная библиотека, PlayStation, кальян<br />
                            Печеньки, фрукты и мороженое!)<br />
                            Своя футбольная команда по мини-футболу
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}