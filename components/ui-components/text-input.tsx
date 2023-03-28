// @ts-nocheck
/* eslint-disable prettier/prettier */
import {
    RUBIDIUM_OVER_BLACK_STONE,
    WHITE_MARBLE,SILVER
} from '../../core/constants/colors';
import { Body, Overline } from '../typography';
import Toggle from '../typography/password-toggle';
import { DatePicker, Space } from 'antd';
import { TextInputTextProps } from './ui-components-types';

/**
 * This function is used as the component for text fields.
 *
 * @version 0.3.0
 * @author Aayush Goyal
 * @created 2023-03-02
 * @modifier Aayush Goyal
 * @modified 2023-03-08
 * @since 0.2.0
 */
function TextInputText(props: TextInputTextProps) {
    const textAlign = () => (props.textAlignCenter ? 'center' : 'left');
    
    
    return (
        <div id={props.id} className={props.className}>
            <Body
                textColor={props.labelTextColor? props.labelTextColor: WHITE_MARBLE.LIGHT}

                fontSize ={props.labelFontSize? props.labelFontSize: "1.18rem"}
            >
                {props.labelText}
            </Body>
            {props.required ? (
                <Overline
                    margin="0 0 0 auto"
                    textColor={RUBIDIUM_OVER_BLACK_STONE.LIGHT}
                >
                    Required
                </Overline>
            ) : null}

            <div className="inputWrapper">
                
                {props.type === "password"
                    ? <Toggle></Toggle>
                    : null
                }

                {props.type === "date"
                    ? <DatePicker 
                        onChange={props.onChangeDateHandler}
                        // format = {YYYY-MM-DD}
                        style = {{
                                width : props.width,
                                height: props.height? props.height : "40px",
                                border: "1px solid #8C8F9F",
                                borderRadius: "8px",
                                background: "#14193E",
                                color: WHITE_MARBLE.LIGHT 

                             }}
                         />
                    :
                    <input
                        id={props.inputFieldId}
                        type={props.type}
                        maxLength={props.maxlength}
                        onChange={props.onChange}
                        placeholder={props.hintText}
                        name={props.name}
                        value={props.value}
                    />  
                }
            

            </div>


            {props.errorMessage && 
                <p>{props.errorMessage}</p>
                }

            
            <style jsx>
                {`
                    div {
                        display: flex;
                        flex-direction: column;
                        width: ${props.width};
                        border-radius: 16px;
                    }
                    p{
                        margin:0;
                        padding:0;
                        color:brown;
                    }
                    .inputWrapper{
                        position:relative;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        width:fit-content;
                    }
                    
                    
                    input {
                        font-family: 'Prompt', sans-serif;
                        width: ${props.width};
                        height: ${props.height? props.height : "40px"};
                        background: ${props.backgroundColor};
                        border: 1px solid #8C8F9F; 
                        border-radius: 8px; 
                        background: #14193E;
                        box-shadow: 0px 0px 8px ${props.shadowColor};
                        box-sizing: border-box;
                        display: inline-block;
                        color: ${props.foregroundColor};
                        font-size: 16px;
                        font-weight: 400;
                        outline: none;
                        padding: 0px 12px;
                        text-align: ${textAlign()};
                    }
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    textarea:-webkit-autofill,
                    textarea:-webkit-autofill:hover,
                    textarea:-webkit-autofill:focus,
                    select:-webkit-autofill,
                    select:-webkit-autofill:hover,
                    select:-webkit-autofill:focus {
                        -webkit-text-fill-color: ${props.foregroundColor};
                        transition: background-color 5000s ease-in-out 0s;
                    }
                    .text-label {
                        grid-column: 1/2;
                        grid-row: 1/2;
                        color: ${props.foregroundColor};
                    }
                    .text-required {
                        grid-column: 2/3;
                        grid-row: 1/2;
                        justify-self: end;
                        color: ${RUBIDIUM_OVER_BLACK_STONE};
                    }
                `}
            </style>

            <style jsx global>{`

            .ant-picker-dropdown .ant-picker-panel-container {
                background : #14193E;
            }
            .ant-picker-dropdown .ant-picker-cell{
                color: ${SILVER.FOR_BLACK_STONE};
            }
            .ant-picker-dropdown .ant-picker-header{
                color: ${WHITE_MARBLE.LIGHT};
            }
            .ant-picker-dropdown .ant-picker-content th{
                color:${WHITE_MARBLE.LIGHT};
            }
            .ant-picker-dropdown .ant-picker-cell-in-view{
                color: ${WHITE_MARBLE.LIGHT};
            }
            .ant-picker-dropdown .ant-picker-header button{
                color: ${WHITE_MARBLE.LIGHT};
            }
            .ant-picker .ant-picker-suffix{
                color: ${WHITE_MARBLE.LIGHT};
            }
            .ant-picker .ant-picker-input >input{
                color: ${WHITE_MARBLE.LIGHT};
                
            }

                `}</style>
        </div>
    );
}

export default TextInputText;
