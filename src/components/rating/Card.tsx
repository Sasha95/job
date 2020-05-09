import React, { FC } from "react"
import styles from "./card.module.css"
import classnames from "classnames"

interface IProps {
    image_balck: string;
    image_white?: string;
    alt: string;
    title: string;
    subtitle: string;
    description: string;
    classname?: string;
}

export const Card: FC<IProps> = ({ alt, description, image_balck, title, image_white, subtitle, classname }) => {
    return (
        <div className={classnames(styles.container, styles.hoverCard, classname)}>
            <div className={styles.image}>
                <img className={classnames(styles.hoverCardOff)} src={image_balck} alt={alt} />
                <img className={classnames(styles.hoverCardOn)} src={image_white} alt={alt} />
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}