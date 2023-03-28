import { Radio, Switch } from 'antd';
import styled from 'styled-components';
import { Heading4, Body, Heading5, Heading6 } from '../components/typography';
import ButtonWithIcon from '../components/ui-components/button-with-icon';
import {
    BLACK_STONE,
    AQUAMARINE,
    SPESSARTITE,
    WHITE_MARBLE,
    SAPPHIRE,
    BLUESAPPHIRE
} from '../core/constants/colors';

export const PageContainer = styled.div`
    background-color: ${BLACK_STONE.EXTRA_DARK};
    min-height: 100vh;
    padding-top: 7%;
`;

export const Wrapper = styled.div`
    width: 75%;
    margin: 0 auto;
`;

export const Header = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    color: ${AQUAMARINE.S300};
    padding: 1rem 0;
    border-bottom: 1px solid ${AQUAMARINE.S300};
`;

export const ProfileInfoHeading = styled(Heading4)`
    margin: 0 0 10px;
    font-size: 1.5rem;
    color: ${SPESSARTITE.S600};
`;

export const ProfileInfoSubHeading = styled(Body)`
    width: 400px;
    margin: 0;
    font-size: 1rem;
    color: ${WHITE_MARBLE.LIGHT};
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-center;
    margin-top: 40px;
`;

export const ProfileAvatarAndActionWrapper = styled.div`
    width: 22%;
`;

export const AvatarWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto;
`;

export const Avatar = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;

export const Username = styled(Heading5)`
    margin-top: 24px !important;
    width: 100% !important;
    color: ${WHITE_MARBLE.DARK};
    text-align: center;
`;

export const ProfileInfoSwitchWrapper = styled(Radio.Group)`
    margin-top: 50px;
    width: 100%;

    .ant-radio-button-wrapper-checked {
        background-color: ${BLACK_STONE.DARK};
        color: ${SAPPHIRE.S300};
        border: none;

        &:hover {
            color: ${SAPPHIRE.S300};
        }
    }
    .ant-space-vertical {
        width: 100%;
    }
`;
export const InfoSwitchButton = styled(Radio.Button)`
    width: 100%;
    color: ${WHITE_MARBLE.LIGHT};
    background-color: transparent;
    border: none !important;
    border-radius: 8px !important;
    height: 40px;
    margin-bottom: 8px;

    &:hover {
        color: ${SAPPHIRE.S300};
    }
`;

export const ProfileInfoWrapper = styled.div`
    width: 68%;
    background-color: ${BLACK_STONE.DARK};
    border-radius: 16px;
    padding: 24px 40px 40px;
    box-sizing: border-box;
    align-self: flex-start;
`;

export const ProfileInfoHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 40px;
`;

export const InfoCardWrapper = styled.div`
    width: 94%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
`;

export const ProfileInfoHeader = styled.div``;

export const IconButton = styled(ButtonWithIcon)<any>`
    padding: 0;
    align-self: flex-start;

    .icon-button {
        margin-right: 0 !important;
    }
`;

export const ImageUpdateIconButton = styled(IconButton)<any>`
    position: absolute;
    bottom: 0;
    right: 0;
    .button {
        height: 48px;
    }
`;

export const SettingsList = styled.div`
    margin-top: 40px;
`;

export const SettingsWrapper = styled.div`
    margin-bottom: 36px;
    padding: 15px 24px;
    width: 400px;
    background-color: ${BLACK_STONE.REGULAR};
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const LeftSideBarComponent = styled.div`
    background-color: ${BLUESAPPHIRE.S100};
    height: calc(100vh - 80px);
    margin-top: 2px;
`

export const MutualFundHeading = styled.div`
    font-weight: 600;
    font-size: 14px;
    color: ${BLUESAPPHIRE.S1000};
    margin-left: 3.8rem;
    padding-bottom: 1px;
`

export const TableHeadComponent = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    font-size: 14px
`

export const ShowMutualBtnComponent = styled.div`
    padding: 1rem;
    background-color: ${BLUESAPPHIRE.S100};
    border-width: 0px 1px 1px 1px;
    border-style: solid;
    border-color: ${BLUESAPPHIRE.S400};
    border-radius: 0px 0px 15px 15px;
    color: ${BLUESAPPHIRE.S500};
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
`

export const UserDeleteButton = styled(IconButton)<any>`
    .button {
        height: 40px;
        border-radius: 16px;
    }
`;

export const BankChangeButton = styled(ButtonWithIcon)<any>`
    align-self: flex-start;
`;

export const SaveChangeButton = styled(ButtonWithIcon)<any>``;

export const SettingLabel = styled(Heading6)`
    color: ${WHITE_MARBLE.DARK};
    display: flex;
    align-items: center;

    .icon {
        margin-left: 8px;
    }
`;

export const SettingSwitch = styled(Switch)`
    background-color: ${WHITE_MARBLE.DARK};
    width: 60px;
    height: 30px;

    &:hover {
        background-color: ${WHITE_MARBLE.DARK} !important;
    }
    &.ant-switch.ant-switch-checked {
        background-color: ${AQUAMARINE.S600};

        &:hover {
            background-color: ${AQUAMARINE.S600} !important;
        }
    }

    :where(&).ant-switch.ant-switch-checked .ant-switch-handle {
        inset-inline-start: calc(100% -30px) !important;
    }

    .ant-switch-handle {
        inset-inline-start: 5px;
        &::before {
            background-color: ${BLACK_STONE.REGULAR};
            width: 24px;
            height: 24px;
            border-radius: 50%;
        }
    }
`;

export const PanAndBankInfoWrapper = styled(ProfileInfoWrapper)`
    width: 100%;
    margin-bottom: 32px;
`;

export const PanAndBankDetailsWrapper = styled.div`
    width: 68%;
`;

export const BankDetailsWrapper = styled.div`
    background-color: ${BLACK_STONE.LIGHT};
    border-radius: 24px;
    padding: 24px 28px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
`;

export const BankDetailsEditWrapper = styled(BankDetailsWrapper)`
    background-color: transparent;
    padding: 0 28px;
`;

export const EditSaveWrapper = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: flex-end;
`;

export const CardEditWithIconWrapper = styled.div`
    position: relative;
    width: 45%;

    .info-card-with-icon {
        width: 100%;
    }
`;

export const CardEditIcon = styled.img`
    position: absolute;
    right: 12%;
    bottom: 28%;
`;
