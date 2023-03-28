import React, { useState } from 'react';
import Head from 'next/head';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import Header from '../components/header/header';
import { BLUESAPPHIRE, SULPHER_RUBY } from '../core/constants/colors';
import { Col, Row } from 'antd';

import { LeftSideBarComponent } from '../lib/shared-components';
import ProtectedRoute from '../components/protected-route';
import Cardwrapper from '../components/ui-components/card-wrapper';
import { Heading4, Heading6 } from '../components/typography';
import Button from '../components/ui-components/button';
import { yellow } from '@mui/material/colors';

import LeftSidebar from '../components/leftSideBar/left-sidebar';
import PaymentDetails from '../components/loan/Payment-detail';

const Loan = () => {

    const [renderState, changeRenderState] = useState("");
    const handlePayNowClick =(e)=>{

        e.preventDefault();
        changeRenderState("payNow");
        console.log("Pay NOw has been clicked");
    }

if(renderState==="")
{
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
                        <div className='loan-Payment-container'>

                            <div className='loan-Payment-container-table'>
                                <div className='wrapper-inside'>
                                    <Cardwrapper padding="1rem" borderColor={BLUESAPPHIRE.S300}>
                                        <p className="headingTable">Current Loan</p>
                                        <table>
                                            <tr>
                                                <td className='upper-td'>Loan Start Date</td>
                                                <td className='upper-td' style={{ color: "#24FEEE" }}>Aug 19 2022</td>
                                            </tr>
                                            <tr>
                                                <td className='upper-td'>Equity MF Ratio  </td>
                                                <td className='upper-td'>50%</td>
                                            </tr>
                                            <tr>
                                                <td className='upper-td'>Debt MF Ratio </td>
                                                <td className='upper-td'>70%</td>
                                            </tr>
                                            <tr>
                                                <td className='upper-td'>Remaining Amount</td>
                                                <td className='upper-td'>₹20,716.06</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>

                                            <tr className='lower-td'>
                                                <td>Upcoming Payment </td>
                                                <td>Loan Amount</td>
                                            </tr>
                                            <tr className='lower-td'>
                                                <td>Date </td>
                                                <td></td>
                                            </tr>
                                            <tr className='lower-td'>
                                                <td>1 Dec 2022</td>
                                                <td style={{ color: "#24FEEE" }} >₹22,554.99</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>

                                        </table>
                                        <p className="headingTable" ><span style={{ color: "#24FEEE" }} >Due&nbsp;</span> ₹225.54</p>
                                    </Cardwrapper>
                                </div>

                                <Button onButtonClick={handlePayNowClick}  style={{ fontFamily: "Inter", fontStyle: 'normal' }} width="8rem" height="2rem" buttonText="Pay Now"></Button>
                            </div>


                            <div className="loan-Payment-container-table">
                                <div className='wrapper-inside'>
                                    <Cardwrapper padding="1rem" borderColor={BLUESAPPHIRE.S300}  >
                                        <p className="headingTable">Repayment Timeline</p>
                                        <table>
                                            <tr>
                                                <td className='upper-td'>Loan Term</td>
                                                <td >
                                                    <div className='loan-term' >
                                                        12 Months
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                                <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>

                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                                 <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>
                                            <tr className='repaymentMonth'>
                                            <td > <CheckCircleTwoTone twoToneColor="#24FEEE" />&nbsp;&nbsp;&nbsp;Mar 7 </td>
                                                <td >₹225.54</td>
                                            </tr>

                                        </table>
                                    </Cardwrapper>
                                </div>

                                <Button onButtonClick={handlePayNowClick}   width="8rem" height="2rem" buttonText="Pre-Close "></Button>
                            </div>
                        </div>


                    </Col>

                </Row>
                <style jsx global>
                    {`
                .wrapper-inside{
                        margin-bottom: 1.3rem;
                }
                .repaymentMonth{
                    line-height: 1.3rem;
                }
                .loan-term{
                    float:right;
                    text-align: right;
                    display: flex;
                     flex-direction: row;    
                    justify-content: center;                                
                    background: #3D3F49;
                    border-radius: 20px;
                    align-items: center;
                    height:1.4rem;
                    width:5rem;
                }

                .lower-td{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                }
                .loan-Payment-container-table{
                align-items: center;
                text-align: center;
                width:22rem;
                 margin-left:2.5rem;
                }
                .headingTable{
                color:white;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 600;
                font-size: 1.3rem;
                line-height: 1rem;
                display: flex;
                margin:0px;
                align-items: center;
                letter-spacing: -0.02em;
                }
                td:first-child {
                    text-align: left;
                  }
                  td:last-child {
                    text-align: right;
                    font-size: .9rem;
                  }

                  .upper-td{
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 600;
                    font-size: 1rem;
                    line-height: 2rem;
                    width:10rem;
                    
                  }
                  td{
                   width:10rem;
                  }
                body {
                    margin: 0;
                    height: 100vh;
                    background-color: ${SULPHER_RUBY.S1000};
                }
                
                .loan-Payment-container{
                    display: flex;
                    position: absolute;
                    justify-content: space-between;
                    width: 46rem;
                    height: 30rem;
                    left: 11rem;
                    top: 3rem;
                }
                table{
                    color:#ffff;
                    width:17rem;
                }
            `}
                </style>
            </ProtectedRoute>

        </div>
    )
}
else if(renderState ==="payNow")
return(
    <PaymentDetails></PaymentDetails>
)
}


export default Loan