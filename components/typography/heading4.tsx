import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Heading4 component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Heading4(props: TextProps) {
    const heading4TextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-heading-4 ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${heading4TextColor};
                        font-size: 31.25px;
                        font-weight: 700;
                        line-height: 48px;
                    }
                `}
            </style>
        </div>
    );
}

export default Heading4;
