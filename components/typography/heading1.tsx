import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Heading1 component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Heading1(props: TextProps) {
    const heading1TextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-heading-1 ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${heading1TextColor};
                        font-size: 61px;
                        font-weight: 500;
                        line-height: 92px;
                    }
                `}
            </style>
        </div>
    );
}

export default Heading1;
