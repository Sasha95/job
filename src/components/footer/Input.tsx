import React, { FC } from "react"
import styles from "./input.module.css"

interface IProps {
    label: string;
    onChange: (e: string) => void;
}

export const Input: FC<IProps> = ({ label, onChange }) => {
    return (
        <>
            {/* <form> */}
            <div className={styles.group}>
                <input onChange={(e) => onChange(e.target.value)} className={styles.input} type="text" required />
                <span className={styles.highlight}></span>
                <span className={styles.bar}></span>
                <label className={styles.label}>{label}</label>
            </div>
            {/* </form> */}
        </>
    )
}