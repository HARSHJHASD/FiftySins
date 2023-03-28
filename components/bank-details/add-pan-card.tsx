import { Col } from 'antd'
import React, { useState } from 'react'
import { BLACK_STONE, SULPHER_RUBY, WHITE_MARBLE } from '../../core/constants/colors'
import Button from '../ui-components/button'
import OTPBoxes from '../ui-components/otp-boxes'
import TextInputText from '../ui-components/text-input'
import validator from 'validator';
import CustomModal from '../ui-components/modal'
import OtpModal from '../ui-components/otp-modal'

type Props = {}

export default function AddPANCard({ }: Props) {

    const initialTextFields = [{
        label: "PAN Holder Name",
        error: "",
        value: "",
        type: "alphanumeric"
    }, {
        label: "PAN Card Number",
        error: "",
        value: "",
        type: "alphanumeric"
    }, {
        label: "Date of Birth",
        error: "",
        value: "",
        type: "date"
    }]

    const [textFields, setTextFields] = useState<Array<{ label: string, error: string, value: string | number | readonly string[], type: string }>>(initialTextFields)


    const onSubmitHandler = () => {
        setTextFields(prevState => {
            return prevState.map(field => {
                field.error = "";

                if (!field.value) {
                    field.error = `Please Enter ${field.label}`
                    return field;
                }

                if (field.type === "date" && !validator.isDate(`${field.value}`)) {
                    field.error = `Please Enter valid date only`
                }

                return field;
            })
        })
    }

    return (
        <>
            <p className='pan-details__title'>Add PAN Card Details </p>
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
                <Button buttonText='Verify' onButtonClick={onSubmitHandler} style={{ width: "100%", marginTop: " 20px" }} />
            </form>

            {/* <OtpModal
                isOpen={true}
                onResendClick={() => { }}
                onVerifyClick={() => { }}
            /> */}


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