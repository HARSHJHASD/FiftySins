import React from 'react';

import InfoCard from './info-card';
import { AQUAMARINE } from '../core/constants/colors';
import Loading from '../components/ui-components/loading';
import useProfileStore from '../store/profile';
import {
    ProfileInfoWrapper,
    ProfileInfoHeaderWrapper,
    ProfileInfoHeader,
    ProfileInfoHeading,
    ProfileInfoSubHeading,
    IconButton,
    InfoCardWrapper,
    EditSaveWrapper,
    SaveChangeButton
} from '../lib/shared-components';

type PersonalInfoTabProps = {
    isEditingPersonalInfo: boolean;
    // eslint-disable-next-line no-unused-vars
    setIsEditingPersonalInfo: (isEditingPersonalInfo: boolean) => void;
};

export default function PersonalInfoTab(props: PersonalInfoTabProps) {
    const { isEditingPersonalInfo, setIsEditingPersonalInfo } = props;

    const { isLoading, fiftyFinUser } = useProfileStore((state) => state);

    if (!fiftyFinUser || isLoading) {
        return <Loading />;
    }

    const {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        date_of_birth: dateOfBirth,
        email
    } = fiftyFinUser;

    if (isEditingPersonalInfo) {
        return (
            <ProfileInfoWrapper>
                <ProfileInfoHeaderWrapper>
                    <ProfileInfoHeader>
                        <ProfileInfoHeading>
                            Personal Information
                        </ProfileInfoHeading>
                        <ProfileInfoSubHeading>
                            Manage your personal information here.
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
                        onButtonClick={() => setIsEditingPersonalInfo(false)}
                    />
                </ProfileInfoHeaderWrapper>
                <InfoCardWrapper>
                    <InfoCard
                        isNameEdit
                        isEdit
                        title="Name"
                        description={`${firstName} ${lastName}`}
                    />
                    <InfoCard
                        title="Phone Number"
                        description={phoneNumber}
                        iconUrl="/icons/lock-04-white-marble-light.svg"
                    />
                    <InfoCard
                        isEdit
                        title="Date Of Birth"
                        description={dateOfBirth}
                    />
                    <InfoCard isEdit title="Email ID" description={email} />
                </InfoCardWrapper>
                <EditSaveWrapper>
                    <SaveChangeButton
                        backgroundColor={AQUAMARINE.S600}
                        buttonType="PRIMARY"
                        iconAltText="check"
                        iconURL="/icons/check-circle.svg"
                        iconHeight={36}
                        iconWidth={36}
                        width="160px"
                        buttonText="Save"
                        shadowColor="#FFFFFF80"
                        onButtonClick={() => null}
                    />
                </EditSaveWrapper>
            </ProfileInfoWrapper>
        );
    }
    return (
        <ProfileInfoWrapper>
            <ProfileInfoHeaderWrapper>
                <ProfileInfoHeader>
                    <ProfileInfoHeading>
                        Personal Information
                    </ProfileInfoHeading>
                    <ProfileInfoSubHeading>
                        Manage your personal information here.
                    </ProfileInfoSubHeading>
                </ProfileInfoHeader>
                <IconButton
                    backgroundColor={AQUAMARINE.S600}
                    buttonType="PRIMARY"
                    iconAltText="Pencil"
                    iconURL="/icons/pencil-01.svg"
                    iconHeight={38}
                    iconWidth={38}
                    width="80px"
                    onButtonClick={() => setIsEditingPersonalInfo(true)}
                />
            </ProfileInfoHeaderWrapper>
            <InfoCardWrapper>
                <InfoCard
                    title="Name"
                    description={`${firstName} ${lastName}`}
                />
                <InfoCard
                    title="Phone Number"
                    description={phoneNumber}
                    iconUrl="/icons/lock-04-white-marble-light.svg"
                />
                <InfoCard title="Date Of Birth" description={dateOfBirth} />
                <InfoCard title="Email" description={email} />
            </InfoCardWrapper>
        </ProfileInfoWrapper>
    );
}
