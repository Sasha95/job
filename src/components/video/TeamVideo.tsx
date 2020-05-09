import React, { useState, useRef } from "react"
import styles from "./video.module.css"
import teamVideoStub from "../../static/images/video/team-video.png"
import joinToDexVideo from "../../static/video/joinToDex.mp4"
import playIcon from "../../static/images/video/play.svg"
import pauseIcon from "../../static/images/video/pause.svg"

export const TeamVideo = () => {
    const [play, setPlay] = useState(false)
    const [start, setStart] = useState(true)

    const videoRef = useRef(null)
    const onStart = () => {
        if (videoRef.current) {
            videoRef.current.play()
            setPlay(true)
            setStart(false)
        }
    }

    const onPause = () => {
        if (videoRef.current) {
            videoRef.current.pause()
            setPlay(false)
        }
    }

    const onClickVideo = () => {
        if (play) {
            onPause()
        } else {
            onStart()
        }
    }

    return (
        <div className={styles.container}>
            {!play && start && (
                <div className={styles.playContainer} onClick={onClickVideo}>
                    <img className={styles.play} alt={""} src={playIcon} />
                </div>
            )}
            {!start && (
                <div className={styles.playContainer} onClick={onClickVideo}>
                    {play ? <img className={styles.pause} alt={""} src={pauseIcon} /> : <img className={styles.play} src={playIcon} />}
                </div>
            )}
            {!play && start && <img className={styles.stubImage} alt={""} src={teamVideoStub} />}

            <video
                ref={videoRef}
                onClick={onClickVideo}
                className={styles.video}
            >
                <source type="video/mp4" src={joinToDexVideo} />
            </video>
        </div>
    )
}