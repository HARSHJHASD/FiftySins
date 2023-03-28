import Image from 'next/image';

import { BLUESAPPHIRE, WHITE_MARBLE } from '../../core/constants/colors';

/**
 * This function is used as the Icon Button component on the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-06
 * @modifier
 * @modified
 * @since 0.5.0
 */
type IconButtonProps = {
    backgroundColor: string;
    buttonHeight: string;
    buttonWidth: string;
    className: string;
    iconAltText: string;
    iconSrc: string;
    btnName: string;
    onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

function IconButton(props: IconButtonProps) {
    return (
        <button
            type="button"
            className={`icon-button ${props.className}`}
            onClick={props.onButtonClick}
        >
            <span style={{fontWeight: 600, fontSize: "16px"}}>{props.btnName}</span>
            <Image
                alt={props.iconAltText}
                src={props.iconSrc}
                width={22}
                height={22}
                style={{marginLeft: "7px"}}
            />
            <style jsx>
                {`
                    button {
                        width: ${props.buttonWidth};
                        height: ${props.buttonHeight};
                        background-color: ${props.backgroundColor};
                        border-radius: ${props.buttonHeight};
                        cursor: pointer;
                        user-select: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: ${BLUESAPPHIRE.S600}
                    }
                `}
            </style>
        </button>
    );
}

export default IconButton;
