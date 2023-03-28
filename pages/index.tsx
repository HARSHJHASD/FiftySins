import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Image from 'next/image';
import Lottie from 'react-lottie';

import {
    AQUAMARINE,
    SAPPHIRE,
    SPESSARTITE,
    WHITE_MARBLE,
    BLACK_STONE,
    SULPHER_RUBY
} from '../core/constants/colors';
import { Body, Heading4, Heading5, Heading6 } from '../components/typography';
import ButtonWithIcon from '../components/ui-components/button-with-icon';
// import Checkbox from '../components/ui-components/checkbox';
import TextInput from '../components/ui-components/text-input';
import ErrorAdBlocker from '../components/error-ad-blocker';
import Loading from '../components/ui-components/loading';

import useGlobalStore from '../store/global';

// eslint-disable-next-line import/extensions
import login from '../public/anims/login.json';
import Button from '../components/ui-components/button';

/**
 * This function is used as the "Home" page for the website.
 *
 * @version 0.2.0
 * @author Aayush Goyal
 * @created 2023-02-23
 * @modifier Aayush Goyal
 * @modified 2023-03-05
 * @since 0.1.0
 */
function Index() {
    const actionText: string = 'Loans Against Mutual Funds';
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const { isLoading, userSignIn, fireBaseUser } = useGlobalStore(
        (state) => state
    );

    useEffect(() => {
        if (fireBaseUser?.uid) {
            Router.push('/dashboard');
        }
    }, [fireBaseUser]);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: login,
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

    const onChange = (event: any) => {
        const {
            target: { value, name }
        } = event;
        setLoginData({ ...loginData, [name]: value });
    };
    const signInUser = () => {
        const { email, password } = loginData;
        userSignIn({ email, password });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div id="recaptcha-container" />
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
                                <Heading5
                                    className="container-usp-sub-haeding"
                                    textColor={AQUAMARINE.S600}
                                >
                                    {usp.text}
                                </Heading5>
                            </div>
                        ))}
                    </div>

                    <div className="lottie-usps">
                        {/* <Lottie
                            options={defaultOptions}
                            className="lottie-usps"
                            width="440px"
                            height="342.22px"
                        /> */}
                        <img src="./images/onboardingImg.svg" />
                    </div>
                </div>
                <div className="container-form">
                    {/* <div className="container-logo-tagline">
                       <Image
                            alt="50Fin Logo"
                            src="/icons/logo_small.svg"
                            className="icon-logo"
                            width={124}
                            height={57}
                        />
                        <Heading5 margin="auto" textColor={SAPPHIRE.S300}>
                            Loans Against Mutual Funds 💰
                        </Heading5>
                    </div> */}
                    <div className="container-details-form">
                        <Heading4
                            className="text-hey-there"
                            textColor={SPESSARTITE.S1200}
                            margin="0 auto 1rem"
                        >
                            Sign In
                        </Heading4>
                        {/* <Heading6
                            className="text-enter-phone-number"
                            textColor={WHITE_MARBLE.LIGHT}
                            margin="24px auto 8px"
                        >
                            Please sign in to your account.
                        </Heading6> */}
                        {/* Form */}
                        <TextInput
                            onChange={onChange}
                            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                            className="text-input-login-mobile-number"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            hintText="Enter your email address."
                            width="480px"
                            // textAlignCenter
                            // required
                            type="email"
                            labelText="Email ID"
                            name="email"
                            required={false}
                        />
                        <TextInput
                            onChange={onChange}
                            backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                            className="text-input-login-mobile-number"
                            foregroundColor={WHITE_MARBLE.LIGHT}
                            hintText="Enter your password"
                            width="480px"
                            // textAlignCenter
                            // required
                            type="password"
                            labelText="Password"
                            name="password"
                            required={false}
                        />
                        <div className="text-link-password">
                            Forgot Password?
                        </div>
                        {/* login button  */}
                        <Button
                            className="button-get-started"
                            backgroundColor={AQUAMARINE.S600}
                            buttonText="Sign In"
                            buttonType="PRIMARY"
                            foregroundColor={BLACK_STONE.EXTRA_DARK}
                            width="200px"
                            height="40px"
                            onButtonClick={() => signInUser()}
                        />
                        <Body
                            className="help-text"
                            textColor={SPESSARTITE.S1200}
                            margin="auto"
                        >
                            <div className="help-text-main">
                                Don't have an account yet? &nbsp;
                                <Link href="/sign-up" className="text-link">
                                    Sign Up
                                </Link>
                            </div>
                        </Body>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .container-main {
                        height: 100vh;
                        display: flex;
                        justify-content: space-between;
                        background-color: ${BLACK_STONE.EXTRA_LIGHT};
                    }
                    .container-usps {
                        display: flex;
                        align-items: center;
                        flex-direction: column;
                        justify-content: center;
                        padding: 1rem 1rem auto 5rem;
                        margin-right: 2rem;
                        width: 50%;
                        height: 100vh;
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
                    .container-form {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem 1rem 0 5rem;
                        width: 50%;
                        background-color: ${SULPHER_RUBY.S1000};
                    }
                    .container-details-form {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        height: 60%;
                        padding: 0 3rem;
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
                    .text-link {
                        color: ${AQUAMARINE.S600};
                        text-decoration: underline;
                    }
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
                    .container-usp-sub-haeding {
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
                    .text-link-password {
                        color: ${AQUAMARINE.S600};
                        text-decoration: underline;
                        display: flex;
                        justify-content: center;
                    }
                    .text-usp-item {
                        width: fit-content;
                        text-align: center;
                    }
                    .help {
                        width: 480px !important;
                        text-align: center;
                    }
                    .help-text {
                        display: flex;
                        justify-content: space-between;
                        width: 300px !important;
                    }
                    .help-text-main {
                        color: ${SPESSARTITE.S1200};
                    }
                    .icon-usp {
                        margin-right: 12px;
                        width: 32px;
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
