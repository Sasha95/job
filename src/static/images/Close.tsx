import React, { FC } from "react"

interface IProps {
    color: string;
}

export const Close: FC<IProps> = ({color}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <rect x="1.41406" width="32" height="2" rx="1" transform="rotate(45 1.41406 0)" fill={color} />
                <rect width="32" height="2" rx="1" transform="matrix(-0.707107 0.707107 0.707107 0.707107 22.6484 0.020813)" fill={color} />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="24" height="24" fill={color} />
                </clipPath>
            </defs>
        </svg>
    )
}