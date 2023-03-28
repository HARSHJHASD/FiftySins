import Head from 'next/head';
import Lottie from 'react-lottie';

import {
    AQUAMARINE,
    BLACK_STONE,
    WHITE_MARBLE
} from '../../core/constants/colors';
import { Heading5 } from '../../components/typography';
import Header from '../../components/header/header';

// eslint-disable-next-line import/extensions
import availLoan from '../../public/anims/avail-loan-loading.json';

/**
 * This function is used as the Avail Loan - Loading screen for the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.17.0
 */
function AvailLoanLoading() {
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
                    Avail Loan - Loading | 50Fin - Loans Against Securities
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
                <p className="heading-5">5</p>
                <div className="container-lottie">
                    <Lottie
                        options={defaultOptions}
                        className="lottie-usps"
                        width="480px"
                        height="480px"
                    />
                </div>
            </div>
            <Heading5
                className="heading-avail-loan-loading"
                margin="auto"
                textColor={WHITE_MARBLE.LIGHT}
            >
                Please wait while we process your loan application. This may
                take a moment.
            </Heading5>
            <style jsx>
                {`
                    .container-main {
                        width: 480px;
                        height: 480px;
                        margin: 80px auto 0;
                    }
                    .heading-5 {
                        position: absolute;
                        margin: 0;
                        font-family: 'Helvetica', sans-serif;
                        font-size: 400px;
                        color: ${AQUAMARINE.S700};
                    }
                    .container-lottie {
                        position: absolute;
                        margin-top: 40px;
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
                    .heading-avail-loan-loading {
                        width: 640px !important;
                        text-align: center;
                    }
                `}
            </style>
        </>
    );
}

export default AvailLoanLoading;
