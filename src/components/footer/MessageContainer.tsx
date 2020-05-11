import React, { useState, useRef, FC } from "react"
import styles from "./meaasgeContainer.module.css"
import attach from "../../static/images/clip.svg"
import { Input } from "../input/Input"

interface IProps {
    setFile: (x: any) => void;
    setFileName: (x: any) => void;
    setMessage: (s: string) => void;
    file: any;
    fileName: string;
}

export const MessageContainer: FC<IProps> = ({file, fileName, setFile, setFileName, setMessage}) => {
    const fileInputRef = useRef(null)

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
            <Input onChange={setMessage} label={"Текст собщения"} />
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