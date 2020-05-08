import React from "react"
import styles from "./profi.module.css"
import classnames from "classnames"
import globalStyle from "../globalStyles.module.css"

export const Profi = () => {
    return (
        <div>
            <div className={styles.content}>
                <h1 className={classnames(styles.titleProfi, globalStyle.title)}>
                    Профессиональное <br />развитие
                </h1>
                <ul className={styles.textContainer}>
                    <div>
                        <li className={styles.text}>Персональный наставник для каждого <br />новичка</li>
                        <li className={styles.text}>Индивидуальная дорожная карта <br />развития навыков</li>
                        <li className={styles.text}>Конференции, митапы, семинары, <br />хакатоны</li>
                    </div>
                </ul>

            </div>
        </div>
    )
}