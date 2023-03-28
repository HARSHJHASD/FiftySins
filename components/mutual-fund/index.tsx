import React, { useState, useRef } from 'react'
import { BLUESAPPHIRE, STONE_LAP } from '../../core/constants/colors';
import Image from 'next/image';
import { MutualFundHeading, ShowMutualBtnComponent, TableHeadComponent } from '../../lib/shared-components';
import Cardwrapper from '../ui-components/card-wrapper';
import { Heading5, Heading6, TextButton } from '../typography';
import ReactPlayer from 'react-player';
import VideoPlayer from '../ui-components/video-player';

const MutualFund = () => {
    const playerRef = useRef(null);

    const tableData = [
        {
            id: 0,
            name: "ARTL",
            img_url: "/icons/airtel.svg",
            loan_price: 2618.00,
            type: "Equity",
            max_loan: 1178.00
        },
        {
            id: 1,
            name: "M&M",
            img_url: "/icons/mahindra.svg",
            loan_price: 12181.25,
            type: "Debt",
            max_loan: 548.10
        },
        {
            id: 2,
            name: "INFY",
            img_url: "/icons/infosys.svg",
            loan_price: 1568.20,
            type: "Debt",
            max_loan: 1137.00
        },
        {
            id: 3,
            name: "TCS",
            img_url: "/icons/tcs.svg",
            loan_price: 3283.50,
            type: "Equity",
            max_loan: 1137.00
        },
        {
            id: 4,
            name: "RIL",
            img_url: "/icons/ril.svg",
            loan_price: 2550.9,
            type: "Debt",
            max_loan: 1137.00
        }
    ];

    type TableTypeProps = {
        id: number,
        img_url: string,
        name: string,
        loan_price: number,
        type: string,
        max_loan: number
    }

    const [tableDatas, setTableDatas] = useState<TableTypeProps[]>(tableData);
    const [videoControl, setVideoControl] = useState<boolean>(false);
    const [youtubeIcon, setVideoIcon] = useState<boolean>(false);
    const [showBottomDiv, setShowBottomDiv] = useState<boolean>(false)
    

    const playHalder = (): void => {
        setVideoControl(true);
        setVideoIcon(true);
        setShowBottomDiv(true)
    }

    return (
        <>
            <div className='mutual-fund-container'>
                <MutualFundHeading>
                    Mutual Fund Index
                </MutualFundHeading>
                <div className='mutual-fund-component'>
                    <div className='mutual-fund-component-one'>
                        <div className='mutual-fund-component-wrapper-one'>
                            <table style={{ color: BLUESAPPHIRE.S700 }}>
                                <tr>
                                    <th>
                                        <TableHeadComponent>
                                            Funds <Image src='/icons/arrow.svg' alt='arrow' width={18} height={18} />
                                        </TableHeadComponent>
                                    </th>
                                    <th>
                                        <TableHeadComponent>
                                            NAV <Image src='/icons/arrow.svg' alt='arrow' width={18} height={18} />
                                        </TableHeadComponent>
                                    </th>
                                    <th>
                                        <TableHeadComponent>
                                            Type <Image src='/icons/arrow.svg' alt='arrow' width={18} height={18} />
                                        </TableHeadComponent>
                                    </th>
                                    <th>
                                        <TableHeadComponent>
                                            Max Loan <Image src='/icons/arrow.svg' alt='arrow' width={18} height={18} />
                                        </TableHeadComponent>
                                        <div style={{ fontSize: "9px", marginRight: "1rem", }}>₹/mutual fund</div>
                                    </th>
                                </tr>
                                {
                                    tableDatas && tableDatas.map((tableData) => {
                                        return (
                                            <tr>
                                                <td>
                                                    <div>
                                                        <Image src={tableData.img_url} alt='arrow' width={18} height={18} />
                                                        <div>{tableData.name}</div>
                                                    </div>
                                                </td>
                                                <td>₹ {tableData.loan_price}</td>
                                                <td>{tableData.type}</td>
                                                <td>₹ {tableData.max_loan}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                            <ShowMutualBtnComponent>
                                See All Mutual Funds
                            </ShowMutualBtnComponent>
                        </div>
                        <div>
                            <VideoPlayer />
                        </div>
                        <div style={{ marginTop: "-27px" }}>
                            <VideoPlayer />
                        </div>
                    </div>
                    <div className='mutual-fund-component-two'>
                        <Cardwrapper borderColor={BLUESAPPHIRE.S300}>
                            <Heading5
                                textColor={BLUESAPPHIRE.S700}
                                fontsize="18px"
                                lineHeight='28px'
                                fontWeight={600}
                            >
                                Your CAMS Portfolio
                            </Heading5>
                            <Image
                                src={"/icons/cams.svg"}
                                alt="cams"
                                width={160}
                                height={80}
                                style={{ marginTop: "-0.5rem" }} />
                            <div style={{ marginTop: "-0.4rem", textAlign: "center" }}>
                                <Heading6
                                    textColor={STONE_LAP.S400}
                                    fontWeight={600}
                                    fontsize="16px"
                                    lineHeight='19px'
                                >
                                    Link your CAMS account to import your <br /> Mutual Funds Portfolio
                                </Heading6>
                            </div>
                            <div style={{ padding: "8px 20px", backgroundColor: BLUESAPPHIRE.S900, borderRadius: "16px" }}>
                                <TextButton textColor={STONE_LAP.S400} fontsize="14px" fontWeight={600} lineHeight="17px">Coming Soon</TextButton>
                            </div>
                        </Cardwrapper>
                        <div style={{ marginTop: "20px" }}>
                            <Cardwrapper borderColor={BLUESAPPHIRE.S300}>
                                <Heading5
                                    textColor={BLUESAPPHIRE.S700}
                                    fontsize="18px"
                                    lineHeight='28px'
                                    fontWeight={600}
                                >
                                    Your Kfintech Portfolio
                                </Heading5>
                                <Image src={"/icons/kfintech.svg"} alt="kfintech" width={200} height={80} style={{ marginTop: "-1rem" }} />
                                <div style={{ marginTop: "-0.8rem", textAlign: "center" }}>
                                    <Heading6
                                        textColor={STONE_LAP.S400}
                                        fontWeight={600}
                                        fontsize="16px"
                                        lineHeight='19px'
                                    >
                                        Link your Kfintech account to import your <br /> Mutual Fund Portfolio
                                    </Heading6>
                                </div>
                                <div style={{ padding: "8px 20px", backgroundColor: BLUESAPPHIRE.S500, borderRadius: "16px" }}>
                                    <TextButton textColor={STONE_LAP.S600} fontsize="14px" fontWeight={600} lineHeight="17px">
                                        Verify PAN & Link Bank Account
                                    </TextButton>
                                </div>
                            </Cardwrapper>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .mutual-fund-container{
                        padding-top: 1rem
                    }
                    .mutual-fund-component{
                        display: flex;
                        justify-content: space-evenly;
                        padding: 0px 25px;
                    }
                    .heading-style{
                        font-size: 20px;
                    }
                    .mutual-fund-component-one{
                        width: 45%;
                    }
                    table{
                        width: 100%;
                        border-collapse: collapse;
                        border: 1px solid ${BLUESAPPHIRE.S1000};
                        border-top-left-radius: 1rem;
                    }
                    th{
                        border: 1px solid ${BLUESAPPHIRE.S1000};
                        text-align: center;
                        padding: 10px;
                    }
                    td{
                        border-bottom: 1px solid ${BLUESAPPHIRE.S1000};
                        padding: 10px;
                        text-align: center;
                        font-weight: 400;
                        font-size: 14px;
                    }
                    .mutual-fund-component-two{
                        width: 45%;
                    }
                    .heading6-style{
                        margin-top: -1rem;
                    }
                `}
            </style>
        </>
    )
}

export default MutualFund