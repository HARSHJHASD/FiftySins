import { useEffect, useState } from 'react';
import {
    AQUAMARINE,
    BLACK_STONE,
    SAPPHIRE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Body, Heading6 } from '../typography';
import Button from '../ui-components/button';
import ButtonWithIcon from '../ui-components/button-with-icon';
import TextInputText from '../ui-components/text-input';
import { PersonalDetailsProps } from './avail-loan-types';

import useDigioStore from '../../store/digio';
import useProfileStore from '../../store/profile';
import useGlobalStore from '../../store/global';

/**
 * This function is used as the "Personal Details" card on the "Avail Loan" screen of the web app.
 *s
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-13
 * @since 0.11.0
 */
function PersonalDetails(props: PersonalDetailsProps) {
    const [panLinkStatus, setPANLinkStatus] = useState(props.panLinkStatus);
    const [panNumber, setPanNumber] = useState('');

    const {
        panInfo,
        isKycVerified,
        isKycVerificationProcessSuccess,
        checkKycVerification,
        kycVerification
    } = useDigioStore((state) => state);

    const { fiftyFinUser, fetchUser } = useProfileStore((state) => state);
    const { fireBaseUser } = useGlobalStore((state) => state);

    useEffect(() => {
        if (fireBaseUser && !fiftyFinUser) {
            fetchUser({ idType: 'email', id: fireBaseUser.email });
        }
    }, []);

    useEffect(() => {
        if (fiftyFinUser) {
            checkKycVerification({
                userId: fiftyFinUser.id.toString(),
                idType: 'PAN'
            });
        }
    }, [fiftyFinUser]);

    const personalDetails = [
        {
            id: 0,
            label: 'Name',
            details: `${fiftyFinUser?.first_name} ${fiftyFinUser?.last_name}`
        },
        {
            id: 1,
            label: 'Phone Number',
            details: fiftyFinUser?.phone_number
        },
        {
            id: 2,
            label: 'Email ID',
            details: fiftyFinUser?.email
        }
    ];

    const openPANTextInput = () => {
        setPANLinkStatus(1);
    };

    const linkPANCard = async () => {
        kycVerification({
            userId: fiftyFinUser.id.toString(),
            idNumber: panNumber,
            idType: 'PAN'
        });
        if (isKycVerificationProcessSuccess) {
            setPANLinkStatus(2);
        } else {
            setPANLinkStatus(0);
        }
    };

    const handleOnChange = (event) => {
        setPanNumber(event.target.value);
    };

    const panButtonElement = (
        <Button
            backgroundColor={BLACK_STONE.DARK}
            buttonType="PRIMARY"
            buttonText="Link PAN Card"
            className="button-link-pan"
            foregroundColor={AQUAMARINE.S600}
            onButtonClick={() => openPANTextInput()}
            width="200px"
        />
    );

    const panHeadingElement = (
        <Heading6 className="heading-detail" textColor={BLACK_STONE.DARK}>
            {panInfo?.document}
        </Heading6>
    );

    const panTextInputElement = (
        <TextInputText
            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
            className="text-input-avail-loan-pan-details"
            foregroundColor={WHITE_MARBLE.LIGHT}
            hintText="PAN Number"
            maxlength={10}
            required
            shadowColor={WHITE_MARBLE.LIGHT}
            textAlignCenter
            type="text"
            width="320px"
            onChange={handleOnChange}
        />
    );

    let panElement: JSX.Element;
    if (panLinkStatus === 0 && !isKycVerified) {
        panElement = panButtonElement;
    } else if (panLinkStatus === 1) {
        panElement = panTextInputElement;
    } else {
        panElement = panHeadingElement;
    }

    return (
        <div className="container-personal-details">
            <Heading6
                className="heading-personal-info"
                textColor={BLACK_STONE.DARK}
                margin="0 0 12px 0"
            >
                Personal Information
            </Heading6>
            <div className="container-divider" />
            {personalDetails.map((detailItem) => (
                <div className="container-detail-item" key={detailItem.id}>
                    <Body
                        className="text-label-details"
                        textColor={BLACK_STONE.DARK}
                    >
                        {detailItem.label}
                    </Body>
                    <Heading6
                        className="heading-detail"
                        textColor={BLACK_STONE.DARK}
                    >
                        {detailItem.details}
                    </Heading6>
                </div>
            ))}
            <div className="container-detail-item">
                <Body
                    className="text-label-details"
                    textColor={BLACK_STONE.DARK}
                >
                    PAN No.
                </Body>
                {panElement}
            </div>
            {panLinkStatus === 1 ? (
                <ButtonWithIcon
                    backgroundColor={BLACK_STONE.DARK}
                    buttonType="PRIMARY"
                    buttonText="Link PAN Card"
                    className="button-avail-loan-link-pan"
                    foregroundColor={AQUAMARINE.S600}
                    iconAltText="Check"
                    iconURL="/icons/check-circle-aquamarine-s600.svg"
                    iconHeight={24}
                    iconWidth={24}
                    onButtonClick={linkPANCard}
                    width="200px"
                />
            ) : null}
            <style jsx>
                {`
                    .container-personal-details {
                        width: 520px;
                        height: fit-content;
                        padding: 24px;
                        background-color: ${SAPPHIRE.S300};
                        border-radius: 24px;
                    }
                    .container-divider {
                        width: 100%;
                        height: 2px;
                        grid-column: 1/3;
                        background-color: ${BLACK_STONE.EXTRA_DARK};
                    }
                    .container-detail-item {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin: 12px 0;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .button-avail-loan-link-pan {
                        width: fit-content;
                        margin-left: auto;
                    }
                `}
            </style>
        </div>
    );
}

export default PersonalDetails;
