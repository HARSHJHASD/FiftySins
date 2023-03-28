/**
 * This defines the data type for Header props.
 */
type HeaderProps = {
    className?: string;
    portfolioValue: string;
    profilePicture: string;
};

/**
 * This defines the data type for Notifications Card props.
 */
type NotificationsCardProps = {
    markItemsAsRead: () => void;
    notificationItems: {
        date: string;
        iconAltText: string;
        iconURL: string;
        id: number;
        notificationRead: boolean;
        notificationText: string;
    }[];
};

export { HeaderProps, NotificationsCardProps };
