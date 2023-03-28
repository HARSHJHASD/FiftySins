import Router from 'next/router';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import {
    AQUAMARINE,
    BLACK_STONE,
    BLUESAPPHIRE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Heading5, Heading6 } from '../typography';

import Avatar from '../ui-components/avatar';
import IconButton from '../ui-components/icon-button';
// import NotificationsCard from './notifications-card';

import { HeaderProps } from './header-types';

import useGlobalStore from '../../store/global';
import usePortfolioStore from '../../store/portfolio';
import NotificationsCard from './notifications-card';
import HomeCard from '../ui-components/home-card';

/**
 * This function is used as a Header for the web app.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-06
 * @since 0.5.0
 */
function Header(props: HeaderProps) {
    const [notificationItems, setNotificationItems] = useState([]);
    const { otpValidationResponse } = usePortfolioStore((state) => state);
    /**
     * This function logs out the user.
     */
    const { logOut } = useGlobalStore((state) => state);
    const { portfolio } = usePortfolioStore((state) => state);

    useEffect(
        () =>
            setNotificationItems([
                {
                    date: 'Feb 5, 2023',
                    iconAltText: 'Calendar',
                    iconURL: '/icons/calendar-black-stone-extra-dark.svg',
                    id: 0,
                    notificationRead: true,
                    notificationText: 'Your next payment due is on 5 Mar 2023.'
                },
                {
                    date: 'Feb 5, 2023',
                    iconAltText: 'Calendar',
                    iconURL: '/icons/receipt-black-stone-extra-dark.svg',
                    id: 1,
                    notificationRead: true,
                    notificationText:
                        'Your invoice has been sent your email address.'
                },
                {
                    date: 'Feb 5, 2023',
                    iconAltText: 'Calendar',
                    iconURL: '/icons/calendar-black-stone-extra-dark.svg',
                    id: 2,
                    notificationRead: true,
                    notificationText: 'Your next payment due is on 5 Mar 2023.'
                }
            ]),
        []
    );

    return (
        <div className={`header ${props.className}`}>
            <Image
                className="icon-logo"
                alt="50Fin logo"
                src="/icons/logo_small.svg"
                width={70}
                height={40}
                onClick={() => Router.push('/dashboard')}
            />
            <div className="container-portfolio-value">
                <Heading6 fontsize='16px'>Portfolio Value:</Heading6>
                <Heading5
                    className="heading-portoflio-value"
                    margin="0 0 0 16px"
                    fontsize='16px'
                >
                    {otpValidationResponse?.request_id ? (
                        <>
                            <span className='span-style'>&#x20B9;</span>
                            {portfolio?.TOTAL_AMOUNTS?.total_portfolio_value.toString() ??
                                '0'}
                        </>
                    ) : (
                        <>
                            <span className='span-style'>&#x20B9;</span>0
                        </>
                    )}
                </Heading5>
            </div>
            <div className="container-action-items">
                <HomeCard
                    className="home-card-header"
                    onHomeCardClick={() => Router.push('/')}
                    homeCardImageAltText="Home"
                />
                <NotificationsCard
                    markItemsAsRead={() => setNotificationItems([])}
                    notificationItems={notificationItems}
                />
                <Avatar
                    className="avatar-header"
                    onAvatarClick={() => Router.push('/profile')}
                    avatarImageAltText="User Image"
                    avatarImageSrc=""
                />
                <IconButton
                    className="button-icon-header"
                    buttonHeight="3rem"
                    buttonWidth="8rem"
                    iconSrc="/icons/logout.svg"
                    btnName="Logout"
                    iconAltText="Logout"
                    backgroundColor={AQUAMARINE.S600}
                    onButtonClick={() => {
                        Router.push('/');
                        logOut();
                    }}
                />
            </div>
            <style jsx>
                {`
                    .header {
                        height: 80px;
                        display: flex;
                        background-color: ${BLUESAPPHIRE.S100};
                        border-bottom: 1px solid ${BLUESAPPHIRE.S200};
                        align-items: center;
                        justify-content: space-between;
                    }
                    .container-portfolio-value {
                        height: fit-content;
                        display: flex;
                        align-items: center;
                        padding: 3px 2.3rem;
                        background-color: ${BLUESAPPHIRE.S500};
                        border-radius: 16px;
                        font-weight: 600;
                        font-size: 16px !important;
                    }
                    .container-action-items {
                        display: flex;
                        align-items: center;
                        margin-right: 80px;
                    }
                    .heading-portoflio-value {
                        margin-left: 4px;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .avatar-header {
                        margin-left: 20px;
                    }
                    .button-icon-header {
                        margin-left: 16px;
                        border: none;
                    }
                    .icon-logo {
                        margin: auto 0 auto 80px;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    );
}

export default Header;
