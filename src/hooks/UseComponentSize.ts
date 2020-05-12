import { useCallback, useLayoutEffect, useState } from "react"

const getSize = (el: any) => {
  if (!el) {
    return {
      width: 0,
      height: 0,
    }
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  }
}

export const useComponentSize = (ref: any) => {
  const [componentSize, setComponentSize] = useState(() => getSize(ref.current))

  const handleResize = useCallback(() => {
    if (ref.current) {
      setComponentSize(getSize(ref.current))
    }
  }, [ref])

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    handleResize()

    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    return function () {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [handleResize, ref])

//   if (callback) {
//     callback(componentSize)
//   }

  return componentSize
}
