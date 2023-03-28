import Image from 'next/image';
import { TextButton } from '../typography';
import { ButtonWithIconProps } from './ui-components-types';

/**
 * This function is used as the Button With Icon component.
 *
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-03-02
 * @modifier Aayush Goyal
 * @modified 2023-03-08
 * @since 0.2.0
 */
function ButtonWithIcon(props: ButtonWithIconProps) {
    const buttonBorder = () =>
        props.buttonType === 'SECONDARY'
            ? `2px solid ${props.foregroundColor}`
            : 'none';

    return (
        <div className={props.className}>
            <button
                type="button"
                className="button"
                onClick={props.onButtonClick}
            >
                <Image
                    className="icon-button"
                    alt={props.iconAltText}
                    src={props.iconURL}
                    width={props.iconWidth}
                    height={props.iconHeight}
                />
                <TextButton textColor={props.foregroundColor}>
                    {props.buttonText}
                </TextButton>
            </button>
            <style jsx>
                {`
                    button {
                        width: ${props.width};
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        height: 60px;
                        background: ${props.backgroundColor};
                        border: ${buttonBorder()};
                        border-radius: 48px;
                        box-shadow: 0px 0px 4px ${props.shadowColor};
                        color: ${props.foregroundColor};
                        cursor: pointer;
                        user-select: none;
                        height: 40px;
                    }
                    button:active {
                        transform: scale(0.98);
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .icon-button {
                        width: ${props.iconWidth ? props.iconWidth : 'none'};
                        height: ${props.iconHeight ? props.iconHeight : null};
                        color: ${props.foregroundColor};
                        margin-right: 16px;
                    }
                `}
            </style>
        </div>
    );
}

export default ButtonWithIcon;
