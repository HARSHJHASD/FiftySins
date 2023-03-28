/* eslint-disable indent */
import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { ACTINIUM, AQUAMARINE, BLACK_STONE, SULPHER_RUBY } from '../core/constants/colors';
import { Heading3 } from '../components/typography/index';
import Header from '../components/header/header';
import LinkPortfolioCard from '../components/dashboard/link-portfolio';
import PortfolioTable from '../components/tables/portfolio-table';
import PledgefolioTable from '../components/tables/pledgefolio-table/pledgefolio-table';
import OtpModal from '../components/ui-components/otp-modal';
import Loading from '../components/ui-components/loading';
import PanUpdateModal from '../components/pan-update-modal';
import BankUpdateModal from '../components/bank-update-modal';
import ProtectedRoute from '../components/protected-route';
import useGlobalStore from '../store/global';
import useProfileStore from '../store/profile';
import usePortfolioStore from '../store/portfolio';
import useDigioStore from '../store/digio';
import useBankStore from '../store/bank';
import useLoanStore from '../store/loans';
import Button from '../components/ui-components/button';
import openDigio from '../lib/helper';
import { Col, Row } from 'antd';
import LeftSidebar from '../components/leftSideBar/left-sidebar';
import { LeftSideBarComponent } from '../lib/shared-components';
import MutualFund from '../components/mutual-fund';

/**
 * This function is used as the "Dashboard" page for the website.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-07
 * @modifier Aayush Goyal
 * @modified 2023-03-08
 * @since 0.10.0
 */
function Dashboard() {
    const {
        isLoading: isLoanContainerLoading,
        isLoanInitiationSuccess,
        initiateLoanData,
        createLoan,
        isCreateLoanSuccess,
        createLoanData,
        pushToEAgreement,
        pushToEMandate,
        existingLoanData,
        fetchExistingLoan,
        postLoanSigning,
        fetchLoanPortfolio,
        fetchLoans
    } = useLoanStore((state) => state);

    const {
        isLoading: isBankContainerLoading,
        isBankAccountFetchSuccess,
        banks
    } = useBankStore((state) => state);

    const { fireBaseUser, isLoading: isGlobalContainerLoading } =
        useGlobalStore((state) => state);

    const {
        isLoading: isProfileContainerLoading,
        fiftyFinUser,
        fetchUser
    } = useProfileStore((state) => state);

    const {
        isKycVerified,
        panInfo,
        checkCKyc,
        isCKycVerified,
        ckycSuccessData,
        isKycStatusApproved,
        kycStatus,
        isLoading: isDigioContainerLoading,
        setIsPanModalOpen
    } = useDigioStore((state) => state);

    const {
        isLoading: isPortfolioContainerLoading,
        generateKarvyOtp,
        validateKarvyOtp,
        fetchMutualFundPortfolio,
        portfolio: mutualFundPortfolio,
        createKarvyLien,
        isKarvyLienOTPModalOpen,
        karvyLienCreationData,
        karvyLienConfirmationData,
        otpGenerationResponse,
        isKarvyLienCreated,
        isKarvyLienConfirmed,
        confirmKarvyLien,
        karvyOtp,
        karvyLienOtp,
        isKarvyOTPModalOpen,
        otpValidationResponse,
        setIsKarvyOTPModalOpen,
        setIsKarvyLienOTPModalOpen,
        pledgeFolioItems,
        setPledgeFolioItems
    } = usePortfolioStore((state) => state);

    useEffect(() => {
        if (fireBaseUser && !fiftyFinUser) {
            fetchUser({ idType: 'email', id: fireBaseUser?.email });
        }
    }, [fireBaseUser]);

    useEffect(() => {
        if (fiftyFinUser?.id) {
            fetchLoans(fiftyFinUser?.id.toString());
        }
        if (
            fiftyFinUser?.id &&
            otpValidationResponse?.request_id &&
            otpGenerationResponse?.request_id
        ) {
            fetchMutualFundPortfolio({ userId: fiftyFinUser?.id.toString() });
        }
    }, [fiftyFinUser]);

    useEffect(() => {
        if (mutualFundPortfolio) {
            const items = mutualFundPortfolio?.Karvy_APPROVED?.map(
                (portfolio) => ({
                    aggregator:
                        portfolio.platform === 'Karvy'
                            ? 'KFintech'
                            : portfolio.platform,
                    fundName: portfolio.scrip_name,
                    scripId: portfolio.scrip_id,
                    id: portfolio.id,
                    maxQuantity: portfolio.quantity,
                    type: portfolio.scrip_sub_type,
                    quantity: Math.min(5, portfolio.quantity),
                    price: parseInt(portfolio.price.toFixed(3), 10),
                    loanToValueRatio: portfolio.loan_to_value_ratio
                })
            );
            setPledgeFolioItems(items);
        }
    }, [mutualFundPortfolio]);

    // useEffect(() => {
    //     if (fiftyFinUser && isKarvyLienCreated && karvyLienCreationData) {
    //         confirmKarvyLien({
    //             userId: fiftyFinUser.id.toString(),
    //             karvyRequestId: otpValidationResponse.request_id,
    //             karvyRefNo: karvyLienCreationData.kfin_ref_no,
    //             karvyOtp
    //         });
    //     }
    // }, [karvyLienCreationData, isKarvyLienCreated]);

    // useEffect(() => {
    //     if (fiftyFinUser && karvyLienConfirmationData && isKarvyLienConfirmed) {
    //         checkKycVerification({
    //             userId: fiftyFinUser.id.toString(),
    //             idType: 'PAN'
    //         });
    //         fetchBankAccounts({ userId: fiftyFinUser.id });
    //     }
    // }, [karvyLienConfirmationData, isKarvyLienConfirmed]);

    useEffect(() => {
        if (
            fiftyFinUser &&
            karvyLienConfirmationData &&
            isKarvyLienConfirmed &&
            isKycVerified &&
            panInfo &&
            isBankAccountFetchSuccess &&
            banks
        ) {
            fetchLoanPortfolio(fiftyFinUser.id.toString());
        }
    }, [isKycVerified, panInfo, isBankAccountFetchSuccess, banks]);

    useEffect(() => {
        if (fiftyFinUser && isLoanInitiationSuccess && initiateLoanData) {
            checkCKyc({
                userId: fiftyFinUser.id.toString(),
                customerIdentifierType: 'email'
            });
        }
    }, [isLoanInitiationSuccess, initiateLoanData]);

    useEffect(() => {
        if (
            fiftyFinUser &&
            isCKycVerified &&
            ckycSuccessData &&
            otpValidationResponse
        ) {
            setTimeout(() => {
                openDigio(
                    ckycSuccessData?.process_id,
                    fiftyFinUser?.email,
                    ckycSuccessData?.data?.access_token?.entity_id
                );
            }, 3000);
        }
    }, [isCKycVerified && ckycSuccessData]);

    useEffect(() => {
        if (
            fiftyFinUser &&
            isKycStatusApproved &&
            kycStatus &&
            initiateLoanData
        ) {
            createLoan({
                userId: fiftyFinUser.id.toString(),
                loanId: initiateLoanData.loan_id
            });
        }
    }, [isKycStatusApproved, kycStatus]);

    useEffect(() => {
        if (
            fiftyFinUser &&
            isCreateLoanSuccess &&
            createLoanData &&
            initiateLoanData
        ) {
            fetchExistingLoan({
                userId: fiftyFinUser.id.toString(),
                loanId: initiateLoanData.loan_id
            });
        }
    }, [isCreateLoanSuccess, createLoanData]);

    useEffect(() => {
        if (pushToEAgreement && existingLoanData) {
            Router.push(existingLoanData.e_agreement);
        }
        if (pushToEMandate && existingLoanData) {
            Router.push(existingLoanData.e_mandate);
        }
        if (
            fiftyFinUser &&
            existingLoanData?.process_completed &&
            initiateLoanData
        ) {
            postLoanSigning({
                userId: fiftyFinUser.id,
                loanId: initiateLoanData.loan_id
            });
        }
    }, [pushToEAgreement, pushToEMandate, existingLoanData]);

    const handleAvailLoan = () => {
        if (fiftyFinUser?.id) {
            setIsKarvyLienOTPModalOpen(true);
            createKarvyLien({
                userId: fiftyFinUser.id.toString(),
                karvyRequestId: otpValidationResponse.request_id,
                scripIds: pledgeFolioItems.map((item) => ({
                    [parseInt(item.scripId, 10)]: item.quantity
                }))
            });
        }
    };

    // const navIndexItems = [
    //     {
    //         id: 0,
    //         fundName: "Aditya Birla Capital Fund",
    //         nav: 2809.9,
    //         change: 1.5,
    //         maxLoan: 190009.9,
    //     },
    // ];

    const kFintechApprovedPortfolioItems = mutualFundPortfolio
        ? mutualFundPortfolio.Karvy_APPROVED?.map((portfolio) => ({
            fundName: portfolio.scrip_name,
            id: portfolio.id,
            amount: portfolio.total_amount,
            quantity: portfolio.quantity,
            type: portfolio.scrip_sub_type,
            isApproved: true
        }))
        : [];

    const kFintechUnApprovedPortfolioItems = mutualFundPortfolio
        ? mutualFundPortfolio.Karvy_UNAPPROVED?.map((portfolio) => ({
            fundName: portfolio.scrip_name,
            id: portfolio.id,
            amount: portfolio.total_amount,
            quantity: portfolio.quantity,
            type: portfolio.scrip_sub_type,
            isApproved: false
        }))
        : [];

    const kFintechPortfolioItems = [
        ...kFintechApprovedPortfolioItems,
        ...kFintechUnApprovedPortfolioItems
    ];

    const opts = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 1
        }
    };

    // const onReady = (event) => {
    //     event.target.pauseVideo();
    // };
    const handleValidateKarvyOtp = () => {
        setIsKarvyOTPModalOpen(false);
        if (fiftyFinUser) {
            validateKarvyOtp({
                userId: fiftyFinUser.id.toString(),
                karvyOtp: karvyOtp.join('')
            });
        }
    };

    if (
        isBankContainerLoading ||
        isGlobalContainerLoading ||
        isDigioContainerLoading ||
        isProfileContainerLoading ||
        isPortfolioContainerLoading ||
        isLoanContainerLoading
    ) {
        return <Loading />;
    }

    return (
        <ProtectedRoute>
            <Head>
                <title>Dashboard | 50Fin - Loans Against Securities</title>
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
            <Row>
                <Col span={4}>
                    <LeftSideBarComponent>
                        <LeftSidebar />
                    </LeftSideBarComponent>
                </Col>
                <Col span={20}>
                    <MutualFund />
                </Col>
            </Row>
            <style jsx>
                {`
                    .container-main {
                        margin: 80px;
                    }
                    .container-link-portfolio {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        column-gap: 40px;
                    }
                    .container-form {
                        background-color: ${BLACK_STONE.EXTRA_DARK};
                    }
                    .container-youtube {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        column-gap: 16px;
                        padding-bottom: 80px;
                    }
                    .icon-usp {
                        margin-right: 12px;
                        width: 32px;
                    }
                    .icon-logo {
                        width: 80px;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        height: 100vh;
                        background-color: ${SULPHER_RUBY.S1000};
                    }
                    .heading-youtube {
                        grid-column: 1/3;
                    }
                    .text-link {
                        color: ${ACTINIUM.FOR_BLACK_STONE};
                        text-decoration: underline;
                    }
                    .text-usp-item {
                        width: fit-content;
                        margin: 12px auto 32px;
                        text-align: center;
                    }
                    .button-avail-loan {
                        margin: 20px 40px 0 0;
                        text-align: right;
                        font-size: 25px !important;
                        font-weight: 700 !important;
                    }
                `}
            </style>
        </ProtectedRoute>
    );
}

export default Dashboard;
