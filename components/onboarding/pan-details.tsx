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
import TextInputText from '../ui-components/text-input';
import Button from '../ui-components/button';

/**
 * This function is used as the PAN Details form on the Onboarding screen.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.19.0
 */
function PANDetails(props: StepperChildProps) {
    const { setPanNumber } = props;

    const handleChange = (event) => {
        setPanNumber(event.target.value);
    };

    return (
        <div className="container-pan-details">
            <div>
                <Heading4 margin="0 auto 16px" textColor={SAPPHIRE.S100}>
                    Verify PAN Card Details
                </Heading4>
                <Caption margin="0 auto 16px" textColor={SAPPHIRE.S100}>
                    Please enter the following details to get started on your
                    loan process
                </Caption>
            </div>

            <div className='container-pan-holder-details'>
                <Heading6 textColor={SAPPHIRE.S100} margin="0 auto 16px">
                    Enter PAN Holder details
                </Heading6>
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-pan-number"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    hintText="Enter your 10 digit PAN number."
                    maxlength={10}
                    width="480px"
                    textAlignCenter
                    required={false}
                    type="text"
                    labelText="PAN Number"
                    onChange={handleChange}
                />
            </div>

            <div className="container-pan-details-buttons">
                <ButtonWithIcon
                    backgroundColor={AQUAMARINE.S600}
                    buttonText="Confirm"
                    buttonType="PRIMARY"
                    className="button-submit-pan-details-onboarding"
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

            <style jsx>
                {`
                .container-pan-holder-details{
                    margin-top: 3rem;
                    margin-bottom: -1rem;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                }
                    .container-pan-details {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .container-pan-details-buttons {
                        margin-top: 3rem;
                        width: 520px;
                        line-height: 5;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .text-input-onboarding-pan-number {
                        margin-bottom: 3rem;
                    }
                    .button-skip-pan-details-onboarding {
                        margin-bottom: 1.5rem;
                        display: flex;
                        justify-content: center;
                    }
                    .button-submit-pan-details-onboarding {
                        margin-bottom: 1.5rem;
                        display: flex;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    );
}

export default PANDetails;
