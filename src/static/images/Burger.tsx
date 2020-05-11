import React, { FC } from "react"

interface IProps {
    color: string;
}

export const Burger: FC<IProps> = ({ color }) => {
    return (
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="2" rx="1" fill={color} />
            <rect x="14" y="12" width="18" height="2" rx="1" fill={color} />
            <rect x="8" y="24" width="24" height="2" rx="1" fill={color} />
        </svg>
    )
}