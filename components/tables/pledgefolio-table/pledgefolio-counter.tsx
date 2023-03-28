import { useState } from 'react';
// import Image from 'next/image';

import {
    BLACK_STONE,
    COBALT_OVER_BLACK_STONE,
    WHITE_MARBLE
} from '../../../core/constants/colors';
import { TextButton } from '../../typography';
import { PledgefolioCounterProps } from '../table-types';

/**
 * This function is used as the Pledgefolio Counter component for the web app.
 *
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-14
 * @since 0.8.0
 */
function PledgefolioCounter(props: PledgefolioCounterProps) {
    const { id, setFolioItems, folioItems } = props;

    const [quantity, setQuantity] = useState(props.defaultQuantity);

    const setMaxQuantity = () => {
        setQuantity(props.maxQuantity);

        const textInputCounter = document.getElementsByClassName(
            'text-input-counter'
        )[0] as HTMLInputElement;
        textInputCounter.defaultValue = props.maxQuantity.toString();
        const changedItems = folioItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: props.maxQuantity };
            }
            return item;
        });
        setFolioItems([...changedItems]);
    };

    const handleQuantityChange = (event) => {
        const {
            target: { value }
        } = event;
        const changedItems = folioItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: value };
            }
            return item;
        });
        setFolioItems([...changedItems]);
    };

    return (
        <div className="container-counter">
            <input
                className="text-input-counter"
                type="number"
                placeholder={quantity.toString()}
                onChange={handleQuantityChange}
            />
            <button
                className="button-max"
                onClick={() => setMaxQuantity()}
                type="button"
            >
                <TextButton textColor={WHITE_MARBLE.LIGHT}>MAX</TextButton>
            </button>
            <style jsx>
                {`
                    .container-counter {
                        width: 200px;
                        height: 48px;
                        display: flex;
                        padding: 0 8px;
                        align-items: center;
                        justify-content: space-around;
                        background-color: ${WHITE_MARBLE.DARK};
                        border-radius: 16px;
                    }
                    .button-max {
                        height: 32px;
                        background-color: ${COBALT_OVER_BLACK_STONE.REGULAR};
                        border: 1px solid ${COBALT_OVER_BLACK_STONE.DARK};
                        border-radius: 4px;
                    }
                    input {
                        grid-column: 1/3;
                        grid-row: 2/3;
                        flex: 1;
                        font-family: 'Prompt', sans-serif;
                        width: 80px;
                        height: 40px;
                        background: ${WHITE_MARBLE.DARK};
                        border: none;
                        border-radius: 16px;
                        box-sizing: border-box;
                        display: inline-block;
                        color: ${BLACK_STONE.EXTRA_DARK};
                        font-size: 16px;
                        font-weight: 400;
                        outline: none;
                        padding: 4px 12px;
                        text-align: center;
                    }
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                    }
                    input[type='number'] {
                        -moz-appearance: textfield;
                    }
                `}
            </style>
        </div>
    );
}

export default PledgefolioCounter;
