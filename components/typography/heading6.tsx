import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Heading6 component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Heading6(props: TextProps) {
    const heading6TextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

        'string | Element'
    return (
        <div className={`text-heading-5 ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: ${props?.width || 'fit-content'};
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${heading6TextColor};
                        font-size: ${props.fontsize || '20px'}
                        font-weight: ${props?.fontWeight || 500};
                        line-height: ${props?.lineHeight || '32px'};
                    }
                `}
            </style>
        </div>
    );
}

export default Heading6;
