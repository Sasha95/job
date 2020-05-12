import React from "react"
import globalStyles from "../globalStyles.module.css"
import styles from "./bun.module.css"
import classnames from "classnames"
import port from "../../static/images/port.svg"
import handshake from "../../static/images/handshake.svg"
import backgroud from "../../static/images/bg.svg"
import { Profi } from "./Profi"
import men from "../../static/images/man.svg"
import item from "../../static/images/item.svg"

export const OurBun = () => {
    return (
        <div className={styles.main}>
            <img src={backgroud} alt="backgroud" className={styles.backgroud} />
            <div className={classnames(styles.wrapper, globalStyles.globalContainer)}>
                <div className={classnames("row", globalStyles.globalContainer)}>
                    <h1 className={classnames(globalStyles.title, styles.title)}>#нашиПЛЮШКИ</h1>
                </div>
                <div className={classnames("row d-flex flex-column flex-xl-row mx-0 pl-0", styles.content, globalStyles.globalContainer)}>
                    <div className={classnames("col", styles.text)}>
                        <div className={"row md-mb-5 mb-xl-0 mb-md-5"}>
                            <div className={"col-2 d-none d-md-flex align-self-center m-0"}>
                                <img className={styles.image} src={port} alt="port" />
                            </div>
                            <div className={classnames("col px-0", styles.text)}>
                              <div className={"d-flex align-items-start"}>
                                <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                <div>Высокая заработная плата</div>
                                <br/>
                              </div>
                              <div className={"d-flex align-items-start"}>
                                <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                <div>Максимально гибкий график</div>
                                <br/>
                              </div>
                              <div className={"d-flex align-items-start"}>
                                <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                <div>Программа переселения из других городов</div>
                                <br/>
                              </div>
                              <div className={"d-flex align-items-start"}>
                                <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                <div>Спортивные активитеты (байдарки, велосипеды, пейнбол, картинг, боулинг)</div>
                                <br/>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col"}>
                        <div className={"row"}>
                            <div className={"col-2 d-none d-md-flex align-self-center m-0"}>
                                <img className={styles.image} src={handshake} alt="handshake" />
                            </div>
                                <div className={classnames("col px-0", styles.text)}>
                                  <div className={"d-flex align-items-start"}>
                                    <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                    <div>Горячие обеды за счет компании</div>
                                    <br/>
                                  </div>
                                  <div className={"d-flex align-items-start"}>
                                    <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                    <div>Просторный офис в самом центре города</div>
                                    <br/>
                                  </div>
                                  <div className={"d-flex align-items-start"}>
                                    <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                    <div>Книжная библиотека, PlayStation, кальян</div>
                                    <br/>
                                  </div>
                                  <div className={"d-flex align-items-start"}>
                                    <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                    <div>Печеньки, фрукты и мороженое!)</div>
                                    <br/>
                                  </div>
                                  <div className={"d-flex align-items-start"}>
                                    <img className={"mr-1 pt-2 d-flex d-md-none mr-1"} src={item}/>
                                    <div>Своя футбольная команда по мини-футболу</div>
                                    <br/>
                                  </div>
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