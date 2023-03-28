import React from 'react';
import Image from 'next/image';

import { AQUAMARINE } from '../core/constants/colors';
import {
    ProfileInfoWrapper,
    ProfileInfoHeaderWrapper,
    ProfileInfoHeader,
    ProfileInfoHeading,
    ProfileInfoSubHeading,
    SettingsList,
    SettingsWrapper,
    SettingLabel,
    SettingSwitch,
    UserDeleteButton
} from '../lib/shared-components';

export default function AccountSettingsTab() {
    return (
        <ProfileInfoWrapper>
            <ProfileInfoHeaderWrapper>
                <ProfileInfoHeader>
                    <ProfileInfoHeading>Account Settings</ProfileInfoHeading>
                    <ProfileInfoSubHeading>
                        Manage your account settings here.
                    </ProfileInfoSubHeading>
                </ProfileInfoHeader>
            </ProfileInfoHeaderWrapper>
            <SettingsList>
                <SettingsWrapper>
                    <SettingLabel>Loan Notification</SettingLabel>
                    <SettingSwitch />
                </SettingsWrapper>
                <SettingsWrapper>
                    <SettingLabel>Payment Notification</SettingLabel>
                    <SettingSwitch />
                </SettingsWrapper>
                <SettingsWrapper>
                    <SettingLabel>Reminders</SettingLabel>
                    <SettingSwitch />
                </SettingsWrapper>
                <SettingsWrapper>
                    <SettingLabel>
                        <>
                            Whatsapp Updates
                            <Image
                                className="icon"
                                alt="whatsapp"
                                src="/icons/whatsapp.svg"
                                width={32}
                                height={32}
                            />
                        </>
                    </SettingLabel>
                    <SettingSwitch />
                </SettingsWrapper>
                <SettingsWrapper>
                    <SettingLabel>Delete Account</SettingLabel>
                    <UserDeleteButton
                        backgroundColor={AQUAMARINE.S600}
                        buttonType="PRIMARY"
                        iconAltText="user delete"
                        iconURL="/icons/user-x-02.svg"
                        iconHeight={28}
                        iconWidth={28}
                        width="40px"
                        onButtonClick={() => null}
                    />
                </SettingsWrapper>
            </SettingsList>
        </ProfileInfoWrapper>
    );
}
