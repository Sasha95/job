import React from "react"
import classnames from "classnames"
import styles from "./footer.module.css"
import globalStyles from "../globalStyles.module.css"
import { Input } from "./Input"
import { MessageContainer } from "./MessageContainer"
import bookWebp from "../../static/images/book.webp"
import book from "../../static/images/book.png"
import logo from "../../static/images/logo.svg"
import vk from "../../static/images/social/vk.svg"
import instagram from "../../static/images/social/instagram.svg"
import facebook from "../../static/images/social/facebook.svg"
import classnames from "classnames"


export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classnames(globalStyles.globalContainer)}>
                <div className={"row m-0"}>
                    <form className={"col-lg-8"}>
                        <h1 className={classnames(globalStyles.title, styles.titleFooter)}>Напишите нам</h1>
                        <div className={"row m-0"}>
                            <div className={"col pl-0"}>
                                <Input label={"Имя"} />
                            </div>
                            <div className={"col"}>
                                <Input label={"Почта или телефон"} />
                            </div>
                        </div>
                        <div className={"row m-0"}>
                            <div className={"col p-0"}>
                                <MessageContainer />
                            </div>
                        </div>
                        <div className={"row m-0"}>
                            <a className={styles.send}>Отправить</a>
                        </div>

                        <div className={styles.contact}>
                            <div>
                                <img className={styles.image} alt={"logo"} src={logo} />
                            </div>
                            <div className={styles.contactText}>
                                office@dex-it.ru
                            </div>
                            <div className={styles.contactText}>
                                0 777 783 35
                            </div>
                        </div>
                    </form>

                    <div className={classnames("col offset-1", styles.bookContainer)}>
                        <div>
                            <picture>
                                <source srcSet={bookWebp} type="image/webp" />
                                <source srcSet={book} type="image/png" />
                                <img src={book} alt="book" />
                            </picture>
                            <div className={styles.text}>
                                Если тебе понравилась эта книга, то мы наверняка найдем общий язык
                        </div>
                        </div>
                        <div className={styles.social}>
                            <div className={styles.socialContainer}>
                                <img className={styles.socialImg} alt={"facebook"} src={facebook} />
                            </div>
                            <div className={styles.socialContainer}>
                                <img className={styles.socialImg} alt={"instagram"} src={instagram} />
                            </div>
                            <div className={styles.socialContainer}>
                                <img className={styles.socialImg} alt={"vk"} src={vk} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}