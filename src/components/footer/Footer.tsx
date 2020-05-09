import React, { useState } from "react"
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
import { Error } from "./Error"
import { dataURItoBLOB } from "../services/dataURItoBLOB"
import { v1 } from "uuid"


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

            try {
                const body = new FormData()
                body.append("name", name)
                body.append("phone", contact)
                body.append("message", message)

                if (file) {
                    body.append("file", dataURItoBLOB(file), fileName)
                }

                await fetch("https://dex-it.ru/Ru/Page/TechTaskEmail", {
                    method: "POST",
                    headers: {
                        // "Content-Type": "multipart/form-data",
                    },
                    body,
                })
                setSuccessMessage("Спасибо! Мы ответим Вам в течение 45 мин!")

                setName("")
                setContact("")
                setMessage("")
                setKey(v1().toString())
            } catch (error) {
                setFailMessage(error.message)
            }
        }
    }

    return (
        <div key={key} className={styles.wrapper}>
            <div className={classnames(globalStyles.globalContainer)}>
                <div className={"row m-0"}>
                    <form className={"col-lg-8"}>
                        <h1 className={classnames(globalStyles.title, styles.titleFooter)}>Напишите нам</h1>
                        <div className={"row m-0"}>
                            <div className={"col pl-0"}>
                                <Input onChange={(e) => setName(e)} label={"Имя"} />
                                <Error isActive={nameError}>Пожалуйста, введите Ваше имя</Error>
                            </div>
                            <div className={"col"}>
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
                        <div className={"row mx-0"}>
                            <a onClick={onSubmit} className={styles.send}>Отправить</a>
                        </div>

                        {successMessage && <div className={styles.success}>{successMessage}</div>}
                        {failMessage && <div className={styles.fail}>{failMessage}</div>}

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