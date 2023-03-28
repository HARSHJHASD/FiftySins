import { RepaymentTimelineTableProps } from './table-types';

import {
    AQUAMARINE,
    BLACK_STONE,
    CHLORINE_OVER_BLACK_STONE,
    SILVER,
    SPESSARTITE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Body, Heading6 } from '../typography';

/**
 * This function is used as the Repayment Timelines table on the UI.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-14
 * @since 0.1.0
 */
function RepaymentTimelineTable(props: RepaymentTimelineTableProps) {
    const getRadioButtonClassName = (status: string): string => {
        let radioButtonClassName = '';
        if (status === 'ACTIVE') {
            radioButtonClassName = 'radio-button-active';
        } else if (status === 'COMPLETE') {
            radioButtonClassName = 'radio-button-complete';
        } else {
            radioButtonClassName = 'radio-button-inactive';
        }

        return radioButtonClassName;
    };

    return (
        <div className="container-nav-index-table">
            <div className="container-table-header">
                <Body textColor={WHITE_MARBLE.LIGHT}>Payment Date</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>Amount</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>Payment Date</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>Amount</Body>
            </div>
            <div className="container-table-items">
                {props.repaymentItems.map((repaymentItem) =>
                    repaymentItem.id < 6 ? (
                        <div key={repaymentItem.id}>
                            <div className="container-divider" />
                            <div className="container-table-item">
                                {/* Left Side Items */}
                                <div className="container-date">
                                    {!props.reviewPage ? (
                                        <input
                                            className={`radio-button ${getRadioButtonClassName(
                                                repaymentItem.status
                                            )}`}
                                            type="radio"
                                            disabled
                                            checked
                                        />
                                    ) : null}
                                    <Heading6
                                        margin="0 0 0 8px"
                                        textColor={SPESSARTITE.S300}
                                    >
                                        {repaymentItem.date}
                                    </Heading6>
                                </div>
                                <Heading6 textColor={AQUAMARINE.S600}>
                                    {repaymentItem.amount.toString()}
                                </Heading6>
                                {/* Right Side Items */}
                                <div className="container-date">
                                    {!props.reviewPage ? (
                                        <input
                                            className={`radio-button ${getRadioButtonClassName(
                                                props.repaymentItems[
                                                    repaymentItem.id + 6
                                                ].status
                                            )}`}
                                            type="radio"
                                            disabled
                                            checked={
                                                repaymentItem.status ===
                                                'COMPLETE'
                                            }
                                        />
                                    ) : null}
                                    <Heading6
                                        margin="0 0 0 8px"
                                        textColor={SPESSARTITE.S300}
                                    >
                                        {
                                            props.repaymentItems[
                                                repaymentItem.id + 6
                                            ].date
                                        }
                                    </Heading6>
                                </div>
                                <Heading6 textColor={AQUAMARINE.S600}>
                                    {props.repaymentItems[
                                        repaymentItem.id + 6
                                    ].amount.toString()}
                                </Heading6>
                            </div>
                        </div>
                    ) : null
                )}
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
                        margin: 8px 0;
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
                    .container-date {
                        display: flex;
                        justify-content: space-around;
                    }
                    input {
                        width: 24px;
                        height: 24px;
                        appearance: none;
                        background-color: ${WHITE_MARBLE.LIGHT};
                        border-radius: 50%;
                        border: 2px solid ${CHLORINE_OVER_BLACK_STONE.DARK};
                    }
                    .radio-button-complete {
                        background-color: ${CHLORINE_OVER_BLACK_STONE.DARK};
                        background-clip: content-box;
                        padding: 2px;
                        border: 2px solid ${CHLORINE_OVER_BLACK_STONE.DARK};
                    }
                    .radio-button-inactive {
                        background-color: ${SILVER.FOR_BLACK_STONE};
                        border: none;
                    }
                `}
            </style>
        </div>
    );
}

export default RepaymentTimelineTable;
