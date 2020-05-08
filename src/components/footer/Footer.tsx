import React from "react"
import styles from "./footer.module.css"
import globalStyles from "../globalStyles.module.css"
import classnames from "classnames"

export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classnames(globalStyles.globalContainer)}>
                <div className={"row"}>
                    <div className={"col"}>
                        <h1 className={globalStyles.title}>Напишите нам</h1>
                        <input type="text" />
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    )
}