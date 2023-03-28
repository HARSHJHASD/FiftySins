import Head from 'next/head';
import Lottie from 'react-lottie';

import { BLACK_STONE, WHITE_MARBLE } from '../core/constants/colors';

// eslint-disable-next-line import/extensions
import errorLottie from '../public/anims/404.json';
// eslint-disable-next-line import/extensions
import errorRupeeLottie from '../public/anims/404-rupee-coin.json';
import { Body, Heading1, Heading6 } from '../components/typography';

/**
 * This function is used as the 404 - Error Page screen for the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.16.0
 */
function AvailLoanLoading() {
    const errorOptions = {
        loop: true,
        autoplay: true,
        animationData: errorLottie,
        renderSettings: {
            preserveAspectRatio: ''
        }
    };
    const errorRupeeOptions = {
        loop: true,
        autoplay: true,
        animationData: errorRupeeLottie,
        renderSettings: {
            preserveAspectRatio: ''
        }
    };

    return (
        <>
            <Head>
                <title>
                    404 Error - Loading | 50Fin - Loans Against Securities
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
            <div className="container-main">
                <div className="container-text">
                    <div className="container-text-404">
                        <Heading1 textColor={WHITE_MARBLE.LIGHT}>4</Heading1>
                        <div className="container-div-lottie">
                            <Lottie
                                options={errorRupeeOptions}
                                className="lottie-404-rupee"
                                width="120px"
                            />
                        </div>
                        <Heading1 textColor={WHITE_MARBLE.LIGHT}>4</Heading1>
                    </div>
                    <Heading6
                        className="heading-error"
                        margin="auto"
                        textColor={WHITE_MARBLE.LIGHT}
                    >
                        Oops, it looks like we can&apos;t find what you&apos;re
                        looking for.
                    </Heading6>
                    <Body
                        className="subheading-error"
                        margin="16px auto"
                        textColor={WHITE_MARBLE.LIGHT}
                    >
                        Use the top navigation bar to navigate the website.
                    </Body>
                </div>
                <div className="container-lottie">
                    <Lottie
                        options={errorOptions}
                        className="lottie-usps"
                        width="360px"
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .container-main {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        align-items: center;
                        margin: 200px 80px 0;
                    }
                    .container-text-404 {
                        width: fit-content;
                        display: flex;
                        align-items: center;
                        margin: auto;
                    }
                    .container-div-lottie {
                        margin: 0;
                    }
                    .lottie-404-rupee {
                        margin: 0;
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
                    .heading-error {
                        text-align: center;
                    }
                    .subheading-error {
                        text-align: center;
                    }
                `}
            </style>
        </>
    );
}

export default AvailLoanLoading;
