import React, { FC } from "react"
import Modal from "react-bootstrap/Modal"
import styles from "./modalResult.module.css"

interface IProps {
    show: boolean;
    hideModal: () => void;
    result: boolean;
}

export const ModalResult: FC<IProps> = React.memo(({ hideModal, show, result }) => {
    return (
        <Modal size="lg" centered show={show} onHide={hideModal}>
            <Modal.Body className={styles.headerModal}>
                {result ?
                    <div className={styles.container}>
                        <div className={styles.title}>
                            Ошибка при отправке
                        </div>
                        <div className={styles.description}>
                            Попробуйте позже или отправте письмо на почту
                        </div>
                        <div className={styles.mail}>
                            office@dex-it.ru
                        </div>
                    </div>
                    :
                    <div className={styles.container}>
                        <div className={styles.title}>
                            Отправка прошла успешно
                        </div>
                    </div>
                }
            </Modal.Body>
        </Modal>
    )
})