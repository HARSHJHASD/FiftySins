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

import accountNumberValidator from '../utils/form-validators/bank-details-form/accountNumberValidator';
import bankNameValidator from '../utils/form-validators/bank-details-form/bankNameValidator';
import ifscValidator from '../utils/form-validators/bank-details-form/ifscValidator';
import accountTypeValidator from '../utils/form-validators/bank-details-form/accountTypeValidator';

import useProfileStore from '../store/profile';
import useBankStore from '../store/bank';
import TextInputText from './ui-components/text-input';
import Dropdown from './ui-components/dropdown';
import { Body } from './typography';

const initialBankInfoState = {
    bankName: '',
    accountType: '',
    accountNumber: '',
    ifscCode: ''
};

const BankUpdateModal = () => {
    const [bankInfo, setBankInfo] = useState(initialBankInfoState);

    const { fiftyFinUser } = useProfileStore((state) => state);
    const {
        isBankModalOpen,
        setIsBankModalOpen,
        linkBankAccount,
        isBankAccountLinkSuccess
    } = useBankStore((state) => state);

    useEffect(() => {
        if (isBankAccountLinkSuccess && isBankModalOpen) {
            setIsBankModalOpen(false);
        }
    }, [isBankAccountLinkSuccess, isBankModalOpen]);

    const handleVerifyClick = () => {
        const isBankNameValidated = bankNameValidator(bankInfo.bankName);
        const isAccountTypeValidated = accountTypeValidator(
            bankInfo.accountType
        );
        const isAccountNumberValidated = accountNumberValidator(
            bankInfo.accountNumber
        );
        const isIfscCodeValidated = ifscValidator(bankInfo.ifscCode);

        if (!isBankNameValidated) {
            messages('warning', 'Please enter a valid Bank name'.toUpperCase());
        }
        if (!isAccountTypeValidated) {
            messages(
                'warning',
                'Please enter a valid account type'.toUpperCase()
            );
        }
        if (!isAccountNumberValidated) {
            messages(
                'warning',
                'Please enter a valid account number'.toUpperCase()
            );
        }
        if (!isIfscCodeValidated) {
            messages('warning', 'Please enter a valid ifsc code'.toUpperCase());
        }

        if (
            isBankNameValidated &&
            isAccountTypeValidated &&
            isAccountNumberValidated &&
            isIfscCodeValidated
        ) {
            linkBankAccount({
                ...bankInfo,
                userId: fiftyFinUser.id.toString(),
                accountName: `${fiftyFinUser?.first_name} ${fiftyFinUser?.last_name}`,
                isAfterKycVerification: true
            });
        }
    };

    const handleChange = (event) => {
        const {
            target: { value, name }
        } = event;
        setBankInfo({ ...bankInfo, [name]: value });
    };

    const dropdownItems = [
        {
            id: 0,
            text: 'Current'
        },
        {
            id: 1,
            text: 'Savings'
        }
    ];

    const bankDetails = [
        {
            id: 0,
            key: 'Bank Name',
            name: 'bankName'
        },
        {
            id: 1,
            key: 'Account Type',
            name: 'accountType'
        },
        {
            id: 2,
            key: 'Account Number',
            name: 'accountNumber'
        },
        {
            id: 3,
            key: 'IFSC Code',
            name: 'ifscCode'
        }
    ];

    const BankUpdateFooter = () => (
        <>
            <div className="bank-modal-footer">
                <Button
                    buttonText="Add Bank"
                    backgroundColor={AQUAMARINE.S600}
                    onButtonClick={() => handleVerifyClick()}
                    width="420px"
                    height="60px"
                    buttonType="PRIMARY"
                    className="add-bank-button"
                    foregroundColor={BLACK_STONE.EXTRA_DARK}
                />
            </div>
            <style jsx>{`
                .bank-modal-footer {
                    margin: 30px 0;
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
            title="Add Bank Account"
            footer={<BankUpdateFooter />}
            width="520px"
            centered
            open={isBankModalOpen}
            bodyStyle={{
                marginTop: '20px',
                height: '400px',
                display: 'grid',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onCancel={() => {
                setIsBankModalOpen(false);
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
            {bankDetails.map((bankDetailItem) => (
                <div className="container-detail-item" key={bankDetailItem.id}>
                    <Body
                        className="text-label-details"
                        textColor={WHITE_MARBLE.LIGHT}
                    >
                        {bankDetailItem.key}
                    </Body>
                    {bankDetailItem.id === 1 ? (
                        <Dropdown
                            className="dropdown-bank-type"
                            items={dropdownItems}
                            width="420px"
                            name="accountType"
                            itemList={bankInfo}
                            setItemList={setBankInfo}
                        />
                    ) : (
                        <TextInputText
                            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                            className="text-input-bank-details"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            shadowColor={WHITE_MARBLE.LIGHT}
                            type="text"
                            width="420px"
                            name={bankDetailItem.name}
                            onChange={handleChange}
                            required={false}
                        />
                    )}
                </div>
            ))}
        </CustomModal>
    );
};

export default BankUpdateModal;
