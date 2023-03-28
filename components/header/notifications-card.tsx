import Image from 'next/image';
import { useState } from 'react';

import { NotificationsCardProps } from './header-types';
import {
    BLACK_STONE,
    RUBIDIUM_OVER_BLACK_STONE,
    STAR_RUBY,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Body, Heading5, Overline } from '../../components/typography/index';

/**
 * This function is used as the Notifications Card component.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-06
 * @modifier Aayush Goyal
 * @modified 2023-03-06
 * @since 0.5.0
 */
function NotificationsCard(props: NotificationsCardProps) {
    const [notificationsCardOpen, setNotificationsCardOpen] = useState(false);

    /**
     * This function toggles the notification card on the UI.
     */
    const toggleNotificationsCard = () => {
        if (props.notificationItems.length > 0) {
            setNotificationsCardOpen(!notificationsCardOpen);
        }
    };

    /**
     * This function clears all the notifications for the user.
     */
    const markNotificationsAsRead = () => {
        props.markItemsAsRead();
        toggleNotificationsCard();
    };

    return (
        <div className="container-notifications">
            {/* Notification Bell Icon */}
            <div className="container-notification-icons">
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <Image
                    className="icon-notification-bell"
                    src="/icons/notification.svg"
                    alt="Notification Bell"
                    width={28}
                    height={28}
                    onClick={() => toggleNotificationsCard()}
                    onKeyUp={() => toggleNotificationsCard()}
                />
                {/* <div className="container-item-count">
                    <Body margin="auto" textColor={WHITE_MARBLE.LIGHT}>
                        {props.notificationItems.length.toString()}
                    </Body>
                </div> */}
            </div>
            {/* Notifications Card */}
            <div className="container-notifications-card">
                <div className="container-notification-card-header">
                    <Heading5
                        className="heading-notifications"
                        textColor={STAR_RUBY.S300}
                    >
                        Notifications
                    </Heading5>
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div
                        className="container-mark-all-as-read"
                        onClick={() => markNotificationsAsRead()}
                        onKeyUp={() => markNotificationsAsRead()}
                    >
                        <Image
                            className="icon-check"
                            src="/icons/check-circle-white-marble-light.svg"
                            alt="Check"
                            width={16}
                            height={16}
                        />
                        <Overline
                            className="text-mark-read"
                            textColor={WHITE_MARBLE.LIGHT}
                        >
                            Mark All As Read
                        </Overline>
                    </div>
                </div>
                {props.notificationItems.map((notificationItem) => (
                    <div
                        className="container-notification-details"
                        key={notificationItem.id}
                    >
                        <div className="container-icon-notification">
                            <Image
                                className="icon-notification"
                                src={notificationItem.iconURL}
                                alt={notificationItem.iconAltText}
                                width={24}
                                height={24}
                            />
                        </div>
                        <Body
                            className="text-notification-detail"
                            textColor={WHITE_MARBLE.LIGHT}
                        >
                            {notificationItem.notificationText}
                        </Body>
                        <Overline
                            className="text-notification-date"
                            textColor={WHITE_MARBLE.LIGHT}
                        >
                            {notificationItem.date}
                        </Overline>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .container-notifications-card {
                        width: 480px;
                        display: ${notificationsCardOpen ? 'block' : 'none'};
                        position: absolute;
                        z-index: 999;
                        padding: 24px;
                        top: 80px;
                        right: 184px;
                        background-color: ${BLACK_STONE.LIGHT};
                        border-radius: 24px;
                    }
                    .container-item-count {
                        width: 24px;
                        height: 24px;
                        position: absolute;
                        top: 8px;
                        right: 228px;
                        border-radius: 32px;
                        background-color: ${RUBIDIUM_OVER_BLACK_STONE.REGULAR};
                    }
                    .container-notification-details {
                        display: grid;
                        grid-template-columns: 2fr 10fr;
                        grid-template-rows: repeat(2, 1fr);
                        margin: 16px 0;
                    }
                    .container-icon-notification {
                        width: 24px;
                        height: 24px;
                        grid-column: 1/2;
                        grid-row: 1/3;
                        margin-right: 8px;
                        background-color: ${STAR_RUBY.S100};
                        border-radius: 48px;
                        padding: 16px;
                    }
                    .container-notification-card-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 8px;
                    }
                    .container-mark-all-as-read {
                        display: flex;
                        cursor: pointer;
                        align-items: center;
                    }

                    .text-notification-detail {
                        grid-column: 2/3;
                        grid-row: 1/2;
                    }
                    .text-notification-date {
                        grid-column: 2/3;
                        grid-row: 2/3;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .icon-notification-bell {
                        height: 40px;
                        position: relative;
                        cursor: pointer;
                    }
                    .icon-check {
                        margin-right: 4px;
                    }
                `}
            </style>
        </div>
    );
}

export default NotificationsCard;
