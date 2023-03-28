import React from 'react'
import { LeftSideBarProps } from './left-sidebar-types'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BLUESAPPHIRE } from '../../core/constants/colors'

const CommonLink = (props: LeftSideBarProps) => {
    const router = useRouter();
    const currentPath = router.pathname;

    const navigateHandler = (navigateUrl: string) => {
        router.push(navigateUrl)
    }

    return (
        <>
            <div className={currentPath === props.item.navigate ? 'sideleftbar-wrapper' : 'sideleftbar-wrapper-none'} key={props.item.id} onClick={() => navigateHandler(props.item.navigate)}>
                <Image src={props.item.iconSrc} alt={props.item.iconAltText} width={20} height={20} /> <span className='content-span-style'>{props.item.text}</span>
            </div>
            <style jsx global>
                {`
                    .sideleftbar-wrapper-none{
                        display: flex;
                        align-items: center;
                        padding: 15px 0px 15px 20px;
                        cursor: pointer;
                    }
                    .sideleftbar-wrapper{
                        display: flex;
                        align-items: center;
                        padding: 15px 0px 15px 20px;
                        cursor: pointer;
                        background-color: ${BLUESAPPHIRE.S300};
                        border-right: 4px solid ${BLUESAPPHIRE.S400};
                    }
                    .content-span-style{
                        padding-left: 10px;
                        color: ${BLUESAPPHIRE.S700};
                        font-family: 'Prompt', sans-serif;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 14px;
                    }
                `}
            </style>
        </>
    )
}

export default CommonLink