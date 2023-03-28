import Head from 'next/head';
import Router from 'next/router';
import Lottie from 'react-lottie';

import {
    AQUAMARINE,
    BLACK_STONE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Heading4, Heading5 } from '../../components/typography';
import ButtonWithIcon from '../../components/ui-components/button-with-icon';
import Header from '../../components/header/header';

// eslint-disable-next-line import/extensions
import availLoan from '../../public/anims/avail-loan-successful.json';

/**
 * This function is used as the Avail Loan - Successful screen on the UI.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.15.0
 */
function AvailLoanSuccessful() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: availLoan,
        renderSettings: {
            preserveAspectRatio: ''
        }
    };

    return (
        <>
            <Head>
                <title>
                    Avail Loan - Successful | 50Fin - Loans Against Securities
                </title>
                {/* Primary Meta Tags */}
                <meta
                    name="title"
                    content="50Fin - Take loan against securities, equities, mutual funds."
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
                    content="50Fin - Take loan against securities, equities, mutual funds."
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
                    content="50Fin - Take loan against securities, equities, mutual funds."
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
            <Header
                portfolioValue="4,50,000.00"
                profilePicture="/images/aayush.jpeg"
            />
            <div className="container-main">
                <div className="container-text">
                    <Heading4 className="" textColor={AQUAMARINE.S200}>
                        Congratulations! Your loan has been approved.
                    </Heading4>
                    <Heading5
                        className=""
                        margin="16px 0 0 0"
                        textColor={WHITE_MARBLE.LIGHT}
                    >
                        Your requested loan amount will be transferred to your
                        linked bank account within 2 working hours.
                    </Heading5>
                    <ButtonWithIcon
                        backgroundColor={AQUAMARINE.S600}
                        buttonText="Done"
                        buttonType="PRIMARY"
                        className="button-avail-loan-done"
                        foregroundColor={BLACK_STONE.EXTRA_DARK}
                        iconAltText="Check"
                        iconHeight={24}
                        iconWidth={24}
                        iconURL="/icons/check-circle-black-stone-extra-dark.svg"
                        onButtonClick={() => {
                            Router.push('/dashboard');
                        }}
                        width="200px"
                    />
                </div>
                <div className="container-lottie">
                    <Lottie
                        options={defaultOptions}
                        className="lottie-usps"
                        width="480px"
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .container-main {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        align-items: center;
                        margin: 160px 80px 0;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        height: 100vh;
                        background-color: ${BLACK_STONE.EXTRA_DARK};
                    }
                    .button-avail-loan-done {
                        margin-top: 80px;
                    }
                `}
            </style>
        </>
    );
}

export default AvailLoanSuccessful;
