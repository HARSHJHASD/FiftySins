/* eslint-disable import/extensions */
import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';

import {
    ACTINIUM,
    BLACK_STONE,
    SAPPHIRE,
    WHITE_MARBLE
} from '../core/constants/colors';
import { Heading3, Heading5 } from '../components/typography';
import Stepper from '../components/onboarding';

import bankVerification from '../public/anims/bank_account.json';
// import panVerification from '../public/anims/pan_verification.json';
// import userVerification from '../public/anims/user_details.json';

/**
 * This function is used as the "Onboarding" page for the website.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.20.0
 */
function Onboarding() {
    const actionText: string = 'We ask only a few details to get you started.';
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bankVerification,
        renderSettings: {
            preserveAspectRatio: ''
        }
    };

    // const defaultOptions = {};
    // if (activeStepNumber === 0) {
    // actionText = 'We ask only a few details to get you started.';
    // defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: bankVerification,
    //     renderSettings: {
    //         preserveAspectRatio: ''
    //     }
    // };
    // } else if (activeStepNumber === 1) {
    // actionText = 'Link your PAN card with 50Fin for easy loan process.';
    // defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: panVerification,
    //     renderSettings: {
    //         preserveAspectRatio: ''
    //     }
    // };
    // } else {
    // actionText = 'Link your bank account with 50Fin for easy loan process.';
    // defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: userVerification,
    //     renderSettings: {
    //         preserveAspectRatio: ''
    //     }
    // };
    // }

    return (
        <>
            <Head>
                <title>Login | 50Fin - Loans Against Securities</title>
                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="Onboarding | 50Fin - Loans Against Securities"
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
                    content="Login | 50Fin - Loans Against Securities"
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
                    content="Login | 50Fin - Loans Against Securities"
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
                <div className="container-usps">
                    <div className="container-usp-items">
                        <Heading3
                            className="heading-onboarding"
                            margin="auto"
                            textColor={WHITE_MARBLE.LIGHT}
                        >
                            {actionText}
                        </Heading3>
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
                        <Image
                            alt="50Fin Logo"
                            src="/icons/logo_small.svg"
                            className="icon-logo"
                            width={124}
                            height={57}
                        />
                        <Heading5 margin="auto" textColor={SAPPHIRE.S300}>
                            Loans Against Shares and Mutual Funds 💰
                        </Heading5>
                    </div>
                    <Stepper />
                </div>
            </div>
            <style jsx>
                {`
                    .container-main {
                        height: 100vh;
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        background-color: ${BLACK_STONE.EXTRA_LIGHT};
                    }
                    .container-usps {
                        display: grid;
                        grid-template-rows: repeat(2, 1fr);
                    }
                    .container-form {
                        display: grid;
                        background-color: ${BLACK_STONE.EXTRA_DARK};
                        grid-template-rows: 1fr 2fr;
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
                    }
                    .container-details-form {
                        grid-row: 2/3;
                    }
                    .container-proceed {
                        grid-row: 3/4;
                        align-self: end;
                        margin-bottom: 48px;
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
                    .icon-usp {
                        margin-right: 12px;
                        width: 32px;
                    }

                    .icon-whatsapp {
                        margin: auto 4px;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        height: 100vh;
                    }
                    .heading-onboarding {
                        width: 520px !important;
                        text-align: center;
                    }
                    .button-get-started {
                        display: block;
                        margin: 24px auto;
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
                    .icon-logo {
                        display: block;
                        margin: 0 auto 16px;
                    }
                `}
            </style>
        </>
    );
}

export default Onboarding;
