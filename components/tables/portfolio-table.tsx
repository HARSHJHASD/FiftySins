import { useEffect } from 'react';

import { PortfolioTableProps } from './table-types';
import {
    SILVER,
    AQUAMARINE,
    BLACK_STONE,
    SAPPHIRE,
    SPESSARTITE
} from '../../core/constants/colors';
import { Heading6, Body } from '../typography';

/**
 * This function is used as the Portfolio table on the UI.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-06
 * @modifier Aayush Goyal
 * @modified 2023-03-07
 * @since 0.1.0
 */
function PortfolioTable(props: PortfolioTableProps) {
    const headingText = `Your ${props.rta} Portfolio`;
    const cardBackgroundColor =
        props.rta === 'CAMS' ? SAPPHIRE.S400 : SPESSARTITE.S400;

    const fetchCAMSPortfolio = () => {};

    const fetchKFintechPortfolio = () => {};

    const fetchMutualFundPortfolio =
        props.rta === 'CAMS' ? fetchCAMSPortfolio() : fetchKFintechPortfolio();

    useEffect(() => fetchMutualFundPortfolio, []);

    return (
        <div className="container-portfolio-tables">
            <Heading6 textColor={AQUAMARINE.S700} margin="0 0 8px 0">
                {headingText}
            </Heading6>
            <div className="container-nav-index-table">
                <div className="container-table-header">
                    <Body textColor={BLACK_STONE.EXTRA_DARK}>Fund</Body>
                    <Body textColor={BLACK_STONE.EXTRA_DARK}>Type</Body>
                    <Body textColor={BLACK_STONE.EXTRA_DARK}>Quantity</Body>
                    <Body margin="auto" textColor={BLACK_STONE.EXTRA_DARK}>
                        Amount
                    </Body>
                </div>
                <div className="container-table-items">
                    {props?.portfolioFundItems?.map((item: any) => (
                        <div
                            className={
                                item.isApproved
                                    ? 'container-table-item'
                                    : 'container-table-item container-table-item-unapproved'
                            }
                            key={item.id}
                        >
                            <div className="container-divider" />
                            <div className="table-item">
                                <Body
                                    className="text-portfolio-table-details"
                                    textColor={BLACK_STONE.EXTRA_DARK}
                                >
                                    {item.fundName}
                                </Body>
                                <Heading6
                                    className="text-portfolio-table-details"
                                    textColor={BLACK_STONE.EXTRA_DARK}
                                >
                                    {`${item.type}`}
                                </Heading6>
                                <Heading6
                                    className="text-portfolio-table-details"
                                    textColor={BLACK_STONE.EXTRA_DARK}
                                >
                                    {`${item.quantity}`}
                                </Heading6>
                                <Heading6
                                    className="text-portfolio-table-details"
                                    textColor={AQUAMARINE.S900}
                                >
                                    {item.amount.toString()}
                                </Heading6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>
                {`
                    .container-nav-index-table {
                        padding-top: 8px;
                        border-radius: 24px;
                        background-color: ${cardBackgroundColor};
                    }
                    .container-table-header {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        align-items: center;
                        justify-items: center;
                        margin: 8px 0 12px 0;
                    }
                    .container-table-item {
                        background-color: ${cardBackgroundColor};
                    }
                    .container-table-item-unapproved {
                        background-color: ${SILVER.FOR_BLACK_STONE};
                    }
                    .container-table-item:last-child {
                        border-bottom-left-radius: 24px;
                        border-bottom-right-radius: 24px;
                    }
                    .container-divider {
                        height: 2px;
                        width: 100%;
                        background-color: ${BLACK_STONE.EXTRA_DARK};
                    }
                    .table-item {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: repeat(2, fit-content);
                        align-items: center;
                        justify-items: center;
                        grid-column: 1/5;
                        grid-row: 2/3;
                        padding: 16px 20px;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .text-portfolio-table-details {
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
}

export default PortfolioTable;
