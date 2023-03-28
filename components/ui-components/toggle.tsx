import React from "react";
import { Switch } from 'antd';
import { Heading6 } from "../typography";
import { WHITE_MARBLE,BLUESAPPHIRE } from "../../core/constants/colors";


const CheckedToggle = ({ handleToggle, value, checkedText, uncheckedText, toggleLabel }) => {

    return (
        <>
            <div className="toggle-container">
            <Heading6 textColor={WHITE_MARBLE.LIGHT}>{toggleLabel}</Heading6>
            <Switch defaultChecked checked={value} checkedChildren={checkedText} unCheckedChildren={uncheckedText} onChange={handleToggle} />
            </div>
            <style jsx global>
                    {
                        `
                        .toggle-container 
                        {
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            width:100%;
                        }
                        .ant-switch-checked
                        {
                            background: ${BLUESAPPHIRE.S400} !important;
                        }
                        `
                    }
            </style>
        </>
    )
}

export default CheckedToggle;