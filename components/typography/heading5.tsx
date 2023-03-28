import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Heading5 component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Heading5(props: TextProps) {
    const heading5TextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-heading-5 ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${heading5TextColor};
                        font-size:${props.fontsize || '25px'};
                        font-weight:${props?.fontWeight || 600};
                        line-height:${props?.lineHeight || '40px'};
                    }
                `}
            </style>
        </div>
    );
}

export default Heading5;
