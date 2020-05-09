import React, { FC } from "react"
import classnames from "classnames"
import styles from "./social.module.css"

import vk from "../../../static/images/social/vk.svg"
import instagram from "../../../static/images/social/instagram.svg"
import facebook from "../../../static/images/social/facebook.svg"

interface IProps {
    classname?: string;
}

export const Social: FC<IProps> = ({ classname }) => {
    return (
        <div className={classnames(styles.social, classname)}>
            <div className={styles.socialContainer}>
                <img className={styles.socialImg} alt={"facebook"} src={facebook} />
            </div>
            <div className={styles.socialContainer}>
                <img className={styles.socialImg} alt={"instagram"} src={instagram} />
            </div>
            <div className={styles.socialContainer}>
                <img className={styles.socialImg} alt={"vk"} src={vk} />
            </div>
        </div>
    )
}