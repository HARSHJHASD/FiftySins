import {
    AQUAMARINE,
    BLACK_STONE,
    SAPPHIRE,
    SPESSARTITE,
    SULPHER_RUBY,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Caption, Heading4, Heading6 } from '../typography';
import { StepperChildProps } from './onboarding-types';
import ButtonWithIcon from '../ui-components/button-with-icon';
import Dropdown from '../ui-components/dropdown';
import TextInputText from '../ui-components/text-input';
import Button from '../ui-components/button';

/**
 * This function is used as the Bank Details form on the Onboarding screen.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier Aayush Goyal
 * @modified 2023-03-08
 * @since 0.19.0
 */
function BankDetails(props: StepperChildProps) {
    const { bankInfo, setBankInfo } = props;

    const handleOnChange = (event: any) => {
        const {
            target: { value, name }
        } = event;
        setBankInfo({ ...bankInfo, [name]: value });
    };

    const dropdownItems = [
        {
            id: 0,
            text: 'Current'
        },
        {
            id: 1,
            text: 'Savings'
        }
    ];

    return (
        <div className="container-bank-details">
            <div>
                <Heading4 margin="0 auto 16px" textColor={SPESSARTITE.S1200}>
                    Enter Bank Details
                </Heading4>
                <Caption margin="0 auto 16px" textColor={SAPPHIRE.S100}>
                    Please enter the following details to get started on your
                    loan process
                </Caption>
            </div>
            <Heading6 textColor={SAPPHIRE.S100} margin="0 auto 16px">
                Enter Bank Details
            </Heading6>

            <div className="container-bank-details-form">
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-bank-name"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    hintText="Bank Name"
                    width="480px"
                    textAlignCenter={false}
                    required={false}
                    type="text"
                    labelText="Bank Name"
                    name="bankName"
                    onChange={handleOnChange}
                />
                <Dropdown
                    className="dropdown-bank-type"
                    items={dropdownItems}
                    labelText="Bank Type"
                    width="480px"
                    itemList={bankInfo}
                    setItemList={setBankInfo}
                />
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-account-number"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    width="480px"
                    textAlignCenter={false}
                    required={false}
                    type="text"
                    labelText="Account Number"
                    name="accountNumber"
                    onChange={handleOnChange}
                />
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-ifsc"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    width="480px"
                    textAlignCenter={false}
                    required={false}
                    type="text"
                    labelText="IFSC Code"
                    name="ifscCode"
                    onChange={handleOnChange}
                />
                <div className="container-bank-details-buttons">
                    <ButtonWithIcon
                        backgroundColor={AQUAMARINE.S600}
                        buttonText="Confirm"
                        buttonType="PRIMARY"
                        className="button-submit-bank-details-onboarding"
                        foregroundColor={BLACK_STONE.EXTRA_DARK}
                        iconAltText="Check"
                        iconURL="/icons/check-circle-black-stone-extra-dark.svg"
                        iconHeight={24}
                        iconWidth={24}
                        onButtonClick={props.submitPerformAction}
                        width="180px"
                    />
                    <Button
                        backgroundColor={SULPHER_RUBY.S1000}
                        buttonText="Skip"
                        buttonType="SECONDARY"
                        className="button-skip-pan-details-onboarding"
                        foregroundColor={SPESSARTITE.S1200}
                        onButtonClick={props.skipPerformAction}
                        width="100px"
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .container-bank-details-form {
                        width: 480px;
                    }
                    .container-bank-details-buttons{
                        margin-top: 2rem;
                        width: 480px;
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .text-input-onboarding-bank-name {
                        margin-bottom: 1rem;
                    }
                    .text-input-onboarding-account-number {
                        margin-bottom: 1rem;
                    }
                    .text-input-onboarding-ifsc {
                        margin-bottom: 1rem;
                    }
                    .dropdown-bank-type {
                        margin-bottom: 1rem;
                    }
                    .button-skip-bank-details-onboarding {
                        margin-bottom: 1rem;
                    }
                    .button-submit-bank-details-onboarding {
                        margin-bottom: 1rem;
                    }
                `}
            </style>
        </div>
    );
}

export default BankDetails;
