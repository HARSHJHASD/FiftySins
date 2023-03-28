import React from 'react'
import { HomeCardProps } from './ui-components-types'
import Image from 'next/image'

const HomeCard = (props: HomeCardProps) => {
    return (
        <>
            <div className='home-card-container'>
                <Image
                    className={`${props.className} homeCard`}
                    src="/icons/home.svg"
                    alt={props.homeCardImageAltText}
                    width={28}
                    height={28}
                    onClick={props.onHomeCardClick}
                />
            </div>
            <style jsx global>
                {`
                    .homeCard {
                        cursor: pointer;
                        margin-right: 20px;
                    }
                `}
            </style>
        </>
    )
}

export default HomeCard