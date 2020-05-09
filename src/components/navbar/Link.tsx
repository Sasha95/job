import React, { FC } from "react"
import classnames from "classnames"
import styles from "./navbar.module.css"

interface IProps {
    collapse: boolean;
    href: string;
}

export const Link: FC<IProps> = ({ collapse, href, children }) => {
    return (
        <a className={classnames(styles.linkImg, styles.level1, "nav-item", !collapse ? styles.collapse : "")} href={href}>{children}</a>
    )
}