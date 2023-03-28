import { useEffect } from 'react';
import {
    AQUAMARINE,
    BLACK_STONE,
    SPESSARTITE,
    WHITE_MARBLE
} from '../../../core/constants/colors';
import { Body, Heading6 } from '../../typography';
import ButtonWithIcon from '../../ui-components/button-with-icon';
import Dropdown from '../../ui-components/dropdown';
import TextInputText from '../../ui-components/text-input';
import Loading from '../../ui-components/loading';
import useProfileStore from '../../../store/profile';
import { BankDetailsLinkingActionsProps } from '../avail-loan-types';

/**
 * This function is used as the "Bank Details - In Process" card on the "Avail Loan" screen of the web app.
 *s
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.13.0
 */
function BankDetailsInProcess(props: BankDetailsLinkingActionsProps) {
    const { bankInfo, setBankInfo } = props;
    const { isLoading, fiftyFinUser } = useProfileStore((state) => state);

    useEffect(() => {
        if (fiftyFinUser) {
            setBankInfo({
                userId: fiftyFinUser.id,
                accountName: `${fiftyFinUser.first_name} ${fiftyFinUser.last_name}`,
                ...bankInfo
            });
        }
    }, [fiftyFinUser]);

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

    const handleOnChange = (event) => {
        const {
            target: { value, name }
        } = event;
        setBankInfo({ ...bankInfo, [name]: value });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="container-personal-details">
            <Heading6
                className="heading-personal-info"
                textColor={BLACK_STONE.DARK}
            >
                Bank Details
            </Heading6>
            <div className="container-divider" />
            {bankDetails.map((bankDetailItem) => (
                <div className="container-detail-item" key={bankDetailItem.id}>
                    <Body
                        className="text-label-details"
                        textColor={BLACK_STONE.DARK}
                    >
                        {bankDetailItem.key}
                    </Body>
                    {bankDetailItem.id === 1 ? (
                        <Dropdown
                            className="dropdown-bank-type"
                            items={dropdownItems}
                            width="320px"
                            bankInfo={bankInfo}
                            setBankInfo={setBankInfo}
                        />
                    ) : (
                        <TextInputText
                            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                            className="text-input-avail-loan-bank-details"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            required
                            shadowColor={WHITE_MARBLE.LIGHT}
                            type="text"
                            width="320px"
                            name={bankDetailItem.name}
                            onChange={handleOnChange}
                        />
                    )}
                </div>
            ))}
            <ButtonWithIcon
                backgroundColor={BLACK_STONE.EXTRA_DARK}
                buttonText="Submit Bank Account"
                buttonType="PRIMARY"
                className="button-avail-loan-link-bank"
                foregroundColor={AQUAMARINE.S600}
                iconAltText="Check"
                iconHeight={24}
                iconWidth={24}
                iconURL="/icons/check-circle-aquamarine-s600.svg"
                onButtonClick={props.ctaAction}
                width="240px"
            />
            <style jsx>
                {`
                    .container-personal-details {
                        width: 520px;
                        padding: 24px;
                        background-color: ${SPESSARTITE.S300};
                        border-radius: 24px;
                    }
                    .container-header {
                        display: flex;
                        align-items: center;
                        margin-bottom: 12px;
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
                    .button-avail-loan-link-bank {
                        width: fit-content;
                        margin: 20px 0 0 auto;
                    }
                `}
            </style>
        </div>
    );
}

export default BankDetailsInProcess;
