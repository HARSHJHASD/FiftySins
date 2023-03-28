import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Button2 component.
 *
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier Aayush Goyal
 * @modified 2023-03-05
 * @since 0.3.0
 */
function TextButton2(props: TextProps) {
    const button2TextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-button-2 ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${button2TextColor};
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 32px;
                    }
                `}
            </style>
        </div>
    );
}

export default TextButton2;
