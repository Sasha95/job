import React, { FC } from "react"
import styles from "./error.module.css"
import classnames from "classnames"

interface IProps {
    isActive: boolean;
}

export const Error: FC<IProps> = ({isActive, children}) => {
    return(
        <div className={classnames(styles.content, {[styles.contentActive]:isActive})}>
            {children}
        </div>
    )
}