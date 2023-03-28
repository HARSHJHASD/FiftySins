import { DatePickerProps } from "antd";
/**
 * This file contains all the types of the UI components.
 */
/**
 * This defines the data type for Avatar props.
 */
type AvatarProps = {
    avatarImageSrc: string;
    avatarImageAltText: string;
    className: string;
    onAvatarClick: () => void;
};

type HomeCardProps = {
    className: string;
    onHomeCardClick: () => void;
    homeCardImageAltText: string;
}

/**
 * This defines the data type for Button types.
 */
type ButtonType = 'PRIMARY' | 'SECONDARY';

/**
 * This defines the data type for Button props.
 */
type ButtonProps = {
    backgroundColor?: string;
    buttonText: string;
    buttonType?: ButtonType;
    className?: string;
    foregroundColor?: string;
    shadowColor?: string;
    width?: string;
    disabled?: boolean;
    height?: string;
    style?:React.CSSProperties
    onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * This defines the data type for Button With Icon props.
 */
type ButtonWithIconProps = {
    backgroundColor: string;
    buttonText: string;
    buttonType: ButtonType;
    className: string;
    foregroundColor: string;
    iconAltText: string;
    iconHeight?: number;
    iconURL: string;
    iconWidth?: number;
    shadowColor?: string;
    width: string;
    onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * This defines the data type for the Checkbox props.
 */
type CheckboxProps = {
    checked: boolean;
    className: string;
    options: {
        id: number;
        item?: JSX.Element;
    }[];
};

/**
 * This defines the data type for the Dropdown props.
 */
type DropdownProps = {
    className?: string;
    items: {
        id: number;
        text: string;
    }[];
    labelText?: string;
    labelTextColor?: string;
    width: string;
    name?: string;
    itemList?: Object;
    // eslint-disable-next-line no-unused-vars
    setItemList?: (params) => void;
    bankInfo?: any;
    setBankInfo?: (params: any) => void;
};

/**
 * This defines the data type for OTP Boxes props.
 */
type OTPBoxesProps = {
    backgroundColor: string;
    foregroundColor: string;
    value: string;
    valueLength: number;
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void;
};

/**
 * This defines the data type for Text Input Text props.
 */

type TextInputTextProps = {
    name?: string;
    backgroundColor?: string;
    className?: string;
    foregroundColor?: string;
    id?: string;
    hintText?: string;
    inputFieldId?: string;
    labelText?: string;
    labelTextColor?: string;
    maxlength?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onChangeDateHandler?: DatePickerProps['onChange'];
    required?: boolean;
    shadowColor?: string;
    textAlignCenter?: boolean;
    type?: string;
    labelFontSize?: string;
    width?: string;
    height?: string;
    errorMessage?: string;
    value?: string | number | readonly string[]
};





export {
    AvatarProps,
    ButtonProps,
    ButtonWithIconProps,
    CheckboxProps,
    DropdownProps,
    OTPBoxesProps,
    TextInputTextProps,
    HomeCardProps
};
