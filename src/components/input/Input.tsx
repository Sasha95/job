import React, { FC } from "react"
import styles from "./input.module.css"
import classnames from "classnames"

interface IProps {
    label: string;
    onChange: (e: string) => void;
    style?: string;
    styleLabel?: string;
}

export const Input: FC<IProps> = ({ label, onChange, style, styleLabel }) => {
    return (
        <>
            <div className={styles.group}>
                <input                    
                    onChange={(e) => onChange(e.target.value)}
                    className={classnames(styles.input, style)}
                    type="text"
                    required
                />
                <span className={styles.highlight}></span>
                <label className={classnames(styles.label, styleLabel)}>{label}</label>
            </div>
        </>
    )
}