import { useState, useEffect, useCallback } from "react"

export const useWindowSize = (asyncron = false) => {
  const isClient = typeof window === "object"

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }, [isClient])

  const [windowSize, setWindowSize] = useState(() => getSize())

  useEffect(() => {
    if (!isClient) {
      return undefined
    }

    function handleResize() {
      if (!asyncron) {
        setWindowSize(getSize())
      } else {
        setTimeout(() => {
          setWindowSize(getSize())
        }, 100)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [getSize, isClient, asyncron])

  return windowSize
}
