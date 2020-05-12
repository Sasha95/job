import React, { FC, memo, useState, useRef } from "react"
import styles from "./modal.module.css"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css"

import { Error } from "../error/Error";
import classnames from "classnames";
import { Input, InputArea } from "../input/Input";
import globalStyle from "../globalStyles.module.css"
import { Clip } from "../../static/images/Clip";
import { sendResume } from "../services/SendResume";
import { v1 } from "uuid"

interface IProps {
    show: boolean;
    hideModal: () => void;
}

export const ModalShow: FC<IProps> = ({ show, hideModal }) => {
    const [key, setKey] = useState(v1().toString())

    const [load, setLoad] = useState(false);

    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(false)

    const [phone, setPhone] = useState("")
    const [phoneError, setPhoneError] = useState(false)

    const [mail, setMail] = useState("")
    const [mailError, setMailError] = useState(false)

    const [message, setMessage] = useState("")

    const [successMessage, setSuccessMessage] = useState("")
    const [failMessage, setFailMessage] = useState("")

    const [file, setFile] = useState()
    const [fileName, setFileName] = useState("")

    const fileInputRef = useRef(null)
    const onFileInputChange = () => {
        if (fileInputRef.current != null) {
            const files = fileInputRef.current.files
            if (files && files[0]) {
                setFile(undefined)
                setFileName(undefined)

                const reader = new FileReader()
                reader.onload = (e: any) => {
                    setFile(e.target.result)
                    setFileName(files[0].name)
                }
                reader.readAsDataURL(files[0])
            }
        }
    }

    const handleSubmit = async () => {
        const nameCurrentError = name.trim() === ""
        setNameError(nameCurrentError)

        const phoneCurrentError = phone.trim() === ""
        setPhoneError(phoneCurrentError)

        const mailCurrentError = mail.trim() === ""
        setMailError(mailCurrentError)

        if (!nameCurrentError && !phoneCurrentError && !mailCurrentError) {
            setLoad(true);

            const result = await sendResume(file, fileName, name, mail + ' ' + phone, message);

            if (result.status) {
                setSuccessMessage(result.message)

                setName("")
                setPhone("")
                setMessage("")
                setMail("")
                setKey(v1().toString())
            } else {
                setFailMessage(result.message)
            }
            setLoad(false)
        }
    }

    return (
        <Modal key={key} size="lg" centered show={show} onHide={hideModal}>
            <Modal.Header closeButton className={styles.headerModal}>
                <Modal.Title className={"pl-3"}>Отправить резюме</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={"container"}>
                    <div className={"row d-flex flex-column flex-lg-row"}>
                        <div className="col">
                            <Input
                                styleLabel={styles.label}
                                style={styles.input}
                                label={"Ваше ФИО*"}
                                onChange={setName}
                            />
                            <Error isActive={nameError}>Введите Ваше имя</Error>
                        </div>
                        <div className="col mt-3 mt-lg-0">
                            <Input
                                styleLabel={styles.label}
                                style={styles.input}
                                label={"Эл. почта*"}
                                onChange={setMail}
                            />
                            <Error isActive={mailError}>Введите Вашу почту</Error>
                        </div>
                    </div>

                    <div className={"row mt-3 row d-flex flex-column flex-lg-row"}>
                        <div className="col">
                            <Input
                                styleLabel={styles.label}
                                style={styles.input}
                                label={"Номер телефона*"}
                                onChange={setPhone}
                            />
                            <Error isActive={phoneError}>Введите Ваш номер телефона</Error>
                        </div>
                        <div className="col mt-3 mt-lg-0">
                            <label className={classnames(styles.fileUpload, file ? styles.success : "")}>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    // accept=".jpg,.jpeg,.png"
                                    onChange={onFileInputChange}
                                />
                                <span className={styles.clipContainer}>
                                    {!file && <Clip classname={styles.clip} color={"#E82B37"} />}
                                    {
                                        file ? <span>{fileName && fileName}</span>
                                            : <span className={styles.clipFont}>Прикрепить файл</span>
                                    }
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className={"row mt-2"}>
                        <div className={"col mt-2"}>
                            <InputArea
                                styleLabel={styles.label}
                                style={classnames(styles.input)}
                                label={"Текст сообщения"}
                                onChange={setMessage}
                                lines={4}
                            />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div onClick={handleSubmit} className={"col d-flex align-items-end mb-2 justify-content-center justify-content-lg-end"}>
                            {load &&
                                <div
                                    className="d-flex spinner-border text-primary"
                                    role="status"
                                    style={{ width: "3rem", height: "3rem", marginRight: "24px" }}
                                />
                            }
                            <a className={classnames(styles.btn, globalStyle.btn)}>оставить заявку</a>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}