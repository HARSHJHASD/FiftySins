/* eslint-disable import/extensions */
import Head from 'next/head';
import Image from 'next/image';
import Lottie from 'react-lottie';
import {
    ACTINIUM,
    AQUAMARINE,
    BLACK_STONE,
    SULPHER_RUBY,
    WHITE_MARBLE
} from '../core/constants/colors';
import {
    Heading4,
    Heading5
} from '../components/typography';
import Stepper from '../components/onboarding';

import bankVerification from '../public/anims/bank_account.json';
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
function Index() {
    const actionText: string = 'Loans Against Mutual Funds';
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bankVerification,
        renderSettings: {
            preserveAspectRatio: ''
        }
    };

    const usps = [
        {
            id: 0,
            text: '100% Digital'
        },
        {
            id: 1,
            text: 'Say no to CIBIL score'
        },
        {
            id: 2,
            text: 'ZERO foreclosure fee'
        },
        {
            id: 3,
            text: '1% interest rate per month'
        }
    ];
    return (
        <>
            <Head>
                <title>Login | 50Fin - Loans Against Securities</title>
                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="Login | 50Fin - Loans Against Securities"
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
                        <Image
                            alt="50Fin Logo"
                            src="/icons/logo_small.svg"
                            className="icon-logo"
                            width={260}
                            height={100}
                        />
                        <Heading4
                            className="heading-onboarding"
                            margin="auto"
                            textColor={WHITE_MARBLE.LIGHT}
                        >
                            {actionText}
                        </Heading4>
                        {usps.map((usp) => (
                            <div className="container-usp-item">
                                <Heading5 className='container-usp-sub-haeding' textColor={AQUAMARINE.S600}>
                                    {usp.text}
                                </Heading5>
                            </div>
                        ))}
                    </div>

                    <div  className="lottie-usps">
                       
                        <img src="./images/onboardingImg.svg"/>
                    </div>
                </div>
                <div className="container-form">
                    <div className="container-logo-tagline">
                    <Stepper />
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                   .container-main {
                        height: 100vh;
                        display: flex;
                        justify-content:space-between;
                        background-color: ${BLACK_STONE.EXTRA_LIGHT};
                    }
                    .container-usps{
                        display:flex;
                        align-items:center;
                        flex-direction:column;
                        justify-content:center;
                        padding: 1rem 1rem auto 5rem;
                        margin-right: 2rem;
                        width: 50%;
                        height: 100vh;
                    }
                    .container-form {
              display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem 1rem 0 5rem;
                        width: 50%;
                        background-color: ${SULPHER_RUBY.S1000};
                    }
                    .container-usp-items {
                        display: flex;
                        flex-direction: column;
                    }
                    .container-usp-item {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 23px;
                    }
                   
                    .container-logo-tagline {
                        grid-row: 1/2;
                        align-self: center;
                    }
                    .container-details-form {
                        width: 100%;
                    }
                    .container-proceed {
                        grid-row: 3/4;
                        align-self: end;
                        // margin-bottom: 48px;
                    }
                    .container-whatsapp-updates {
                        display: flex;
                        width: fit-content;
                        align-items: center;
                        margin: 0 auto 0;
                    }
                    img {
                        height: 12rem;
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
                        text-align: center;
                        font-size: 23px;
                        font-weight: 600 !important;
                        line-height: 28px;
                        margin-bottom: 30px !important;
                    }
                    .container-usp-sub-haeding{
                        font-size: 20px !important;
                        font-weight: 600 !important;
                        line-height: 28px !important;
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

export default Index;
