import Head from 'next/head';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import {
    ACTINIUM,
    AQUAMARINE,
    SAPPHIRE,
    SPESSARTITE,
    WHITE_MARBLE,
    BLACK_STONE,
    SULPHER_RUBY,
    STONE_LAP,   
} from '../core/constants/colors';
import { Heading4, Heading5, Heading6, Subtitle } from '../components/typography';
import OTPBoxes from '../components/ui-components/otp-boxes';
import ButtonWithIcon from '../components/ui-components/button-with-icon';
import useGlobalStore from '../store/global';
// eslint-disable-next-line import/extensions
import otpLottie from '../public/anims/otp.json';
import Image from 'next/image';
import Checkbox from '../components/ui-components/checkbox';
import Button from '../components/ui-components/button';

/**
 * This function is used as the "OTP Verification" page for the website.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-05
 * @modifier
 * @modified
 * @since 0.4.0
 */
function OTPVerification() {
    const [otp, setOTP] = useState('');
    const { submitOtp, isOtpSubmissionSuccess } = useGlobalStore(
        (state) => state
    );

    useEffect(() => {
        if (isOtpSubmissionSuccess) {
            // Router.push('/profile');
        }
    }, [isOtpSubmissionSuccess]);

    const onChange = (value: string) => setOTP(value);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: otpLottie,
        renderSettings: {
            preserveAspectRatio: ''        }
    };

    const usps = [
        {
            id: 0,
            iconAltText: 'Cross over Clipboard',
            iconSrc: '/icons/clock-check-aquamarine-s300.svg',
            text: 'Get money in under 2 hours.'
        },

        {
            id: 1,
            iconAltText: 'Percent Sign',
            iconSrc: '/icons/star-07-aquamarine-s300.svg',
            text: 'Use your existing brokers.'
        },
        {
            id: 2,
            iconAltText: 'Cross over Credit Card',
            iconSrc: '/icons/x-square-aquamarine-s300.svg',
            text: 'No CIBIL score.'
        }
    ];

    const signInUser = () => {
        submitOtp(otp);
    };
    
     const options = [ 
        { id: 1, item: <label>Option 1</label> },
      { id: 2, item: <label>Option 2</label> }, 
      { id: 3, item: <label>Option 3</label> } ];

    return (
        <>
            <div id="recaptcha-container" />
            <Head>
                <title>
                    OTP Verification | 50Fin - Loans Against Securities
                </title>
                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="OTP Verification | 50Fin - Loans Against Securities"
                />
                <meta
                    name="description"
                    content="We are a credit platform with a NIFTY50 terminal that rewards value investors with low interest credit products. Being India's first mobile LAS platform, Now you can experience the power of you portfolio as a value investor, you get loans on your NIFTY50 stocks and top Mutual Funds at just 1% per month."
                />
                {/* Open Graph / Facebook */}

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://50fin.in" />
                <meta
                    property="og:title"
                    content="OTP Verification | 50Fin - Loans Against Securities"
                />
                <meta
                    property="og:description"
                    content="We are a credit platform with a NIFTY50 terminal that rewards value investors with low interest credit products. Being India's first mobile LAS platform, Now you can experience the power of you portfolio as a value investor, you get loans on your NIFTY50 stocks and top Mutual Funds at just 1% per month."
                />
                <meta
                    property="og:image"
                    content="https://storage.googleapis.com/50fin-public-files/meta-image.png"
                />
                {/* Twitter  */}

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://50fin.in" />
                <meta
                    property="twitter:title"
                    content="OTP Verification | 50Fin - Loans Against Securities"
                />
                <meta
                    property="twitter:description"
                    content="We are a credit platform with a NIFTY50 terminal that rewards value investors with low interest credit products. Being India's first mobile LAS platform, Now you can experience the power of you portfolio as a value investor, you get loans on your NIFTY50 stocks and top Mutual Funds at just 1% per month."
                />
                <meta
                    property="twitter:image"
                    content="https://storage.googleapis.com/50fin-public-files/meta-image.png"
                />
            </Head>
            <div className="container-main">
                <Checkbox checked={true} className={'ac'} options={options}/>
                <div className="container-usps">
                    <div className="container-usp-items">
                        {usps.map((usp) => (
                            <div className="container-usp-item" key={usp.id}>
                                <Image
                                    alt={usp.iconAltText}
                                    className="icon-usp"
                                    src={usp.iconSrc}
                                    width={32}
                                    height={32}
                                />
                                <Heading5 textColor={AQUAMARINE.S300}>
                                    {usp.text}
                                </Heading5>
                            </div>
                        ))}
                        <Heading6
                            textColor={WHITE_MARBLE.LIGHT}
                            margin="12px auto 32px"
                            className="text-usp-item"
                        >
                            All of this and much more.
                        </Heading6>
                    </div>
                    <Lottie
                        options={defaultOptions}
                        className="lottie-usps"
                        width="440px"
                        height="342.22px"
                    />
                </div>
                <div className="container-form">
                    <div className="container-logo-tagline">
                        <Heading6 margin="auto" textColor={AQUAMARINE.S600}>
                        To pledge you mutual funds from  KFintech account please enter the 6 digit OTP sent to your phone number

                        </Heading6>
                    </div>
                    <div className="container-details-form">
                        <OTPBoxes
                            backgroundColor={SULPHER_RUBY.S700}
                            foregroundColor={WHITE_MARBLE.LIGHT}

                            value={otp}

                            valueLength={6}

                            onChange={onChange}

                        />
                    </div>
                    <div className="container-proceed">
                        {/* Get Updates on WhatsApp */}

                        <Button
                            className="button-get-started"
                            backgroundColor={AQUAMARINE.S600}

                            buttonText="Confirm"
                            buttonType="SECONDARY"
                            foregroundColor={BLACK_STONE.EXTRA_DARK}

                            // iconAltText="Login"
                            // iconURL="/icons/check-circle-black-stone-extra-dark.svg"
                            // iconHeight={32}
                            // iconWidth={32}
                            width="160px"
                            onButtonClick={() => signInUser()}                        />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .container-main {
                        height: 300px;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .container-usps {
                        display: grid;
                        grid-template-rows: repeat(2, 1fr);
                    }
                    .container-form {
                        display: grid;
                        justify-content: center;
                        border-radius: 1rem;
                        width: 36rem;
                        background-color:${STONE_LAP.S600};
                        grid-template-rows: repeat(2, 1fr);
                    }
                    .container-usp-items {
                        grid-row: 1/2;
                        justify-items: center;
                        align-self: end;
                        margin-bottom: 48px;
                    }
                    .container-usp-item {
                        display: flex;
                        width: fit-content;
                        margin: 12px auto;
                        align-item: center;
                    }
                    .container-logo-tagline {
                        grid-row: 1/2;
                        align-self: center;
                        text-align: center;
                        width: 28rem;
                        margin-top: 3rem;
                    }
                    .container-details-form {
                        grid-row: 2/3;
                        align-self: center;
                    }
                    .container-proceed {
                        grid-row: 3/4;
                        align-self: end;
                        margin-bottom: 48px;
                        text-align: center;
                    }
                    .container-whatsapp-updates {
                        display: flex;
                        width: fit-content;
                        align-items: center;
                        margin: 0 auto 0;
                    }
                    .lottie-usps {
                        grid-row: 2/3;
                        align-self: start;
                    }
                `}

            </style>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        height: 100vh;
                    }
                    .button-get-started {
                        display: block;
                        margin: 10px auto;
                        width: fit-content;
                    }
                    .checkbox-whatsapp {
                        margin-right: 8px;
                    }
                    .text-input-login-mobile-number {
                        margin: auto;
                    }
                    .text-link {
                        color: ${ACTINIUM.FOR_BLACK_STONE};
                        text-decoration: underline;
                    }
                    .text-usp-item {
                        width: fit-content;
                        text-align: center;
                    }
                    .text-tncs {
                        width: 480px !important;
                        text-align: center;
                    }
                    .icon-usp {
                        margin-right: 12px;
                        width: 32px;
                    }
                    .icon-logo {
                        display: block;
                        margin: 0 auto 16px;
                    }
                    .icon-whatsapp {
                        margin: auto 4px;
                    }
                `}

            </style>
        </>
    );

}

export default OTPVerification;