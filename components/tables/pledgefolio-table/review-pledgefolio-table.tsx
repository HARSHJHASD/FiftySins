import {
    BLACK_STONE,
    SAPPHIRE,
    SPESSARTITE,
    WHITE_MARBLE,
    AQUAMARINE,
    SULPHUR_OVER_BLACK_STONE
} from '../../../core/constants/colors';
import { Body, Heading5, Heading6 } from '../../typography';
import { ReviewPledgefolioTableProps } from '../table-types';

import useGlobalStore from '../../../store/global';

/**
 * This function is used as a pledgefolio table component on the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-14
 * @modifier
 * @modified
 * @since 0.22.0
 */
function ReviewPledgefolioTable(props: ReviewPledgefolioTableProps) {
    const { totalLoanAmount } = useGlobalStore((state) => state);

    return (
        <div className="container-nav-index-table">
            <div className="container-table-header">
                <Body textColor={WHITE_MARBLE.LIGHT}>Funds</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>Type</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>Aggregator</Body>
                <Body margin="auto" textColor={WHITE_MARBLE.LIGHT}>
                    Quantity
                </Body>
            </div>
            <div className="container-table-items">
                {props.folioItems.map((item) => (
                    <div key={item.id}>
                        <div className="container-divider" />
                        <div className="container-table-item">
                            <Body textColor={WHITE_MARBLE.LIGHT}>
                                {item.fundName}
                            </Body>
                            <Heading6 textColor={SAPPHIRE.S200}>
                                {`${item.type}`}
                            </Heading6>
                            <Heading6 textColor={SPESSARTITE.S200}>
                                {`${item.aggregator}`}
                            </Heading6>
                            <Heading5 textColor={AQUAMARINE.S600}>
                                {`${item.quantity}`}
                            </Heading5>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-table-bottom">
                <Heading5
                    className="heading-pledgefolio-table-bottom-amount"
                    textColor={AQUAMARINE.S700}
                >
                    Availed Loan Amount
                </Heading5>
                <div className="container-amount">
                    <Heading5 margin="auto" textColor={AQUAMARINE.S1000}>
                        {`₹${totalLoanAmount}`}
                    </Heading5>
                </div>
                <Heading5
                    className="heading-pledgefolio-table-bottom-term"
                    textColor={AQUAMARINE.S700}
                >
                    Loan Term
                </Heading5>
                <div className="container-term">
                    <Heading5 margin="auto" textColor={AQUAMARINE.S1000}>
                        12 Months
                    </Heading5>
                </div>
            </div>
            <style jsx>
                {`
                    .container-nav-index-table {
                        padding: 8px 0;
                        background-color: ${BLACK_STONE.REGULAR};
                        border-radius: 24px;
                    }
                    .container-table-header {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        align-items: center;
                        justify-items: center;
                        margin: 12px 0;
                    }
                    .container-divider {
                        height: 2px;
                        width: 100%;
                        background-color: ${BLACK_STONE.EXTRA_DARK};
                    }
                    .container-table-item {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(2, fit-content);
                        align-items: center;
                        justify-items: center;
                        grid-column: 1/5;
                        grid-row: 2/3;
                        margin: 16px auto;
                    }
                    .container-table-bottom {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(2, 1fr);
                        row-gap: 16px;
                        align-items: center;
                        justify-items: center;
                        margin: 32px 0 16px;
                    }
                    .container-icon {
                        height: 48px;
                        width: 48px;
                        margin-right: 16px;
                        background-color: ${SULPHUR_OVER_BLACK_STONE.REGULAR};
                        border-radius: 16px;
                    }
                    .container-amount,
                    .container-term {
                        width: 200px;
                        height: 48px;
                        background-color: ${WHITE_MARBLE.DARK};
                        border-radius: 16px;
                    }
                    .icon-warning {
                        display: block;
                        width: 24px;
                        height: 24px;
                        margin: 12px auto;
                    }
                    .container-amount {
                        grid-column: 4/5;
                        grid-row: 1/2;
                    }
                    .container-term {
                        grid-column: 4/5;
                        grid-row: 2/3;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .text-warning-pledgefolio-table {
                        width: 440px !important;
                    }
                    .heading-pledgefolio-table-bottom-amount {
                        grid-column: 3/4;
                        grid-row: 1/2;
                        text-align: center;
                    }
                    .heading-pledgefolio-table-bottom-term {
                        grid-column: 3/4;
                        grid-row: 2/3;
                    }
                `}
            </style>
        </div>
    );
}

export default ReviewPledgefolioTable;
