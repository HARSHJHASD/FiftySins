/**
 * This defines the data type for Body text props.
 *
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier Aayush Goyal
 * @modified 2023-03-07
 * @since 0.3.0
 */
type TextProps = {
    children?: string | JSX.Element | React.ReactNode;
    className?: string;
    textColor?: string;
    margin?: string;
    disabled?: boolean;
    fontsize?: string;
    lineHeight?: string;
    fontWeight?: number;
    width?: string;
};

export default TextProps;
