import React, { useEffect } from 'react';
import InfoCard from './info-card';
import { AQUAMARINE } from '../core/constants/colors';
import useDigioStore from '../store/digio';
import useProfileStore from '../store/profile';
import useBankStore from '../store/bank';
import {
    PanAndBankDetailsWrapper,
    PanAndBankInfoWrapper,
    ProfileInfoHeaderWrapper,
    ProfileInfoHeader,
    ProfileInfoHeading,
    ProfileInfoSubHeading,
    IconButton,
    BankDetailsEditWrapper,
    CardEditWithIconWrapper,
    CardEditIcon,
    EditSaveWrapper,
    SaveChangeButton,
    BankChangeButton,
    BankDetailsWrapper
} from '../lib/shared-components';

type PanAndBankDetailsTabProps = {
    isAddingAnotherBankInfo: boolean;
    // eslint-disable-next-line no-unused-vars
    setIsAddingAnotherBankInfo: (isAddingAnotherBankInfo: boolean) => void;
};

export default function PanAndBankDetailsTab(props: PanAndBankDetailsTabProps) {
    const { isAddingAnotherBankInfo, setIsAddingAnotherBankInfo } = props;

    const { checkKycVerification, panInfo } = useDigioStore((state) => state);
    const { fiftyFinUser } = useProfileStore((state) => state);
    const { banks, fetchBankAccounts } = useBankStore((state) => state);

    useEffect(() => {
        if (fiftyFinUser) {
            checkKycVerification({
                userId: fiftyFinUser.id.toString(),
                idType: 'PAN'
            });
            fetchBankAccounts({ userId: fiftyFinUser.id });
        }
    }, [fiftyFinUser]);

    if (isAddingAnotherBankInfo) {
        return (
            <PanAndBankDetailsWrapper>
                <PanAndBankInfoWrapper>
                    <ProfileInfoHeaderWrapper>
                        <ProfileInfoHeader>
                            <ProfileInfoHeading>
                                Add Another Bank Account
                            </ProfileInfoHeading>
                            <ProfileInfoSubHeading>
                                Add your bank account information here and add
                                another bank account.
                            </ProfileInfoSubHeading>
                        </ProfileInfoHeader>
                        <IconButton
                            backgroundColor={AQUAMARINE.S600}
                            buttonType="PRIMARY"
                            iconAltText="close"
                            iconURL="/icons/x.svg"
                            iconHeight={48}
                            iconWidth={48}
                            width="60px"
                            onButtonClick={() =>
                                setIsAddingAnotherBankInfo(false)
                            }
                        />
                    </ProfileInfoHeaderWrapper>

                    <BankDetailsEditWrapper>
                        <InfoCard isEdit title="Bank Name" description="-" />
                        <CardEditWithIconWrapper>
                            <InfoCard
                                isEdit
                                title="Account Type"
                                description="-"
                                iconUrl="/icons/arrow-circle-down.svg"
                                className="info-card-with-icon"
                            />
                            <CardEditIcon
                                src="/icons/arrow-circle-down.svg"
                                alt="circle down"
                            />
                        </CardEditWithIconWrapper>
                        <InfoCard
                            isEdit
                            title="Account Number"
                            description="-"
                        />
                        <InfoCard isEdit title="IFSC Code" description="-" />
                    </BankDetailsEditWrapper>
                    <EditSaveWrapper>
                        <SaveChangeButton
                            backgroundColor={AQUAMARINE.S600}
                            buttonType="PRIMARY"
                            iconAltText="check"
                            iconURL="/icons/check-circle.svg"
                            iconHeight={36}
                            iconWidth={36}
                            width="160px"
                            buttonText="Submit"
                            shadowColor="#FFFFFF80"
                            onButtonClick={() => null}
                        />
                    </EditSaveWrapper>
                </PanAndBankInfoWrapper>
            </PanAndBankDetailsWrapper>
        );
    }
    return (
        <PanAndBankDetailsWrapper>
            <PanAndBankInfoWrapper>
                <ProfileInfoHeaderWrapper>
                    <ProfileInfoHeader>
                        <ProfileInfoHeading>PAN Details</ProfileInfoHeading>
                        <ProfileInfoSubHeading>
                            Check your pan card information here.
                        </ProfileInfoSubHeading>
                    </ProfileInfoHeader>
                </ProfileInfoHeaderWrapper>
                <InfoCard
                    title="PAN No."
                    description={panInfo ? panInfo.document : '-'}
                    iconUrl="/icons/lock-04-white-marble-light.svg"
                />
            </PanAndBankInfoWrapper>
            <PanAndBankInfoWrapper>
                <ProfileInfoHeaderWrapper>
                    <ProfileInfoHeader>
                        <ProfileInfoHeading>
                            Bank Account Details
                        </ProfileInfoHeading>
                        <ProfileInfoSubHeading>
                            Check your bank account information here and add
                            another bank account. Set primary account.
                        </ProfileInfoSubHeading>
                    </ProfileInfoHeader>
                    <BankChangeButton
                        backgroundColor={AQUAMARINE.S600}
                        buttonType="PRIMARY"
                        iconAltText="Pencil"
                        iconURL="/icons/bank.svg"
                        iconHeight={36}
                        iconWidth={36}
                        width="300px"
                        buttonText="Add another bank account"
                        onButtonClick={() => setIsAddingAnotherBankInfo(true)}
                    />
                </ProfileInfoHeaderWrapper>

                <BankDetailsWrapper>
                    <InfoCard
                        title="Bank Name"
                        description={banks?.bank_name ? banks?.bank_name : '-'}
                        iconUrl="/icons/lock-04-white-marble-light.svg"
                    />
                    <InfoCard
                        title="Account Type"
                        description={
                            banks?.account_type ? banks?.account_type : '-'
                        }
                        iconUrl="/icons/lock-04-white-marble-light.svg"
                    />
                    <InfoCard
                        title="Account Number"
                        description={
                            banks?.account_number ? banks?.account_number : '-'
                        }
                        iconUrl="/icons/lock-04-white-marble-light.svg"
                    />
                    <InfoCard
                        title="IFSC Code"
                        description={banks?.ifsc_code ? banks?.ifsc_code : '-'}
                        iconUrl="/icons/lock-04-white-marble-light.svg"
                    />
                </BankDetailsWrapper>
            </PanAndBankInfoWrapper>
        </PanAndBankDetailsWrapper>
    );
}
