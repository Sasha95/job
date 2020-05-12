import React, { useState, useRef, useEffect } from "react"
import styles from "./navbar.module.css"
import globalStyles from "../globalStyles.module.css"
import classnames from "classnames"
import logo from "../../static/images/logohead.svg"
import { useHideOnScrolled } from "../../hooks/UseHideScroll"
import { Burger } from "../../static/images/Burger"
import { Link } from "./Link"
import { useOutsideAlerter } from "../../hooks/UseOutsideAlerter"
import {Close} from "../../static/images/Close"
import { useComponentSize } from "../../hooks/UseComponentSize"

export const Navbar = () => {
    const hidden = useHideOnScrolled();
  const [collapse, setCollapse] = useState(true);
    const wrapperRef = useRef(null);
    const isClick = useOutsideAlerter(wrapperRef);
    useEffect(() => {
        setCollapse(true)
    }, [isClick])

    const { width: parentWidth } = useComponentSize(wrapperRef)

    return (
        <nav ref={wrapperRef} className={classnames(styles.navContainer, "navbar navbar-expand-xl sticky-top p-0", hidden ? styles.scroll : "")}>
            <div className={classnames(globalStyles.globalContainer, styles.wrapper, collapse ? "" : styles.background)}>
                <a className={classnames(styles.logoLink, "navbar-brand p-0")} href="https://dex-it.ru">
                    <div className={styles.logoContainer}>
                        <img className={styles.logo} src={logo} />
                        <span className={styles.bottomLogo}> iT компания #1</span>
                    </div>
                </a>
                <button
                    onClick={() => setCollapse(!collapse)}
                    className={classnames("navbar-toggler", styles.burgerContainer)}
                    type="button"
                    data-toggle="collapse"
                    aria-expanded="false"
                    data-target="#navbarNav" 
                    aria-controls="navbarNav"
                >
                    {
                        collapse?
                        <Burger 
                            color={collapse && !hidden && parentWidth > 1024 ? "#0047b3" : "#ffffff"} 
                        /> :
                        <Close color={"#ffffff"} />
                    }
                </button>

                <div className={`${collapse ? "collapse" : ""} navbar-collapse`} id="navbarNav">
                    <ul className={classnames(styles.navbarRight, "navbar-nav  ml-auto")}>
                        <div className={styles.contResp}>
                            <a href="#">
                                <div className={styles.logo}></div>
                            </a>
                            {/* <a href="#">
                                <img src={close} alt="close" />
                            </a> */}
                        </div>
                        <Link collapse={collapse} href={"#about"}>НАШИ ПЛЮШКИ</Link>
                        <Link collapse={collapse} href={"#rewards"}>МЫ В РЕЙТИНГАХ</Link>
                        <Link collapse={collapse} href={"#events"}>МЕРОПРИЯТИЯ</Link>
                        <Link collapse={collapse} href={"#requires"}>КОНТАКТЫ</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
