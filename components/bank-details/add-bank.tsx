import React, { useState, useEffect } from 'react'
import { WHITE_MARBLE } from '../../core/constants/colors'
import Button from '../ui-components/button'
import TextInputText from '../ui-components/text-input'
import validator from 'validator';

type Props = {
    showAddAnotherBankAcc : boolean, 
    setShowAddAnotherBankAcc: React.Dispatch<React.SetStateAction<boolean>>
}

type accountType = 'Savings' | 'Current'

export default function AddBank({showAddAnotherBankAcc, setShowAddAnotherBankAcc }: Props) {

    const initialTextFields = [{
        label: "Account Holder Name",
        error: "",
        value: "",
        type: "alphanumeric"
    }, {
        label: "Bank Name",
        error: "",
        value: "",
        type: "alphanumeric"
    }, {
        label: "Account Number",
        error: "",
        value: "",
        type: "numeric"
    }, {
        label: "Confirm Account Number",
        error: "",
        value: "",
        type: "numeric"
    }, {
        label: "IFSC Code",
        error: "",
        value: "",
        type: "alphanumeric"
    }, {
        label: "Account Type",
        error: "",
        value: "",
        type: "alphabets"
    }]

    const [textFields, setTextFields] = useState<Array<{ label: string, error: string, value: string | number | readonly string[], type: string | accountType }>>(initialTextFields)

    const [addBankAccText, setAddBankAccText] = useState("Add Bank Account");

    const onSubmitHandler = () => {

        if(addBankAccText !== "Add Bank Account"){
            setShowAddAnotherBankAcc(true);
            setAddBankAccText("Add Bank Account")
            setTextFields(initialTextFields)
            return;
        }

        let prevTextTextFields = [...textFields];

        prevTextTextFields = prevTextTextFields.map(field => {
            field.error = "";

            if (!field.value) {
                field.error = `Please Enter ${field.label}`
                return field;
            }

            if(field.label === "Confirm Account Number" && field.value !== textFields.filter(field=>field.label==="Account Number")[0].value){
                field.error = `Account number should be same`
            }

            if (field.type === "numeric" && !validator.isNumeric(`${field.value}`)) {
                field.error = `Please Enter numeric digits only`
            }

            if (field.type === "alphabets" && !validator.isAlpha(`${field.value}`)) {
                field.error = `Please Enter string only`
            }

            return field;
        })
        
        setTextFields(prevTextTextFields)

        setAddBankAccText("Add Bank Account")
        
        if (prevTextTextFields.filter(field => field.error.length > 0).length > 0) return;

        setAddBankAccText("Add Another Bank Account")
    }


    return (
        <>
            <p className='pan-details__title'>Add Bank Account </p>

            <form className='pan-details__form'>
                {
                    textFields.map(field => (
                        <TextInputText
                            type="text"
                            width="420px"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            labelText={field.label}
                            errorMessage={field.error}
                            value={field.value}
                            onChange={(e) => {
                                setTextFields(prevState => {
                                    return prevState.map(field_ => {
                                        if (field_.label === field.label) {
                                            field_.value = e.target.value;
                                            return field_;
                                        }
                                        return field_;
                                    })
                                })
                            }}
                        />
                    ))
                }
                <Button buttonText={addBankAccText} onButtonClick={onSubmitHandler} style={{ width: "100%", marginTop: " 20px" }} />
            </form>


            <style jsx>{`

                .pan-details__title{
                    font-weight: 700;
                    color: ${WHITE_MARBLE.LIGHT};
                    font-size: 1.5rem;
                }
                
                .pan-details__form{
                }

                .pan-details__form>:not(:last-child) {
                    margin-bottom:20px;
                }
            `}</style>
        </>
    )
}