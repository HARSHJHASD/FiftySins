/* eslint-disable indent */
import { useEffect } from 'react';
import Head from 'next/head';

import { AQUAMARINE, BLACK_STONE } from '../../core/constants/colors';
import { Heading3 } from '../../components/typography';
import PersonalDetails from '../../components/avail-loan/personal-details';
import Header from '../../components/header/header';
// import RepaymentTimelineTable from '../../components/tables/repayment-timelines-table';
import ReviewPledgefolioTable from '../../components/tables/pledgefolio-table/review-pledgefolio-table';
import BankDetailsLinked from '../../components/avail-loan/bank-details/bank-details-linked';
import Loading from '../../components/ui-components/loading';
import Button from '../../components/ui-components/button';

import useGlobalStore from '../../store/global';
import useProfileStore from '../../store/profile';
import useBankStore from '../../store/bank';
import usePortfolioStore from '../../store/portfolio';
import useDigioStore from '../../store/digio';
import useLoanStore from '../../store/loans';

/**
 * This function is used as the Avail Loan - Review screen on the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-14
 * @modifier
 * @modified
 * @since 0.22.0
 */
function ReviewAvailLoan() {
    const { fireBaseUser, isLoading: isGlobalContainerLoading } =
        useGlobalStore((state) => state);
    const {
        isLoading: isProfileContainerLoading,
        fetchUser,
        fiftyFinUser
    } = useProfileStore((state) => state);
    const { fetchBankAccounts, banks, isBankAccountFetchSuccess } =
        useBankStore((state) => state);
    const {
        karvyLienConfirmationData,
        isKarvyLienConfirmed,
        pledgeFolioItems
    } = usePortfolioStore((state) => state);
    const { isKycVerified, panInfo } = useDigioStore((state) => state);
    const { initiateLoan } = useLoanStore((state) => state);

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

    if (isGlobalContainerLoading || isProfileContainerLoading) {
        return <Loading />;
    }
    // const customRepaymentItems = [
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 0,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 1,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 2,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 3,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 4,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 5,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 6,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 570.42,
    //         date: 'Feb 5',
    //         id: 7,
    //         status: 'COMPLETE'
    //     },
    //     {
    //         amount: 870.42,
    //         date: 'Feb 5',
    //         id: 8,
    //         status: 'ACTIVE'
    //     },
    //     {
    //         amount: 970.42,
    //         date: 'Oct 5',
    //         id: 9,
    //         status: 'INACTIVE'
    //     },
    //     {
    //         amount: 1070.42,
    //         date: 'Nov 5',
    //         id: 10,
    //         status: 'INACTIVE'
    //     },
    //     {
    //         amount: 1170.42,
    //         date: 'Dec 5',
    //         id: 11,
    //         status: 'INACTIVE'
    //     }
    // ];

    const pledgedPortfolioItems = karvyLienConfirmationData
        ? karvyLienConfirmationData?.map((portfolio) => ({
              aggregator: 'KFintech',
              fundName: portfolio?.SchemeName,
              id: portfolio?.ISIN,
              quantity: portfolio.LienUnits,
              type: portfolio?.AssetClass,
              amount: portfolio.LienAmount
          }))
        : [];

    const handleInitiateLoan = () => {
        if (
            fiftyFinUser &&
            karvyLienConfirmationData &&
            isKarvyLienConfirmed &&
            isKycVerified &&
            panInfo &&
            isBankAccountFetchSuccess &&
            banks
        ) {
            initiateLoan({
                userId: fiftyFinUser.id.toString(),
                loanTerm: '12',
                pledgeId: pledgeFolioItems.map((folio) => ({
                    [folio.scripId]: folio.quantity
                }))
            });
        }
    };

    return (
        <>
            <Head>
                <title>
                    Avail Loan - Review | 50Fin - Loans Against Securities
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
                        <PersonalDetails panLinkStatus={2} />
                        <BankDetailsLinked />
                    </div>
                </div>
                {/* Pledgefolio */}
                {karvyLienConfirmationData?.length !== 0 &&
                    isKarvyLienConfirmed && (
                        <div className="container-pledgefolio">
                            <Heading3
                                className="heading-nav-index"
                                margin="80px 0 24px 0"
                                textColor={AQUAMARINE.S300}
                            >
                                Your Pledgefolio
                            </Heading3>
                            <ReviewPledgefolioTable
                                folioItems={pledgedPortfolioItems}
                            />
                            <Button
                                className="button-avail-loan"
                                backgroundColor={AQUAMARINE.S600}
                                buttonText="Confirm "
                                buttonType="PRIMARY"
                                foregroundColor={BLACK_STONE.EXTRA_DARK}
                                width="150px"
                                onButtonClick={handleInitiateLoan}
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
                        reviewPage
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
        </>
    );
}

export default ReviewAvailLoan;
