import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Caption component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Caption(props: TextProps) {
    const captionTextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-caption ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${captionTextColor};
                        font-size: 12.8px;
                        font-weight: 400;
                        line-height: 24px;
                        width: 350px;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
}

export default Caption;
