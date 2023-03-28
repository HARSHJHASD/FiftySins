import React, { useState } from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import ProtectedRoute from '../protected-route';
import Header from '../header/header';
import LeftSidebar from './left-sidebar';
import { LeftSideBarComponent } from '../../lib/shared-components';
import Cardwrapper from '../ui-components/card-wrapper';
import { BLUESAPPHIRE, SULPHER_RUBY } from '../../core/constants/colors';
import TextInputText from '../ui-components/text-input';

const PaymentDetails = () => {
    return (
        <div>
            <ProtectedRoute>
                <Head>
                    <title>Loan | 50Fin - Loans Against Securities</title>
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
                        <div className='payment-detail-container'>

                            <div className='payment-detail-container-child'>
                                <div className='wrapper-inside'>
                                    <Cardwrapper padding="1rem" borderColor={BLUESAPPHIRE.S300}  >
                                        <p className="headingPayment">PAYMENT DETAILS</p>
                                        <TextInputText width="400px" height="1.5rem" hintText='Bajaj Finance Ltd.' labelText="Beneficiary Name" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='KOTAK BANK' labelText="Bank Name" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='MUMBAI-NARIMAN POINT' labelText="Branch Name" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <div style={{ display: "flex" }}>
                                            <div >
                                                <p style={{ color: "#ffff", padding: "0 10px",margin:"0px" }}>TO PAY THE PRINCIPAL AMOUNT WITH OR WITHOUT</p>
                                                <p style={{ color: "#ffff", padding: "0 10px",margin:"0px" }}> INTEREST MAKE A PAYMENT</p>
                                            </div>

                                        </div>
                                        <TextInputText width="400px" height="1.5rem" hintText='BFLEV402LAS00058252' labelText="Account Number" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='KKBK0000VRTL' labelText="IFSC" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <p style={{ color: "#ffff", padding: "0 10px",margin:"0px" }}>OTHER BANK TO KOTAK</p>
                                        <TextInputText width="400px" height="1.5rem" hintText='BFLEV402LAS00058252' labelText="Account Number  " required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='KKBK0000VRTL' labelText="IFSC" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />



                                    </Cardwrapper>
                                </div>
                            </div>
                            <div className="payment-detail-container-child">
                                <div className='wrapper-inside'>
                                    <Cardwrapper padding="1rem" borderColor={BLUESAPPHIRE.S300}  >
                                        <p className="headingPayment">PAYMENT DETAILS</p>
                                        <TextInputText width="400px" height="1.5rem" hintText='Bajaj Finance Ltd.' labelText="Beneficiary Name" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='KOTAK BANK' labelText="Bank Name" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='MUMBAI-NARIMAN POINT' labelText="Branch Name" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <p style={{ color: "#ffff", padding: "0 10px",margin:"0px" }}>TO PAY THE INTEREST AMOUNT MAKE A </p>
                                        <p style={{ color: "#ffff", padding: "0 10px",margin:"0px" }}>PAYMENT</p>
                                        <TextInputText width="400px" height="1.5rem" hintText='BFLEV402LAS00058252' labelText="Account Number" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='KKBK0000VRTL' labelText="IFSC" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <p style={{ color: "#ffff", padding: "0 10px",margin:"0px" }}>OTHER BANK TO KOTAK</p>
                                        <TextInputText width="400px" height="1.5rem" hintText='BFLEV402LAS00058252' labelText="Account Number  " required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />
                                        <TextInputText width="400px" height="1.5rem" hintText='KKBK0000VRTL' labelText="IFSC" required={false} width="335px" foregroundColor="#C6C7CF" labelFontSize="14px" type="text" backgroundColor="#2F3038" />



                                    </Cardwrapper>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <style jsx global>
                    {`
                .wrapper-inside{
                        margin-bottom: 1.3rem;
                }
                .payment-detail-container-child{
                align-items: center;
                text-align: center;
                width:22rem;
                 margin-left:2.5rem;
                }
                .headingPayment{
                color:white;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: .9rem;
                line-height: 1rem;
                display: flex;
                margin:0px;
                align-items: center;
                letter-spacing: -0.02em;
                }
                body {
                    margin: 0;
                    height: 100vh;
                    background-color: ${SULPHER_RUBY.S1000};
                }
                .payment-detail-container{
                    display: flex;
                    position: absolute;
                    justify-content: space-between;
                    width: 46rem;
                    height: 30rem;
                    left: 11rem;
                    top: 3rem;
                }
            `}
                </style>
            </ProtectedRoute>

        </div>
    )
}



export default PaymentDetails