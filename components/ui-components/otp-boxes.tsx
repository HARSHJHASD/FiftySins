import React, { useMemo } from 'react';

import { WHITE_MARBLE } from '../../core/constants/colors';

import { REGEX_DIGIT } from '../../core/constants/reg-ex';

import { OTPBoxesProps } from './ui-components-types';

/**
 * This class is used as the component for OTP Text Boxes.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.4.0
 */
function OTPBoxes(props: OTPBoxesProps) {

    const valueItems = useMemo(() => {

        const valueArray = props.value.split('');

        const items: Array<string> = [];

        for (let i = 0; i < props.valueLength; i += 1) {

            const char = valueArray[i];

            if (REGEX_DIGIT.test(char)) {

                items.push(char);

            } else {

                items.push('');

            }

        }

        return items;

    }, [props.value, props.valueLength]);

    /**
     * This function handles the change event on each OTP Box input.
     *
     * @param e Change event on the OTP Box input.
     * @param index The index of the OTP Box input.
     */
    const inputOnChange = (

        e: React.ChangeEvent<HTMLInputElement>,

        index: number
    ) => {

        const { target } = e;

        let targetValue = target.value;

        const isTargetValueDigit = REGEX_DIGIT.test(targetValue);

        if (!isTargetValueDigit && targetValue !== '') {

            return;

        }

        targetValue = isTargetValueDigit ? targetValue : ' ';

        const newValue =
            props.value.substring(0, index) +
            targetValue +
            props.value.substring(index + 1);

        props.onChange(newValue);

        if (!isTargetValueDigit) {

            return;

        }

        const nextElementSibling =
            target.nextElementSibling as HTMLInputElement | null;

        if (nextElementSibling) {

            nextElementSibling.focus();

        }

    };

    /**
     * This function handles the key down event change on each OTP Box input.
     *
     * @param e Key down event.
     */
    const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

        const target = e.target as HTMLInputElement;

        const targetValue = target.value;

        if (e.key !== 'Backspace' || target.value !== '') {

            return;

        }

        target.setSelectionRange(0, targetValue.length);

        const previousElementSibling =
            target.previousElementSibling as HTMLInputElement | null;

        if (previousElementSibling) {

            previousElementSibling.focus();

        }

    };

    /**
     * This function handles the focus event change on each OTP Box input.
     *
     * @param e Focus event on OTP Box input.
     */
    const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {

        const { target } = e;

        target.setSelectionRange(0, target.value.length);

    };

    return (

        <div className="container-otp-boxes">
            {/* {otpTextBoxes} */}

            {valueItems.map((digit, index) => (

                <input
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}

                    className="empty otp-box"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="\d{1}"
                    maxLength={props.valueLength}

                    value={digit}

                    onFocus={inputOnFocus}

                    onChange={(e) => inputOnChange(e, index)}

                    onKeyDown={inputOnKeyDown}

                />
            ))}

            <style jsx global>
                {`
                    .container-otp-boxes {
                        width: 80%;
                        display: grid;
                        grid-template-columns: repeat(
                            ${props.valueLength},
                            1fr
                        );
                        justify-items: center;
                        margin: auto;
                    }
                    input {
                        width: 31px;
                        height: 44px;
                        background-color: ${props.backgroundColor};
                        border-radius: 8px;
                        text-align: center;
                        font-family: 'Prompt', sans-serif;
                        font-size: 16px;
                        font-weight: 200;
                        padding: 0;
                        outline: none;
                    }
                    input.filled {
                        width: 60px;
                        height: 60px;
                        border: none;
                        color: ${props.foregroundColor};
                    }
                    input.empty {
                        color: ${props.foregroundColor};
                        border: 1px solid #8C8F9F;
                    }
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type='number'] {
                        -moz-appearance: textfield;
                    }
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    textarea:-webkit-autofill,
                    textarea:-webkit-autofill:hover,
                    textarea:-webkit-autofill:focus,
                    select:-webkit-autofill,
                    select:-webkit-autofill:hover,
                    select:-webkit-autofill:focus {
                        -webkit-text-fill-color: ${props.foregroundColor};
                        transition: background-color 5000s ease-in-out 0s;
                    }
                `}

            </style>
        </div>
    );

}

export default OTPBoxes;