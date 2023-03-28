import { useEffect } from 'react';
import Image from 'next/image';

import {
    BLACK_STONE,
    SAPPHIRE,
    SPESSARTITE,
    WHITE_MARBLE,
    AQUAMARINE,
    SULPHUR_OVER_BLACK_STONE
} from '../../../core/constants/colors';
import { Body, Heading5, Heading6 } from '../../typography';
import { PledgefolioTableProps } from '../table-types';
import PledgefolioCounter from './pledgefolio-counter';

import useGlobalStore from '../../../store/global';

/**
 * This function is used as a pledgefolio table component on the web app.
 *
 * @version 0.3.0
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-14
 * @since 0.8.0
 */
function PledgefolioTable(props: PledgefolioTableProps) {
    const { setFolioItems, folioItems } = props;

    const { pledgeFolioTotal, setPledgeFolioTotal } = useGlobalStore(
        (state) => state
    );

    function calculateSum(array = []) {
        let sum = 0;

        for (let i = 0; i < array.length; i += 1) {
            sum +=
                array[i].price * array[i].quantity * array[i]?.loanToValueRatio;
            sum += array[i].price * array[i].quantity;
        }
        return sum;
    }

    useEffect(() => {
        const total = calculateSum(folioItems);
        setPledgeFolioTotal(total);
    }, [folioItems]);

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
                {folioItems?.map((item) => (
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
                            <PledgefolioCounter
                                id={item.id.toString()}
                                defaultQuantity={item.quantity}
                                maxQuantity={item.maxQuantity}
                                setFolioItems={setFolioItems}
                                folioItems={folioItems}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-table-bottom">
                <div className="container-warning">
                    <div className="container-icon">
                        <Image
                            alt="Info"
                            className="icon-warning"
                            src="/icons/info-circle-black-stone-extra-dark.svg"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="container-warning-text">
                        <Heading6>Unpledge Charges</Heading6>
                        <Body className="text-warning-pledgefolio-table">
                            If you don&apos;t avail the loan please note that
                            the unpledge charges would be ₹499/-.
                        </Body>
                    </div>
                </div>
                <Heading5
                    className="heading-pledgefolio-table-bottom-amount"
                    textColor={AQUAMARINE.S900}
                >
                    Available Loan Amount
                </Heading5>
                <div className="container-amount">
                    <Heading5 margin="auto" textColor={AQUAMARINE.S1000}>
                        <> ₹{pledgeFolioTotal?.toFixed(3)}</>
                    </Heading5>
                </div>
                <Heading5 textColor={AQUAMARINE.S900}>Loan Term</Heading5>
                <div className="container-amount">
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
                    .container-table-items {
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
                        grid-template-columns: 2fr 1fr 1fr;
                        grid-template-rows: repeat(2, 1fr);
                        align-items: center;
                        justify-items: center;
                        margin: 16px 0;
                    }
                    .container-warning {
                        grid-column: 1/2;
                        grid-row: 1/3;
                        display: grid;
                        grid-template-columns: repeat(2, max-content);
                        margin: 0 16px;
                        padding: 16px 24px;
                        background-color: rgba(255, 243, 116, 0.5);
                        border: 1px solid ${SULPHUR_OVER_BLACK_STONE.DARK};
                        border-radius: 24px;
                    }
                    .container-icon {
                        height: 48px;
                        width: 48px;
                        margin-right: 16px;
                        background-color: ${SULPHUR_OVER_BLACK_STONE.REGULAR};
                        border-radius: 16px;
                    }
                    .container-amount {
                        width: 200px;
                        height: 48px;
                        background-color: ${WHITE_MARBLE.DARK};
                        border-radius: 16px;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .icon-warning {
                        display: block;
                        margin: 12px auto;
                    }
                    .text-warning-pledgefolio-table {
                        width: 440px !important;
                    }
                    .heading-pledgefolio-table-bottom-amount {
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
}

export default PledgefolioTable;
