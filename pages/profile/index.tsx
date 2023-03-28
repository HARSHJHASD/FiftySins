import { useEffect, useState } from 'react';
import Head from 'next/head';
// eslint-disable-next-line import/no-extraneous-dependencies
import { RadioChangeEvent, Space, Avatar as AntdAvatar, Col, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PersonalInfoTab from '../../components/personal-info-tab';
import PanAndBankDetailsTab from '../../components/pan-and-bank-details-tab';
import AccountSettingsTab from '../../components/account-settings-tab';
import NavHeader from '../../components/header/header';
import { Heading4, Heading5 } from '../../components/typography';
import { AQUAMARINE, SULPHER_RUBY } from '../../core/constants/colors';
import Loading from '../../components/ui-components/loading';
import useProfileStore from '../../store/profile';
import useGlobalStore from '../../store/global';
import ProtectedRoute from '../../components/protected-route';
import {
    PageContainer,
    Wrapper,
    ContentWrapper,
    ProfileAvatarAndActionWrapper,
    AvatarWrapper,
    ImageUpdateIconButton,
    Username,
    ProfileInfoSwitchWrapper,
    InfoSwitchButton,
    Header,
    LeftSideBarComponent
} from '../../lib/shared-components';
import LeftSidebar from '../../components/leftSideBar/left-sidebar';

export default function Profile() {
    const [profileState, setProfileState] = useState('personal');
    const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(false);
    const [isAddingAnotherBankInfo, setIsAddingAnotherBankInfo] =
        useState(false);
    const { isLoading: isGlobalContainerLoading, fireBaseUser } =
        useGlobalStore((state) => state);
    const {
        isLoading: isProfileContainerLoading,
        fetchUser,
        fiftyFinUser
    } = useProfileStore((state) => state);

    useEffect(() => {
        if (fireBaseUser && !fiftyFinUser) {
            fetchUser({ idType: 'email', id: fireBaseUser?.email });
        }
    }, []);

    if (isProfileContainerLoading || isGlobalContainerLoading) {
        return <></>;
    }

    const onChange = (e: RadioChangeEvent) => {
        setProfileState(e.target.value);
    };

    const renderProfileInfo = () => {
        if (profileState === 'personal') {
            return (
                <PersonalInfoTab
                    isEditingPersonalInfo={isEditingPersonalInfo}
                    setIsEditingPersonalInfo={setIsEditingPersonalInfo}
                />
            );
        }
        if (profileState === 'pan') {
            return (
                <PanAndBankDetailsTab
                    isAddingAnotherBankInfo={isAddingAnotherBankInfo}
                    setIsAddingAnotherBankInfo={setIsAddingAnotherBankInfo}
                />
            );
        }
        if (profileState === 'setting') {
            return <AccountSettingsTab />;
        }

        return <></>;
    };

    if (isGlobalContainerLoading || isProfileContainerLoading) {
        return <Loading />;
    }

    return (
        <ProtectedRoute>
            <Head>
                <title>Profile | 50Fin - Loans Against Securities</title>
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
            <NavHeader
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
                    <h2 style={{ color: "white", textAlign: "center" }}>
                        This is profile page
                    </h2>
                </Col>
            </Row>
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        height: 100vh;
                        background-color: ${SULPHER_RUBY.S1000};
                    }
                `}
            </style>
        </ProtectedRoute>
    );
}
