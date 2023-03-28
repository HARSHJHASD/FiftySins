import Image from 'next/image';
import React from 'react';
import { AQUAMARINE, BLACK_STONE } from '../../core/constants/colors';
import usePortfolioStore from '../../store/portfolio';
import OTPInput from '../OTPInput';
import Button from './button';
import CustomModal from './modal';
import CloseIcon from '../../public/icons/x-square-aquamarine-s300.svg';

interface OtpModaLProps {
    onVerifyClick: () => void;
    onResendClick: () => void;
    isOpen: boolean;
}

const OtpModal = (props: OtpModaLProps) => {
    const { onVerifyClick, onResendClick, isOpen } = props;
    const { setIsKarvyOTPModalOpen, setIsKarvyLienOTPModalOpen } =
        usePortfolioStore((state) => state);
    const OtpModalFooter = () => (
        <>
            <div className="otp-footer">
                <Button
                    buttonText="Resend OTP"
                    backgroundColor={AQUAMARINE.S600}
                    onButtonClick={() => onResendClick()}
                    width="200px"
                    height="48px"
                    buttonType="PRIMARY"
                    className="resend-button"
                    foregroundColor={BLACK_STONE.EXTRA_DARK}
                />
                <Button
                    buttonText="Verify"
                    backgroundColor={AQUAMARINE.S600}
                    onButtonClick={() => onVerifyClick()}
                    width="150px"
                    height="48px"
                    buttonType="PRIMARY"
                    className="verify-button"
                    foregroundColor={BLACK_STONE.EXTRA_DARK}
                />
            </div>
            <style jsx>{`
                .otp-footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                }
            `}</style>
        </>
    );

    return (
        <CustomModal
            title="OTP Verification"
            footer={<OtpModalFooter />}
            width="600px"
            centered
            open={isOpen}
            bodyStyle={{
                height: '200px',
                width: '500px',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onCancel={() => {
                setIsKarvyOTPModalOpen(false);
                setIsKarvyLienOTPModalOpen(false);
            }}
            closeIcon={
                <Image src={CloseIcon} width={24} height={24} alt="Close" />
            }
        >
            <OTPInput length={6} />
        </CustomModal>
    );
};

export default OtpModal;
