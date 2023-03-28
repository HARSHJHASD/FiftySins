import { Typography } from 'antd';
import Link from 'next/link';
import {
    AQUAMARINE,
    BLACK_STONE,
    SPESSARTITE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import dateOfBirthValidator from '../../utils/form-validators/profile-details-form/dateOfBirthValidator';
import nameValidator from '../../utils/form-validators/profile-details-form/nameValidator';
import phoneNumberValidator from '../../utils/form-validators/profile-details-form/phoneNumberValidator';
import { Body, Caption, Heading2, Heading4, Subtitle } from '../typography';
import Button from '../ui-components/button';
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
function UserDetails(props: StepperChildProps) {
    const { userInfo, setUserInfo } = props;
    const isFirstNameValidated = nameValidator(userInfo.firstName);
    const isLastNameValidated = nameValidator(userInfo.lastName);
    const isPhoneNumberValidated = phoneNumberValidator(userInfo.phoneNumber);
    const isDOBValidated = dateOfBirthValidator(userInfo.dateOfBirth);

    const handleOnChange = (event: any) => {
        const {
            target: { value, name }
        } = event;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <>
            <div className="container-personal-details">
                <Heading4
                    margin="0 auto 0"
                    className="container-personal-details-title"
                    textColor={SPESSARTITE.S1200}
                >
                    Sign Up
                </Heading4>
                <div className="container-personal-details-form">
                    <TextInputText
                        backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                        className="text-input-onboarding-first-name"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        hintText="First Name"
                        width="480px"
                        textAlignCenter={false}
                        required={false}
                        type="text"
                        labelText="First Name"
                        name="firstName"
                        onChange={handleOnChange}
                    />
                    {/* {props.isSubmit &&!isFirstNameValidated && (
                    <Subtitle
                    className="text-input-onboarding-first-name-error"
                    textColor={SPESSARTITE.S1300}
                    >
                    Please enter a valid First Name
                    </Subtitle>
                )} */}
                    <TextInputText
                        backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                        className="text-input-onboarding-last-name"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        hintText="Last Name"
                        width="480px"
                        textAlignCenter={false}
                        required={false}
                        type="text"
                        labelText="Last Name"
                        name="lastName"
                        onChange={handleOnChange}
                    />
                    {/* {props.isSubmit &&!isLastNameValidated && (
                    <Subtitle
                    className="text-input-onboarding-first-name-error"
                    textColor={SPESSARTITE.S1300}
                    >
                    Please enter a valid Last Name
                    </Subtitle>
                )} */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextInputText
                            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                            className="text-input-onboarding-password"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            hintText="Phone Number"
                            width="220px"
                            textAlignCenter={false}
                            maxlength={10}
                            required={false}
                            type="tel"
                            labelText="Phone Number"
                            name="phoneNumber"
                            onChange={handleOnChange}
                        />
                        {/* {props.isSubmit &&!isPhoneNumberValidated && (
                    <Subtitle
                    className="text-input-onboarding-first-name-error"
                    textColor={SPESSARTITE.S1300}
                    >
                    Please enter a valid Phone Number
                    </Subtitle>
                )} */}
                        <TextInputText
                            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                            className="text-input-onboarding-dob"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            hintText="dd/mm/yyyy"
                            width="220px"
                            textAlignCenter={false}
                            required={false}
                            type="text"
                            labelText="Date of Birth"
                            name="dateOfBirth"
                            onChange={handleOnChange}
                        />
                    </div>
                    {/* {props.isSubmit && !isDOBValidated&& (
                    <Subtitle
                    className="text-input-onboarding-first-name-error"
                        textColor={SPESSARTITE.S1300}
                    >
                        Please enter a valid DOB
                    </Subtitle>
                )} */}
                    <TextInputText
                        backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                        className="text-input-onboarding-referral-code"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        hintText="Partner Referral Code"
                        width="480px"
                        textAlignCenter={false}
                        type="text"
                        labelText="Partner Referral Code"
                        name="partnerReferralCode"
                        onChange={handleOnChange}
                        required={false}
                    />
                    <Typography
                        // color={SPESSARTITE.S1200}
                        className="container-personal-details-text"
                    >
                        Use a referral code if referred by a Mutual Fund
                        Distributor.
                    </Typography>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1rem'
                        }}
                    >
                        <Typography
                            // color={SPESSARTITE.S1200}
                            className="container-get-updates-on-whatsapp"
                        >
                            Get updates on WhatsApp
                        </Typography>
                        <img
                            src="./icons/whatsapp-without-background.svg"
                            height={55}
                            style={{
                               verticalAlign:"middle",
                               position: "relative",
                               right: "1rem",
                               bottom: "0.2rem"
                            }}
                        />
                    </div>
                    <ButtonWithIcon
                        backgroundColor={AQUAMARINE.S600}
                        buttonText="Submit"
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
                    <Body
                        className="help-text"
                        textColor={SPESSARTITE.S1200}
                        margin="auto"
                    >
                        <div className="help-text-main">
                            Already have an account? &nbsp;
                            <Link href="/" className="text-link">
                                Sign In
                            </Link>
                        </div>
                    </Body>
                </div>
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
                    .container-personal-details-title {
                        font-size: 33px !important;
                        font-weight: 800 !important;
                        line-height: 40px !important;
                    }
                    .help-text {
                        display: flex;
                        justify-content: space-between;
                        width: 300px !important;
                    }
                    .text-link {
                        color: ${AQUAMARINE.S600} !important;
                        text-decoration: underline;
                    }
                    .help-text-main {
                        color: ${SPESSARTITE.S1200};
                    }
                    .text-input-onboarding-first-name {
                        margin-bottom: 1.5rem;
                    }
                    .text-input-onboarding-last-name {
                        margin-bottom: 1.5rem;
                    }

                    .text-input-onboarding-password {
                        margin-bottom: 1.5rem;
                    }
                    .text-input-onboarding-referral-code {
                        margin-bottom: 1rem;
                    }
                    .container-personal-details-text {
                        color: ${SPESSARTITE.S1200};
                        display: flex;
                        justify-content: start;
                        margin-bottom: 1rem;
                    }
                    .container-get-updates-on-whatsapp {
                        color: ${SPESSARTITE.S1200};
                    }
                    .button-submit-personal-details-onboarding {
                        margin-bottom: 1.5rem;
                        display: flex;
                        justify-content: center;
                    }
                    .text-input-onboarding-first-name-error {
                        font-weight: 400 !important;
                        line-height: 14px !important;
                        margin: -10px 0px 0px 0px !important;
                    }
                `}
            </style>
        </>
    );
}

export default UserDetails;
