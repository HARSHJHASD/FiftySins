import { WHITE_MARBLE, BLUESAPPHIRE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Body component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Body(props: TextProps) {
    const bodyTextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-body ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${BLUESAPPHIRE.S500};
                        font-size: ${props.fontsize};
                        font-weight: 400;
                        line-height: 24px;

                    }
                `}
            </style>
        </div>
    );
}

export default Body;
