import React, { FC, memo, useState } from "react"
import styles from "./modal.module.css"
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css"
import { Input } from "../input/Input";
import { Error } from "../error/Error";
import classnames from "classnames";

interface IProps {
    show: boolean;
    hideModal: () => void;
}

export const ModalShow: FC<IProps> = memo(({ show, hideModal }) => {
    const [name, setName] = useState("");

    return (
        <Modal size="lg" centered show={show} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Отправить резюме</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className="col">
                            <Input
                                styleLabel={styles.label}
                                style={styles.input}
                                label={"Ваше ФИО"}
                                onChange={setName}
                            />
                            <Error isActive={false}>Пожалуйста, введите Ваше имя</Error>
                        </div>
                        <div className="col">
                            <Input
                                styleLabel={styles.label}
                                style={styles.input}
                                label={"Эл. почта"}
                                onChange={setName}
                            />
                            <Error isActive={false}>Пожалуйста, введите Ваше имя</Error>
                        </div>
                    </div>

                    <div className={"row mt-3"}>
                        <div className="col">
                            <Input
                                styleLabel={styles.label}
                                style={styles.input}
                                label={"Эл. почта"}
                                onChange={setName}
                            />
                            <Error isActive={false}>Пожалуйста, введите Ваше имя</Error>
                        </div>
                        <div className="col">
                            <span>Прикрепить резюме</span>
                            <input type="file" />
                            <Error isActive={false}>Пожалуйста, введите Ваше имя</Error>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col mt-2"}>
                            <textarea
                                rows={4}
                                className={classnames(styles.input, "w-100")}
                                placeholder={"Номер телефона"}
                            // onChange={setName}
                            />
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
})