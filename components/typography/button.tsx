import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Button component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function TextButton(props: TextProps) {
    const buttonTextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div
            className={`text-button ${props.className} ${
                props?.disabled ? 'disabled' : ''
            }`}
        >
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${buttonTextColor};
                        font-size: ${props?.fontsize || '16px'};
                        font-weight: ${props?.fontWeight || 700};
                        line-height: ${props?.lineHeight || '24px'};
                    }
                    .disabled {
                        cursor: not-allowed;
                    }
                `}
            </style>
        </div>
    );
}

export default TextButton;
