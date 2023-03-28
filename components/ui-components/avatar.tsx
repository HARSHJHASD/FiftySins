import Image from 'next/image';
import { Avatar as AntdAvatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { WHITE_MARBLE } from '../../core/constants/colors';
import { AvatarProps } from './ui-components-types';
import profileUser from "../../public/icons/account.svg"

/**
 * This function is used as the Avatar component for the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-02-06
 * @modifier
 * @modified
 * @since 0.5.0
 */
function Avatar(props: AvatarProps) {
    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            {props.avatarImageSrc ? (
                <AntdAvatar
                    shape="circle"
                    className={`${props.className} avatar`}
                    src={props.avatarImageSrc}
                    size={50}
                    onClick={props.onAvatarClick}
                    alt={props.avatarImageAltText}
                />
            ) : (
                <AntdAvatar
                    shape="circle"
                    className={`${props.className} avatar`}
                    src={"/icons/account.svg"}
                    size={50}
                    onClick={props.onAvatarClick}
                />
            )}

            <style jsx global>
                {`
                    .avatar {
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    );
}

export default Avatar;
