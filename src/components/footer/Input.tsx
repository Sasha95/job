import React, { FC } from "react"
import styles from "./input.module.css"

interface IProps {
    label: string;
}

export const Input: FC<IProps> = ({ label }) => {
    return (
        <>
            {/* <form> */}
            <div className={styles.group}>
                <input className={styles.input} type="text" required />
                <span className={styles.highlight}></span>
                <span className={styles.bar}></span>
                <label className={styles.label}>{label}</label>
            </div>
            {/* </form> */}
        </>
    )
}