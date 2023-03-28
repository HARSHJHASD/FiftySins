import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/header/header';
import { SULPHER_RUBY, STONE_LAP, WHITE_MARBLE, AQUAMARINE, BLUESAPPHIRE } from '../core/constants/colors';
import { Col, Row } from 'antd';
import LeftSidebar from '../components/leftSideBar/left-sidebar';
import { LeftSideBarComponent } from '../lib/shared-components';
import ProtectedRoute from '../components/protected-route';
import { Tabs } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import Button from '../components/ui-components/button';
import { Heading5, Heading3, Heading6 } from '../components/typography';
import TextInputText from '../components/ui-components/text-input';
import ButtonWithIcon from '../components/ui-components/button-with-icon';
import Checkbox from 'antd/es/checkbox/Checkbox';
import CheckedToggle from '../components/ui-components/toggle';



const Setting = () => {

    const [activeTab, setActiveTab] = useState('1');
    const [emailField, setEmailField] = useState({
        currentEmail: "",
        newEmail: "",
        confirmNewEmail: ""
    })
    const [passwordField, setPasswordField] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })
    const [phoneNumberField, setPhoneNumberField] = useState({
        phoneNumber: "",
        confirmPhoneNumber: ""
    })
    const [deleteAccountField, setDeleteAccountField] = useState({
        confirmEmail: "",
        confirmPassword: ""
    })
    const [isToggle, setIsToggle] = useState({
        allNotifications: false,
        whatsAppUpdates: false
    });


    const items = [
        {
            key: '1',
            label: <ButtonWithIcon
                iconHeight={24}
                iconWidth={24}
                iconURL='/icons/User.svg'
                backgroundColor={"transparent"}
                buttonText="Change Email"
                buttonType='PRIMARY'
                iconAltText='Link'
                className=''
                width='100%'
                onButtonClick={() => { }}
                foregroundColor={WHITE_MARBLE.LIGHT} />,
            children: <div>
                <Heading5 textColor={AQUAMARINE.S600}>Change Email</Heading5>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type="text"
                        width="420px"
                        labelText='Enter your Current Email ID'
                        name={"currentEmail"}
                        onChange={(e) => setEmailField({ ...emailField, [e.target.name]: e.target.value })}
                        required={false}
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type="text"
                        width="420px"
                        labelText='Enter your New Email ID'
                        name={"newEmail"}
                        onChange={(e) => setEmailField({ ...emailField, [e.target.name]: e.target.value })}
                        // onChange={handleChange}
                        required={false}
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type="text"
                        width="420px"
                        labelText='Confirm your New Email ID'
                        name={"confirmEmail"}
                        onChange={(e) => setEmailField({ ...emailField, [e.target.name]: e.target.value })}
                        // onChange={handleChange}
                        required={false}
                    />
                </div>
                <div style={{ padding: "1rem 0" }}>
                    <Button buttonText='Submit' width='420px' />
                </div>
            </div>
        },
        {
            key: '2',
            label: <ButtonWithIcon
                iconHeight={24} iconWidth={24}
                iconURL='/icons/ph_password-duotone.svg'
                backgroundColor={"transparent"}
                buttonText="Change Password"
                buttonType='PRIMARY'
                foregroundColor={WHITE_MARBLE.LIGHT}
                iconAltText='Link'
                className=''
                width='100%'
                onButtonClick={() => { }}
            />,
            children: <div>
                <Heading5 textColor={AQUAMARINE.S600}>Change Password</Heading5>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        width="420px"
                        name={"currentPassword"}
                        labelText="Enter your Current Password"
                        onChange={(e) => setPasswordField({ ...passwordField, [e.target.name]: e.target.value })}
                        required={false}
                        type="password"
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        width="420px"
                        name={"newPassword"}
                        onChange={(e) => setPasswordField({ ...passwordField, [e.target.name]: e.target.value })}
                        labelText="Enter your New Password"
                        // onChange={handleChange}
                        required={false}
                        type="password"
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        width="420px"
                        name={"confirmNewPassword"}
                        onChange={(e) => setPasswordField({ ...passwordField, [e.target.name]: e.target.value })}
                        labelText="Confirm your New Password"
                        // onChange={handleChange}
                        required={false}
                        type="password"
                    />
                </div>
                <div style={{ padding: "1rem 0" }}>
                    <Button buttonText='Submit' width='420px' />
                </div>
            </div>
        },
        {
            key: '3',
            label: <ButtonWithIcon
                iconHeight={24}
                iconWidth={24}
                iconURL='/icons/carbon_phone-ip.svg'
                backgroundColor={"transparent"}
                buttonText="Change Phone Number"
                buttonType='PRIMARY'
                foregroundColor={WHITE_MARBLE.LIGHT}
                iconAltText='Link'
                className=''
                width='100%'
                onButtonClick={() => { }}
            />,
            children: <div>
                <Heading5 textColor={AQUAMARINE.S600}>Change Phone Number</Heading5>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type="tel"
                        width="420px"
                        labelText='Enter your Phone Number'
                        name={"phoneNumber"}
                        onChange={(e) => setPhoneNumberField({ ...phoneNumberField, [e.target.name]: e.target.value })}
                        required={false}
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type="tel"
                        width="420px"
                        labelText='Confirm Your Phone Number'
                        name={"confirmPhoneNumber"}
                        onChange={(e) => setPhoneNumberField({ ...phoneNumberField, [e.target.name]: e.target.value })}
                        required={false}
                    />
                </div>
                <div style={{ padding: "1rem 0" }}>
                    <Button buttonText='Submit' width='420px' />
                </div>
            </div>
        },
        {
            key: '4',
            label: <ButtonWithIcon
                iconHeight={24}
                iconWidth={24}
                iconURL='/icons/Component 1.svg'
                backgroundColor={"transparent"}
                buttonText="Notifications"
                buttonType='PRIMARY'
                foregroundColor={WHITE_MARBLE.LIGHT}
                iconAltText='Link'
                className=''
                width='100%'
                onButtonClick={() => { }}
            />,
            children: <div>
                <Heading5 textColor={AQUAMARINE.S600}>Notifications</Heading5>
                <div style={{ width: "420px" }}>
                    <CheckedToggle toggleLabel={"All notifications"} checkedText={"ON"} uncheckedText={"OFF"} handleToggle={() => setIsToggle({ ...isToggle, allNotifications: !isToggle.allNotifications })} value={isToggle.allNotifications} />
                </div>
                <div style={{ width: "420px" }}>
                    <CheckedToggle toggleLabel={"WhatsApp Updates"} checkedText={"ON"} uncheckedText={"OFF"} handleToggle={() => setIsToggle({ ...isToggle, whatsAppUpdates: !isToggle.whatsAppUpdates })} value={isToggle.whatsAppUpdates} />
                </div>
            </div>
        },
        {
            key: '5',
            label: <ButtonWithIcon
                iconHeight={24}
                iconWidth={24}
                iconURL='/icons/fluent_person-delete-16-regular.svg'
                backgroundColor={"transparent"}
                buttonText="Delete Account"
                buttonType='PRIMARY'
                foregroundColor={WHITE_MARBLE.LIGHT}
                iconAltText='Link'
                className=''
                width='100%'
                onButtonClick={() => { }}
            />,
            children: <div>
                <Heading5 textColor={AQUAMARINE.S600}>Delete Account</Heading5>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        width="420px"
                        type='text'
                        name={"confirmEmail"}
                        labelText="Confirm your Email Id"
                        onChange={(e) => setDeleteAccountField({ ...deleteAccountField, [e.target.name]: e.target.value })}
                        required={false}
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type='password'
                        width="420px"
                        name={"confirmPassword"}
                        labelText="Confirm your New Password"
                        onChange={(e) => setDeleteAccountField({ ...deleteAccountField, [e.target.name]: e.target.value })}
                        required={false}
                    />
                </div>
                <div>
                    <TextInputText
                        backgroundColor={SULPHER_RUBY.S200}
                        className="text-input-bank-details"
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        type="password"
                        width="420px"
                        name={"Enter your Current Email ID"}
                        labelText="Confirm your New Password"
                        // onChange={handleChange}
                        required={false}
                    />
                </div>
                <div style={{ padding: "1rem 0" }}>
                    <Button buttonText='Submit' width='420px' />
                </div>
            </div>
        },
    ]

    const tabHandler = (key) => {
        setActiveTab(key)
    }

    return (
        <>
            <ProtectedRoute>
                <Head>
                    <title>Settings | 50Fin - Loans Against Securities</title>
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
                        <div className='tab-container'>
                            <div className="tab-inner-container">
                                <Heading3 textColor={WHITE_MARBLE.LIGHT}>Settings</Heading3>
                                <Tabs
                                    tabPosition='left'
                                    items={items}
                                    activeKey={activeTab}
                                    onChange={tabHandler}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>

                <style jsx global>
                    {`
                    body {
                        margin: 0;
                        height: 100vh;
                        background-color: ${SULPHER_RUBY.S1000};
                    }
                    .tab-container 
                    {
                        // width: 60vw;
                        height:100%;
                        width:100%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        background-color: #050A30;
                        margin: auto;
                    }
                    .ant-btn:not(:disabled):focus-visible 
                    {
                        outline: none !important;
                    }
                    .ant-tabs-ink-bar 
                    {
                        display: none;
                    }
                    .ant-tabs-content-holder 
    {
        border-left: none !important;
    }
    .ant-tabs-tab-active text-button
    {
            color: ${STONE_LAP.S500} !important;
    }
                `}
                </style>
            </ProtectedRoute>
        </>
    )
}

export default Setting