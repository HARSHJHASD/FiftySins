import { useState } from 'react';
import Image from 'next/image';

import { NAVIndexTableProps } from './table-types';

import {
    AQUAMARINE,
    BLACK_STONE,
    CHLORINE_OVER_BLACK_STONE,
    RUBIDIUM_OVER_BLACK_STONE,
    SAPPHIRE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Body, Heading6, Overline, TextButton } from '../typography';

/**
 * This function is used as the NAV Index table on the UI.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-06
 * @modifier
 * @modified
 * @since 0.1.0
 */
function NavIndexTable(props: NAVIndexTableProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [currentNAVItems, setCurrentNAVItems] = useState(
        props.items.slice(0, 10)
    );

    const changeTextColor = (changeValue: number): string => {
        if (changeValue > 0) {
            return CHLORINE_OVER_BLACK_STONE.LIGHT;
        }
        return RUBIDIUM_OVER_BLACK_STONE.LIGHT;
    };

    const navigateToFirstPage = () => {
        setCurrentPage(0);
        setCurrentNAVItems(props.items.slice(0, 10));
    };

    const navigateToLastPage = () => {
        setCurrentPage(4);
        setCurrentNAVItems(props.items.slice(40, 50));
    };

    const navigateToNextPage = () => {
        if (currentPage !== 4) {
            setCurrentNAVItems(
                props.items.slice(
                    (currentPage + 1) * 10,
                    (currentPage + 2) * 10
                )
            );
            setCurrentPage(currentPage + 1);
        }
    };

    const navigateToPreviousPage = () => {
        setCurrentNAVItems(
            props.items.slice((currentPage - 1) * 10, currentPage * 10)
        );
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="container-nav-index-table">
            <div className="container-table-header">
                <Body textColor={WHITE_MARBLE.LIGHT}>Fund</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>NAV</Body>
                <Body textColor={WHITE_MARBLE.LIGHT}>Change</Body>
                <div>
                    <Body margin="auto" textColor={WHITE_MARBLE.LIGHT}>
                        Amount
                    </Body>
                    <Overline margin="auto" textColor={WHITE_MARBLE.LIGHT}>
                        ₹/unit
                    </Overline>
                </div>
            </div>
            <div className="container-table-items">
                {currentNAVItems.map((item) => (
                    <div key={item.id}>
                        <div className="container-divider" />
                        <div className="container-table-item">
                            <Body textColor={WHITE_MARBLE.LIGHT}>
                                {item.fundName + item.id}
                            </Body>
                            <Heading6 textColor={SAPPHIRE.S200}>
                                {`${item.nav}`}
                            </Heading6>
                            <Heading6 textColor={changeTextColor(item.change)}>
                                {`${item.change}%`}
                            </Heading6>
                            <Heading6 textColor={AQUAMARINE.S600}>
                                {item.maxLoan.toString()}
                            </Heading6>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container-divider" />
            <div className="container-pagination">
                <TextButton textColor={WHITE_MARBLE.LIGHT}>{`Page ${
                    currentPage + 1
                } of 5`}</TextButton>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <Image
                    width={24}
                    height={24}
                    src="/icons/chevron-left-double-white-marble-light.svg"
                    className="icon-chevron"
                    alt="Chevron Left Double"
                    onClick={navigateToFirstPage}
                />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <Image
                    width={24}
                    height={24}
                    src="/icons/chevron-left-white-marble-light.svg"
                    className="icon-chevron"
                    alt="Chevron Left"
                    onClick={navigateToPreviousPage}
                />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <Image
                    width={24}
                    height={24}
                    src="/icons/chevron-right-white-marble-light.svg"
                    className="icon-chevron"
                    alt="Chevron Right"
                    onClick={navigateToNextPage}
                />
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <Image
                    width={24}
                    height={24}
                    src="/icons/chevron-right-double-white-marble-light.svg"
                    className="icon-chevron"
                    alt="Chevron Right Double"
                    onClick={navigateToLastPage}
                />
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
                        margin-bottom: 12px;
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
                    .container-pagination {
                        display: flex;
                        margin: 16px;
                        justify-content: center;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .icon-chevron {
                        margin-left: 32px;
                        cursor: pointer;
                    }
                `}
            </style>
        </div>
    );
}

export default NavIndexTable;
