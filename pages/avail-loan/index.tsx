import { useEffect } from 'react';
import Head from 'next/head';

import { AQUAMARINE, BLACK_STONE } from '../../core/constants/colors';
import { Heading3 } from '../../components/typography';
import BankDetails from '../../components/avail-loan/bank-details/index';
import PersonalDetails from '../../components/avail-loan/personal-details';
import Header from '../../components/header/header';
import PledgefolioTable from '../../components/tables/pledgefolio-table/pledgefolio-table';
// import RepaymentTimelineTable from '../../components/tables/repayment-timelines-table';
import ProtectedRoute from '../../components/protected-route';
// import { PledgefolioItem } from '../../components/tables/table-types';

import Loading from './loading';

import useGlobalStore from '../../store/global';
import useProfileStore from '../../store/profile';
import usePortfolioStore from '../../store/portfolio';
import useBankStore from '../../store/bank';

/**
 * This function is used as the Avail Loan screen on the web app.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier Aayush Goyal
 * @modified 2023-03-14
 * @since 0.14.0
 */
function AvailLoan() {
    const { fireBaseUser, isLoading: isGlobalContainerLoading } =
        useGlobalStore((state) => state);
    // const [pledgeFolioItems, setPledgeFolioItems] =
    //     useState<PledgefolioItem[]>();

    const {
        isLoading: isProfileContainerLoading,
        fetchUser,
        fiftyFinUser
    } = useProfileStore((state) => state);
    const { fetchBankAccounts } = useBankStore((state) => state);
    const {
        isLoading: isPortfolioContainerLoading,
        portfolio,
        otpValidationResponse,
        pledgeFolioItems,
        setPledgeFolioItems
    } = usePortfolioStore((state) => state);

    useEffect(() => {
        if (fireBaseUser && !fiftyFinUser) {
            fetchUser({ idType: 'email', id: fireBaseUser?.email });
        }
    }, [fireBaseUser]);

    useEffect(() => {
        if (fiftyFinUser) {
            fetchBankAccounts({ userId: fiftyFinUser.id });
        }
    }, [fiftyFinUser]);

    if (
        isGlobalContainerLoading ||
        isPortfolioContainerLoading ||
        isProfileContainerLoading
    ) {
        return <Loading />;
    }

    return (
        <ProtectedRoute>
            <Head>
                <title>Avail Loan | 50Fin - Loans Against Securities</title>
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
                portfolioValue={
                    portfolio?.TOTAL_AMOUNTS?.total_portfolio_value.toString() ??
                    '-'
                }
                profilePicture="/images/aayush.jpeg"
            />
            <div className="container-main">
                {/* Review Details */}
                <div className="container-review-details">
                    <Heading3
                        className="heading-review-details"
                        margin="0 0 24px 0"
                        textColor={AQUAMARINE.S300}
                    >
                        Review Your Details
                    </Heading3>
                    <div className="container-personal-info">
                        <PersonalDetails panLinkStatus={0} />
                        <BankDetails />
                    </div>
                </div>
                {/* Pledgefolio */}
                {pledgeFolioItems?.length !== 0 &&
                    otpValidationResponse?.request_id && (
                        <div className="container-pledgefolio">
                            <Heading3
                                className="heading-nav-index"
                                margin="80px 0 24px 0"
                                textColor={AQUAMARINE.S300}
                            >
                                Your Pledgefolio
                            </Heading3>
                            <PledgefolioTable
                                setFolioItems={setPledgeFolioItems}
                                folioItems={pledgeFolioItems}
                            />
                        </div>
                    )}
                {/* Repayment Timeline */}
                {/* <div className="container-repayment-timeline">
                    <Heading3
                        className="heading-nav-index"
                        margin="80px 0 24px 0"
                        textColor={AQUAMARINE.S300}
                    >
                        Repayment Timelines
                    </Heading3>
                    <RepaymentTimelineTable
                        repaymentItems={customRepaymentItems}
                        reviewPage={false}
                    />
                </div> */}
            </div>
            <style jsx>
                {`
                    .container-main {
                        margin: 80px;
                    }
                    .container-personal-info {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        column-gap: 40px;
                    }
                    .container-repayment-timeline {
                        padding-bottom: 80px;
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
                `}
            </style>
        </ProtectedRoute>
    );
}

export default AvailLoan;
