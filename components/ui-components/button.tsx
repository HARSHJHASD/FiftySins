import { AQUAMARINE } from '../../core/constants/colors';
import { TextButton } from '../typography';
import { ButtonProps } from './ui-components-types';

/**
 * This function is used as the Button component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier
 * @modified
 * @since 0.10.0
 */
function Button(props: ButtonProps) {
    const {backgroundColor = AQUAMARINE.S600}=props;

    const buttonBorder = () =>
        props.buttonType === 'SECONDARY' ? props.foregroundColor : 'none';

    return (
        <button
            type="button"
            className={`button ${props.className} ${
                props?.disabled ? 'disabled' : ''
            }`}
            onClick={props.onButtonClick}
            style={props.style}
        >
            <TextButton
                textColor={props.foregroundColor}
                disabled={props.disabled}
            >
                {props.buttonText}
            </TextButton>
            <style jsx>
                {`
                    button {
                        width: ${props.width};
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        height: ${props.height ?? '60px'};
                        background: ${backgroundColor};
                        border: ${buttonBorder()};
                        border-radius: 48px;
                        box-shadow: 0px 0px 4px ${props.shadowColor};
                        color: ${props.foregroundColor};
                        cursor: pointer;
                        user-select: none;
                    }
                    button:active {
                        transform: scale(0.98);
                    }
                    .disabled {
                        cursor: not-allowed;
                    }
                `}
            </style>
        </button>
    );
}

export default Button;
