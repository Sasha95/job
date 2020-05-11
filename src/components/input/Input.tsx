import React, { FC, useState, useEffect, memo } from "react"
import styles from "./input.module.css"
import classnames from "classnames"

interface IProps {
    label: string;
    onChange: (e: string) => void;
    style?: string;
    styleLabel?: string;
}

interface IPropsArea extends IProps {
    lines: number;
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

export const InputArea: FC<IPropsArea> = memo(({ label, lines, onChange, style, styleLabel }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: string) => {
        setValue(e)
    }
    useEffect(() => {
        onChange(value)
    }, [value])

    return (
        <>
            <div className={styles.group}>
                <textarea
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className={classnames(styles.input, style)}
                    required
                    rows={lines}
                />
                <span className={styles.highlight}></span>
                <label className={classnames(styles.label, styleLabel)}>{label}</label>
            </div>
        </>
    )
})