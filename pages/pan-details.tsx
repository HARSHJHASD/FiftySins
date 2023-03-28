import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header/header';
import { SULPHER_RUBY } from '../core/constants/colors';
import { Col, Row } from 'antd';
import LeftSidebar from '../components/leftSideBar/left-sidebar';
import { LeftSideBarComponent } from '../lib/shared-components';
import ProtectedRoute from '../components/protected-route';
import AddBank from '../components/bank-details/add-bank';
import AddPANCard from '../components/bank-details/add-pan-card';

const PanBank = () => {

    const [showAddAnotherBankAcc, setShowAddAnotherBankAcc] = useState(false);

    return (
        <>
            <ProtectedRoute>
                <Head>
                    <title>PanDetails | 50Fin - Loans Against Securities</title>
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
                    <Col span={20} className={"pan-details__container"} style={{ overflow: "auto" }}>
                        <Row className={"pan-details__container_row"}>
                            {!showAddAnotherBankAcc ?
                                <>
                                    <Col>
                                        <AddBank {...{ showAddAnotherBankAcc, setShowAddAnotherBankAcc }} />
                                    </Col>
                                    <Col className='pan-details__container_add_pan' style={{ marginLeft: "7%" }}>
                                        <AddPANCard />
                                    </Col>
                                </> :
                                <Col>
                                    <AddBank {...{ showAddAnotherBankAcc, setShowAddAnotherBankAcc }} />
                                </Col>
                            }
                        </Row>
                    </Col>
                </Row>

                <style jsx global>
                    {`
                    body {
                        margin: 0;
                        height: 100vh;
                        background-color: ${SULPHER_RUBY.S1000};
                        overflow: hidden;
                    }

                    .pan-details__container{
                        padding:20px;
                        margin:auto;
                        height: 80vh;
                    }

                    .pan-details__container_row{
                        align-items: flex-start;                        
                        justify-content:center;
                    }

                    .pan-details__container_add_pan{
                        align-items:start;
                    }
                `}
                </style>
            </ProtectedRoute>
        </>
    )
}

export default PanBank