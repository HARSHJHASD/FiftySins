import { WHITE_MARBLE } from '../../core/constants/colors';

import TextProps from './text-types';

/**
 * This function is used as the Subtitle2 component.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.3.0
 */
function Subtitle2(props: TextProps) {
    const substitle2TextColor =
        props.textColor !== null ? props.textColor : WHITE_MARBLE.LIGHT;

    return (
        <div className={`text-subtitle-2 ${props.className}`}>
            {props.children}
            <style jsx>
                {`
                    div {
                        width: fit-content;
                        font-family: 'Prompt', sans-serif;
                        margin: ${props.margin || '0'};
                        color: ${substitle2TextColor};
                        font-size: 12.8px;
                        font-weight: 700;
                        line-height: 20px;
                    }
                `}
            </style>
        </div>
    );
}

export default Subtitle2;
