import React, { useState } from "react"
import classnames from "classnames"
import styles from "./footer.module.css"
import globalStyles from "../globalStyles.module.css"
import { Input } from "./Input"
import { MessageContainer } from "./MessageContainer"
import bookWebp from "../../static/images/book.webp"
import book from "../../static/images/book.png"
import logo from "../../static/images/logo.svg"

import { Error } from "./Error"
import { v1 } from "uuid"
import { Social } from "./social/Social"
import { sendResume } from "../services/SendResume"


export const Footer = () => {
    const [key, setKey] = useState(v1().toString())
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState()

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)

    const [contact, setContact] = useState("")
    const [contactError, setContactError] = useState(false)

    const [message, setMessage] = useState("")

    const [successMessage, setSuccessMessage] = useState("")
    const [failMessage, setFailMessage] = useState("")


    const onSubmit = async () => {
        const nameCurrentError = name.trim() === ""
        setNameError(nameCurrentError)

        const contactCurrentError = contact.trim() === ""
        setContactError(contactCurrentError)

        if (!nameCurrentError && !contactCurrentError) {
            const result = await sendResume(file, fileName, name, contact, message);

            if (result.status) {
                setSuccessMessage(result.message)

                setName("")
                setContact("")
                setMessage("")
                setKey(v1().toString())
            } else {
                setFailMessage(result.message)
            }
        }
    }

    return (
        <div key={key} className={styles.wrapper}>
            <div className={classnames(globalStyles.globalContainer)}>
                <div className={"row m-0 px-3"}>
                    <form className={"col-lg-8"}>
                        <h1 className={classnames(globalStyles.title, styles.titleFooter)}>Напишите нам</h1>
                        <div className={"row m-0 d-flex flex-column flex-md-row d-md-flex"}>
                            <div className={"col pl-0"}>
                                <Input onChange={(e) => setName(e)} label={"Имя"} />
                                <Error isActive={nameError}>Пожалуйста, введите Ваше имя</Error>
                            </div>
                            <div className={"col pl-0 pl-md-2 mt-5 m-md-0"}>
                                <Input onChange={(e) => setContact(e)} label={"Почта или телефон"} />
                                <Error isActive={contactError}>Пожалуйста, заполните поле</Error>
                            </div>
                        </div>
                        <div className={"row m-0"}>
                            <div className={"col p-0"}>
                                <MessageContainer
                                    setMessage={(e) => setMessage(e)}
                                    file={file}
                                    fileName={fileName}
                                    setFile={setFile}
                                    setFileName={setFileName}
                                />
                            </div>
                        </div>
                        <div className={"row mx-0 d-md-flex justify-content-center justify-content-md-start"}>
                            <a onClick={onSubmit} className={styles.send}>Отправить</a>
                        </div>

                        {successMessage && <div className={styles.success}>{successMessage}</div>}
                        {failMessage && <div className={styles.fail}>{failMessage}</div>}

                        <div className={classnames(styles.contact, "d-none d-lg-flex")}>
                            <div>
                                <img className={styles.image} alt={"logo"} src={logo} />
                            </div>
                            <a href="office@dex-it.ru" className={styles.contactText}>
                                office@dex-it.ru
                            </a>
                            <a href="tel:+37377778335" className={styles.contactText}>
                                0 777 783 35
                            </a>
                        </div>
                    </form>

                    <div className={classnames("col offset-xl-1", styles.bookContainer)}>
                        <div className={"d-none d-lg-block"}>
                            <picture>
                                <source srcSet={bookWebp} type="image/webp" />
                                <source srcSet={book} type="image/png" />
                                <img src={book} alt="book" />
                            </picture>
                            <div className={styles.text}>
                                Если тебе понравилась эта книга, то мы наверняка найдем общий язык
                            </div>
                        </div>
                        <Social classname={"d-none d-lg-flex"} />
                    </div>
                </div>
                <div className={"row mx-3 d-flex d-lg-none pb-4"}>
                    <div className="col">
                        <div className={"pb-3"}>
                            <img className={styles.image} alt={"logo"} src={logo} />
                        </div>
                        <a href="office@dex-it.ru" className={classnames(styles.contactText, "ml-0")}>
                            office@dex-it.ru
                        </a>
                    </div>
                    <div className="col d-flex flex-column align-items-end">
                        <Social />
                        <a href="tel:+37377778335" className={classnames(styles.contactText, "ml-0")}>
                            0 777 783 35
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}