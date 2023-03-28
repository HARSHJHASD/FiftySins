import { useState, useEffect } from 'react';
import Image from 'next/image';

import { BLACK_STONE, WHITE_MARBLE } from '../../core/constants/colors';
import { Body } from '../typography';

import { DropdownProps } from './ui-components-types';

/**
 * This function is used as the dropdown component on the UI.
 *
 * @version 0.2.1
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-14
 * @since 0.12.0
 */
function Dropdown(props: DropdownProps) {
    const [selectedItem, setSelectedItem] = useState(props.items[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        props?.setItemList({
            ...props.itemList,
            [props.name]: props.items[0].text
        });
    }, []);

    const changeDropdownValue = (id: number) => {
        setSelectedItem(props.items[id]);
        setIsDropdownOpen(!isDropdownOpen);
        props?.setItemList({
            ...props.itemList,
            [props.name]: props.items[id].text
        });
    };

    return (
        <div className={`container-dropdown ${props.className}`}>
            {props.labelText ? (
                <Body
                    textColor={
                        props.labelTextColor
                            ? props.labelTextColor
                            : WHITE_MARBLE.LIGHT
                    }
                >
                    {props.labelText}
                </Body>
            ) : null}
            <div className="container-text-input">
                <Body margin="0 0 0 16px" textColor={WHITE_MARBLE.LIGHT}>
                    {selectedItem.text}
                </Body>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                <Image
                    alt="Down Arrow"
                    className="icon-down-arrow-dropdown"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    src="/icons/arrow-circle-down-aquamarine-s600.svg"
                    width={24}
                    height={24}
                />
            </div>
            <div className="container-text-input-drop-down">
                {props.items.map((item) => (
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    <div
                        className="container-text-drop-down"
                        onClick={() => changeDropdownValue(item.id)}
                        onKeyDown={() => changeDropdownValue(item.id)}
                    >
                        <Body
                            className="text-dropdown-item"
                            margin="0 0 0 16px"
                            textColor={WHITE_MARBLE.LIGHT}
                        >
                            {item.text}
                        </Body>
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .container-text-input {
                        width: ${props.width ? props.width : 'fit-content'};
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        background-color: ${BLACK_STONE.EXTRA_LIGHT};
                        border-radius: 16px;
                    }
                    .container-text-input-drop-down {
                        display: ${isDropdownOpen ? 'block' : 'none'};
                        position: absolute;
                        z-index: 99;
                    }
                    .container-text-drop-down {
                        width: ${props.width ? props.width : 'fit-content'};
                        padding: 18px 0;
                        margin-top: 4px;
                        background-color: ${BLACK_STONE.EXTRA_LIGHT};
                        border: solid 2px ${BLACK_STONE.EXTRA_DARK};
                        border-radius: 16px;
                        box-shadow: 0 0 4px ${WHITE_MARBLE.LIGHT};
                        cursor: pointer;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .icon-down-arrow-dropdown {
                        margin-right: 16px;
                    }
                `}
            </style>
        </div>
    );
}

export default Dropdown;
