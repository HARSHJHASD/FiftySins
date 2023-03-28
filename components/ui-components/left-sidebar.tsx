import React from 'react'
import Image from 'next/image'
import mutualFund from "../../public/icons/mutual_funds.svg"

const LeftSidebar = () => {

    const allTabs = [
        {
            id: 0,
            iconAltText: "mutual fund",
            iconSrc: "/icons/mutual_funds.svg",
            text: "Mutual Fund",
        },
        {
            id: 1,
            iconAltText: "mutual fund",
            iconSrc: "/icons/mutual_funds.svg",
            text: "Stocks",
        },
        {
            id: 3,
            iconAltText: "mutual fund",
            iconSrc: "/icons/mutual_funds.svg",
            text: "Loan",
        }
    ]

    return (
        <>
            <div className='sideleftbar_container'>
                {/* <div className='img_style'>
                    <Image src={mutualFund} alt="mutualfund" /> <span>Mutual Fund</span>
                </div>
                <div>
                    <Image src={mutualFund} alt="mutualfund" /> <span>Mutual Fund</span>
                </div>
                <div>
                    <Image src={mutualFund} alt="mutualfund" /> <span>Mutual Fund</span>
                </div> */}
                {
                    allTabs.map((item) => {
                        return (
                            <div className='img_style' key={item.id}>
                                <Image src={item.iconSrc} alt={item.iconAltText} width={24} height={24} /> <span className='tab_span_style'>{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>

            <style jsx>
                {`
                .sideleftbar_container{
                    padding-top: 50px;
                    padding-left: 20px;
                    margin: 0px auto;
                }
                .img_style{
                    display: flex;
                    align-items: center;
                    padding: 10px 0px;
                }
                .tab_span_style{
                    padding-left: 10px;
                    color: #FFFFFF;
                    font-family: 'Prompt', sans-serif;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 16px;
                }
                `}
            </style>
        </>
    )
}

export default LeftSidebar