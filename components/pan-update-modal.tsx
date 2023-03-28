import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Button from './ui-components/button';
import CustomModal from './ui-components/modal';
import messages from './messages';
import {
    AQUAMARINE,
    BLACK_STONE,
    WHITE_MARBLE
} from '../core/constants/colors';

import panValidator from '../utils/form-validators/profile-details-form/panValidator';

import useProfileStore from '../store/profile';
import useDigioStore from '../store/digio';
import useBankStore from '../store/bank';

import TextInputText from './ui-components/text-input';

const PanUpdateModal = () => {
    const { fiftyFinUser } = useProfileStore((state) => state);
    const {
        isPanModalOpen,
        setIsPanModalOpen,
        kycVerification,
        isKycVerificationProcessSuccess
    } = useDigioStore((state) => state);
    const { fetchBankAccounts } = useBankStore((state) => state);
    const [panNumber, setPanNumber] = useState();

    useEffect(() => {
        if (isKycVerificationProcessSuccess && isPanModalOpen) {
            setIsPanModalOpen(false);
            fetchBankAccounts({
                userId: fiftyFinUser?.id,
                isAfterKycVerification: true
            });
        }
    }, [isKycVerificationProcessSuccess]);

    const handleVerifyClick = () => {
        const isPanValidated = panValidator(panNumber);

        if (isPanValidated) {
            kycVerification({
                userId: fiftyFinUser?.id?.toString(),
                idNumber: panNumber,
                idType: 'PAN'
            });
        } else {
            messages('warning', 'Please enter a valid PAN'.toUpperCase());
        }
    };

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;
        setPanNumber(value);
    };

    const PanVerificationFooter = () => (
        <>
            <div className="otp-footer">
                <Button
                    buttonText="Verify"
                    backgroundColor={AQUAMARINE.S600}
                    onButtonClick={() => handleVerifyClick()}
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
            title="Pan Verification"
            footer={<PanVerificationFooter />}
            width="600px"
            centered
            open={isPanModalOpen}
            bodyStyle={{
                height: '120px',
                width: '500px',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onCancel={() => {
                setIsPanModalOpen(false);
            }}
            closeIcon={
                <Image
                    src="/icons/x-square-aquamarine-s300.svg"
                    width={24}
                    height={24}
                    alt="Close"
                />
            }
        >
            <TextInputText
                backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                className="text-input-avail-loan-pan-details"
                foregroundColor={WHITE_MARBLE.LIGHT}
                hintText="PAN Number"
                maxlength={10}
                shadowColor={WHITE_MARBLE.LIGHT}
                textAlignCenter
                type="text"
                width="450px"
                onChange={handleChange}
                required={false}
            />
        </CustomModal>
    );
};

export default PanUpdateModal;
