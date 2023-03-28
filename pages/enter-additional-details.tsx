import Head from 'next/head';
import Router from 'next/router';

import {
    AQUAMARINE,
    BLACK_STONE,
    WHITE_MARBLE
} from '../core/constants/colors';
import { Heading4, Heading6 } from '../components/typography';
import Header from '../components/header/header';
import Dropdown from '../components/ui-components/dropdown';
import TextInputText from '../components/ui-components/text-input';
import ButtonWithIcon from '../components/ui-components/button-with-icon';
import useLoanStore from '../store/loans';

/**
 * This function is used as the Enter Additional Details page on the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-14
 * @modifier
 * @modified
 * @since 0.23.0
 */
function EnterAdmissionDetails() {
    const { extraDetails, setExtraDetails } = useLoanStore((state) => state);

    const occupationOptions = [
        {
            id: 0,
            text: 'Firefighter'
        },
        {
            id: 1,
            text: 'Businessman'
        },
        {
            id: 2,
            text: 'Marketer'
        },
        {
            id: 3,
            text: 'Professional'
        },
        {
            id: 4,
            text: 'Defense'
        }
    ];

    const maritalStatusOptions = [
        { id: 0, text: 'Single' },
        { id: 1, text: 'Married' },
        { id: 2, text: 'Divorced' }
    ];

    const residenceTypeOptions = [
        { id: 0, text: 'A' },
        { id: 1, text: 'B' }
    ];

    const fatherOrSpouseOptions = [
        { id: 0, text: 'Father' },
        { id: 1, text: 'Spouse' }
    ];

    const textInputs = [
        {
            id: 0,
            label: 'Occupation',
            isDropdown: true,
            dropdownItems: occupationOptions,
            name: 'occupation'
        },
        {
            id: 1,
            label: 'Marital Status',
            isDropdown: true,
            dropdownItems: maritalStatusOptions,
            name: 'maritalStatus'
        },
        {
            id: 2,
            label: 'Residence Type',
            isDropdown: true,
            dropdownItems: residenceTypeOptions,
            name: 'residenceType'
        },
        {
            id: 3,
            label: 'Father or Spouse',
            isDropdown: true,
            dropdownItems: fatherOrSpouseOptions,
            name: 'FatherOrSpouse'
        },
        {
            id: 4,
            label: 'Father/Spouse First Name',
            isDropdown: false,
            dropdownItems: [],
            name: 'fatherOrSpouseFirstName'
        },
        {
            id: 5,
            label: 'Father/Spouse Last Name',
            isDropdown: false,
            dropdownItems: [],
            name: 'fatherOrSpouseLastName'
        },
        {
            id: 6,
            label: 'Mother First Name',
            isDropdown: false,
            dropdownItems: [],
            name: 'motherFirstName'
        },
        {
            id: 7,
            label: 'Mother Last Name',
            isDropdown: false,
            dropdownItems: [],
            name: 'motherLastName'
        }
    ];

    const handleChange = (event) => {
        const {
            target: { value, name }
        } = event;

        setExtraDetails({ ...extraDetails, [name]: value });
    };

    return (
        <>
            <Head>
                <title>
                    Enter Admission Details | 50Fin - Loans Against Securities
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
                <Heading4
                    className=""
                    margin="80px auto 40px"
                    textColor={AQUAMARINE.S600}
                >
                    Please Enter Additional Details
                </Heading4>
                <div className="container-form">
                    {textInputs.map((inputItem) => (
                        <>
                            <Heading6 textColor={WHITE_MARBLE.LIGHT}>
                                {inputItem.label}
                            </Heading6>
                            {inputItem.isDropdown ? (
                                <Dropdown
                                    items={inputItem.dropdownItems}
                                    width="320px"
                                    name={inputItem.name}
                                    itemList={extraDetails}
                                    setItemList={setExtraDetails}
                                />
                            ) : (
                                <TextInputText
                                    backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                                    className="text-input"
                                    foregroundColor={WHITE_MARBLE.LIGHT}
                                    type="text"
                                    width="320px"
                                    required
                                    onChange={handleChange}
                                    name={inputItem.name}
                                />
                            )}
                        </>
                    ))}
                </div>
                <ButtonWithIcon
                    backgroundColor={AQUAMARINE.S600}
                    buttonText="Submit"
                    buttonType="PRIMARY"
                    className="button-submit"
                    foregroundColor={BLACK_STONE.EXTRA_DARK}
                    iconAltText="Check"
                    iconURL="/icons/check-circle-black-stone-extra-dark.svg"
                    iconWidth={24}
                    iconHeight={24}
                    onButtonClick={() => Router.push('/avail-loan/review')}
                    width="240px"
                />
            </div>
            <style jsx>
                {`
                    .container-main {
                        padding-bottom: 32px;
                    }
                    .container-form {
                        width: 720px;
                        background-color: ${BLACK_STONE.DARK};
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        justify-content: center;
                        row-gap: 16px;
                        margin: auto;
                        padding: 40px 32px;
                        border-radius: 32px;
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
                    .button-submit {
                        width: fit-content;
                        margin: 48px auto;
                    }
                `}
            </style>
        </>
    );
}

export default EnterAdmissionDetails;
