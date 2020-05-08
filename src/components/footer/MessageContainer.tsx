import React, { useState, useRef } from "react"
import styles from "./meaasgeContainer.module.css"
import { Input } from "./Input"
import attach from "../../static/images/clip.svg"
import { dataURItoBLOB } from "../services/dataURItoBLOB"
import { v1 } from "uuid"

export const MessageContainer = () => {
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

    const fileInputRef = useRef(null)

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

    const onChangeField = (name: string) => e => {
        switch (name) {
            case "name": {
                setName(e.target.value)
                return
            }
            case "contact": {
                setContact(e.target.value)
                return
            }
            case "message": {
                setMessage(e.target.value)
                return
            }
            default: {
                return
            }
        }
    }


    const onClickAttach = () => {
        if (fileInputRef.current != null) {
            fileInputRef.current.value = ""
            fileInputRef.current.click()
        }
    }

    const onFileInputChange = () => {
        if (fileInputRef.current != null) {
            const files = fileInputRef.current.files
            if (files && files[0]) {
                setFile(undefined)
                setFileName(undefined)

                const reader = new FileReader()
                // tslint:disable-next-line: no-any
                reader.onload = (e: any) => {
                    setFile(e.target.result)
                    setFileName(files[0].name)
                }
                reader.readAsDataURL(files[0])
            }
        }
    }

    return (
        <div className={styles.container}>
            <Input label={"Текст собщения"} />
            {file && <div className={styles.fileName}>{fileName}</div>}
            <img className={styles.image} src={attach} onClick={onClickAttach} />
            <input
                className={styles.attachFile}
                ref={fileInputRef}
                type="file"
                // accept=".jpg,.jpeg,.png"
                onChange={onFileInputChange}
            />
        </div>
    )
}