import { Typography } from 'antd';
import Link from 'next/link';
import {
    AQUAMARINE,
    BLACK_STONE,
    SPESSARTITE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import emailValidator from '../../utils/form-validators/profile-details-form/emailValidator';
import strongPasswordValidator from '../../utils/form-validators/profile-details-form/strongPasswordValidator';
import { Heading4, Subtitle } from '../typography';
import ButtonWithIcon from '../ui-components/button-with-icon';
import TextInputText from '../ui-components/text-input';
import { StepperChildProps } from './onboarding-types';

/**
 * This function is used as the User Details form on the Onboarding screen.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.19.0
 */
function UserCredentialDetails(props: StepperChildProps) {
    const { userInfo, setUserInfo } = props;
    const isEmailValidated = emailValidator(userInfo.email);
    const isPasswordValidated = strongPasswordValidator(userInfo.password);
    const handleOnChange = (event: any) => {
        const {
            target: { value, name }
        } = event;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className="container-personal-details">
            <Heading4 margin="0 auto 16px" textColor={SPESSARTITE.S1200}>
                Sign Up
            </Heading4>
            <div className="container-personal-details-form">
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-password"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    hintText="Email"
                    width="480px"
                    textAlignCenter={false}
                    required={false}
                    type="email"
                    labelText="Email ID"
                    name="email"
                    onChange={handleOnChange}
                />
                {props.isSubmit && !isEmailValidated && (
                    <Subtitle
                        className="text-input-onboarding-first-name-error"
                        textColor={SPESSARTITE.S1200}
                    >
                        Please enter a valid email ID
                    </Subtitle>
                )}
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-password"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    hintText="Password"
                    width="480px"
                    textAlignCenter={false}
                    required={false}
                    type="password"
                    labelText="Create password"
                    name="password"
                    onChange={handleOnChange}
                />
                {props.isSubmit && !isPasswordValidated && (
                    <Subtitle
                        className="text-input-onboarding-first-name-error"
                        textColor={SPESSARTITE.S1200}
                    >
                        Passwords must contain at least one uppercase letter,
                        one lowercase letter, one number, and one special
                        character.
                    </Subtitle>
                )}
                <TextInputText
                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                    className="text-input-onboarding-password"
                    foregroundColor={WHITE_MARBLE.LIGHT}
                    hintText="Confirm Password"
                    width="480px"
                    textAlignCenter={false}
                    required={false}
                    type="password"
                    labelText="Confirm password"
                    name="confirmPassword"
                    onChange={handleOnChange}
                />

  <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '2rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <Typography
                            // color={SPESSARTITE.S1200}
                            className="container-terms-and-conditions"
                        >
                           I agree to the  <Link href="/terms-and-conditions" className="text-link">
                                    Terms and Conditions
                                </Link>
                        </Typography>
                       
                        </div>

                <ButtonWithIcon
                    backgroundColor={AQUAMARINE.S600}
                    buttonText="Confirm"
                    buttonType="PRIMARY"
                    className="button-submit-personal-details-onboarding"
                    foregroundColor={BLACK_STONE.EXTRA_DARK}
                    iconAltText="Check"
                    iconURL="/icons/check-circle-black-stone.svg"
                    iconHeight={24}
                    iconWidth={24}
                    onButtonClick={props.submitPerformAction}
                    width="180px"
                />
            </div>
            <style jsx>
                {`
                    .container-personal-details-form {
                         display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    .container-personal-details {
                        height: 80vh;
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
            <style jsx global>
                {`
                  .text-link {
                        color: ${AQUAMARINE.S600} !important;
                        text-decoration: underline !important;
                    }
                    .text-input-onboarding-password {
                        margin-bottom: 1.5rem;
                    }
                    .button-submit-personal-details-onboarding {
                        margin-bottom: 1.5rem;
                        display: flex;
                        justify-content: center;
                    }
                     .container-terms-and-conditions {
                        color: ${SPESSARTITE.S1200};
                    }
                `}
            </style>
        </div>
    );
}

export default UserCredentialDetails;
