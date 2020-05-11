import React, { useRef, useEffect, useState } from "react";

export const useOutsideAlerter = (ref) => {
    const [click, setClick] = useState(false);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setClick(true)
            }
            else {
                setClick(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return click;
}
