/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
import { useState, useRef } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import usePortfolioStore from '../store/portfolio';

const OTPInputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const StyledOTPInput = styled(Input)`
    min-width: 60px !important;
    padding: 0 18px;
    height: 60px;
    background-color: #141414;
    color: #20e5d6;
    font-size: 31.25px;
    font-weight: 700;
    border-radius: 16px;
`;

const OTPInput = ({ length = 6 }: { length: number }) => {
    const [otp, setOTP] = useState(Array(length).fill(''));
    const inputRefs = useRef([]);

    const { setKarvyOtp, setKarvyLienOtp } = usePortfolioStore(
        (state) => state
    );

    const handleInputChange = (index, e) => {
        const { value } = e.target;
        if (isNaN(value)) {
            return;
        }
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
        // TODO: Refactor this

        setKarvyOtp(newOTP);
        setKarvyLienOtp(newOTP);
        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleInputPaste = (e) => {
        const pasteData = e.clipboardData.getData('text/plain');
        const newOTP = [...otp];
        for (let i = 0; i < length; i++) {
            newOTP[i] = pasteData[i] || '';
            if (pasteData[i] && i < length - 1) {
                inputRefs.current[i + 1].focus();
            }
        }
        setOTP(newOTP);
    };

    const handleInputKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index]) {
            inputRefs.current[index - 1].focus();
        }
        if (e.key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
        if (e.key === 'ArrowRight' && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    return (
        <OTPInputContainer>
            {otp.map((value, index) => (
                <StyledOTPInput
                    key={index}
                    value={value}
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleInputKeyDown(index, e)}
                    onPaste={handleInputPaste}
                    maxLength={1}
                    style={{ width: '40px', marginRight: '10px' }}
                    ref={(el) => (inputRefs.current[index] = el!)}
                />
            ))}
        </OTPInputContainer>
    );
};

export default OTPInput;
