import { BLACK_STONE, SPESSARTITE } from '../../../core/constants/colors';
import { Body, Heading6 } from '../../typography';

import useBankStore from '../../../store/bank';

/**
 * This function is used as the "Bank Details - Linked" card on the "Avail Loan" screen of the web app.
 *s
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.13.0
 */
function BankDetailsLinked() {
    const { banks } = useBankStore((state) => state);
    const bankDetails = [
        {
            id: 0,
            key: 'Bank Name',
            value: banks?.bank_name || '-'
        },
        {
            id: 1,
            key: 'Account Type',
            value: banks?.account_type || '-'
        },
        {
            id: 2,
            key: 'Account Number',
            value: banks?.account_number || '-'
        },
        {
            id: 3,
            key: 'IFSC Code',
            value: banks?.ifsc_code || '-'
        }
    ];

    return (
        <div className="container-personal-details">
            <Heading6
                className="heading-personal-info"
                margin="0 0 12px 0"
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
                    <Heading6
                        className="heading-detail"
                        textColor={BLACK_STONE.DARK}
                    >
                        {bankDetailItem.value}
                    </Heading6>
                </div>
            ))}
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
        </div>
    );
}

export default BankDetailsLinked;
