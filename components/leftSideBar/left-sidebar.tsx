import React from 'react'
import { useRouter } from 'next/router'
import { BLUESAPPHIRE } from '../../core/constants/colors';
import CommonLink from './common-link';

const LeftSidebar = () => {

    const router = useRouter();

    const allTabs = [
        {
            id: 0,
            iconAltText: "mutual fund",
            iconSrc: "/icons/mutual_funds.svg",
            text: "Mutual Fund",
            navigate: "/dashboard"
        },
        {
            id: 1,
            iconAltText: "mutual fund",
            iconSrc: "/icons/stocks.svg",
            text: "Stocks",
            navigate: "/stocks"
        },
        {
            id: 2,
            iconAltText: "mutual fund",
            iconSrc: "/icons/loan.svg",
            text: "Loan",
            navigate: "/loan"
        }
    ]

    const profileTabs = [
        {
            id: 0,
            iconAltText: "profile",
            iconSrc: "/icons/account.svg",
            text: "Profile",
            navigate: "/profile"
        },
        {
            id: 1,
            iconAltText: "PAN & Bank Account",
            iconSrc: "/icons/pan-bank.svg",
            text: "PAN & Bank Account",
            navigate: "/pan-details"
        },
        {
            id: 2,
            iconAltText: "Settings",
            iconSrc: "/icons/setting.svg",
            text: "Settings",
            navigate: "/setting"
        },
        {
            id: 3,
            iconAltText: "Help & Support",
            iconSrc: "/icons/help.svg",
            text: "Help & Support",
            navigate: "/help-support"
        }
    ]

    let result: JSX.Element[];
    if (router.pathname === "/profile") {
        result = profileTabs.map((item) => <CommonLink item={item} />)      
    }else if(router.pathname === "/pan-details"){
        result = profileTabs.map((item) => <CommonLink item={item} />)
    }else if(router.pathname === "/setting"){
        result = profileTabs.map((item) => <CommonLink item={item} />)
    }else if(router.pathname === "/help-support"){
        result = profileTabs.map((item) => <CommonLink item={item} />)
    }else if(router.pathname === "/dashboard"){
        result = allTabs.map((item) => <CommonLink item={item} />) 
    }else {
        result = allTabs.map((item) => <CommonLink item={item} />)
    }

    return (
        <>
            <div className='sideleftbar-container'>
                {result}
            </div>

            <style jsx global>
                {`
                    .sideleftbar-container{
                        padding-top: 50px;
                    }
                    .left-side-bar{
                        background-color: ${BLUESAPPHIRE.S1000};
                        height: calc(100vh - 80px);
                        margin-top: 2px;
                    }
                `}
            </style>
        </>
    )
}

export default LeftSidebar