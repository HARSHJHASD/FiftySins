import Head from 'next/head';

import {
    ACTINIUM,
    AQUAMARINE,
    BLACK_STONE,
    SPESSARTITE,
    WHITE_MARBLE
} from '../core/constants/colors';
import { Body, Heading2, Heading4 } from '../components/typography/index';

/**
 * This function is used as the "Terms of Service" page for the website.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-12
 * @modifier
 * @modified
 * @since 0.10.0
 */
function TermsOfService() {
    const privacyPolicyElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            The purpose of this Policy is to comply with the provisions of the
            Information Technology Act, 2000 (“Act”) and the Information
            Technology (Reasonable security practices, procedures and sensitive
            personal data or information) Rules, 2011 (“Rules”) that require the
            publishing of a policy for the collection, use, storage, and
            transfer of sensitive personal data or information. Fifty Fintech
            Private Limited is the owner and operator of the website 50fin.in
            and/or the mobile application &apos;50Fin&apos; collectively
            referred to as the “Platform,” and this policy applies to anyone who
            visits, accesses, or uses the Platform or obtains services from the
            Company through the Platform. The Company is committed to protecting
            the privacy of its users and maintaining the highest security
            standards for securing their transactions and information. The
            Privacy Policy specifies the manner in which personal data and other
            information are collected, received, stored, processed, disclosed,
            transferred, dealt with, or otherwise handled by the Company. The
            information received from users while accessing the Services through
            the Platform will be utilized in accordance with this Policy.
            However, this Policy does not apply to information that users
            provide to, or that is collected by, any third-party (excluding the
            group companies, affiliates, and subsidiary companies) through the
            Platform, and any Third-Party Sites that users access or use in
            connection with the services offered on the Platform. By visiting
            the Platform, users accept and agree to be bound by the terms and
            conditions of this Privacy Policy, which is incorporated into and
            subject to the Terms of Use of the Platform. The Company reserves
            the right to update or modify this Privacy Policy at any time
            without prior notice. The Company has the right to terminate a
            user&apos;s access or usage rights to the computer resource
            immediately or remove non-compliant information in case of
            non-compliance with the privacy policy pertaining to access or usage
            of the computer resource.
        </Body>
    );

    const collectionOfInformationElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            <>
                We will collect personal information from the User, as detailed
                in clause 1 and in this Privacy Policy. While some User
                information must be provided, others are optional, and certain
                portions of the information will remain private. We will always
                let the User know which is which. Additional information may be
                gathered during subsequent use of the App and availing of
                Services, whenever the User chooses to provide it.
                <br />
                <br />
                We may collect Personal Information from You when You register
                or set up an account with Us on the Platform. This includes
                mobile number, email address, password, date of birth, gender,
                Permanent Account Number (PAN), signature, marital status,
                residential address, correspondence address, documents such as
                identity card / passport details / Aadhaar details / Voter ID /
                driving license, and/or education details.
                <br />
                <br />
                We may also ask You for certain financial information, including
                Your billing address, bank account details, income, expenses,
                and/or credit history, including transaction history, balances,
                and/or other payment-related details or other payment method
                data, and debit instructions or other standing instructions to
                process payments for the Services.
                <br />
                <br />
                We may ask You to provide certain additional information about
                Yourself on a case-by-case basis. All information disclosed by
                You shall be deemed to be disclosed willingly and without any
                coercion. No liability pertaining to the
                authenticity/genuineness/misrepresentation/fraud/negligence,
                etc. of the information disclosed shall lie on the Company, nor
                will the Company be responsible for verifying any information
                obtained from You.
                <br />
                <br />
                We or the Financing Partner may also work closely with third
                parties (including, for example, credit information bureaus,
                account aggregators, business partners, technical
                sub-contractors, analytics providers, search information
                providers, etc.) and may lawfully receive information about You
                from such sources. Such data may be combined with data collected
                on the Portal and such other information as provided in this
                Policy. Such third parties will provide the same or equal
                protection to the user data as provided in this Policy.
                <br />
                <br />
                You hereby expressly consent to Our access and use of Your
                aforesaid information, and disclosure of Your personal
                information in accordance with this Policy. We may require You
                to share further information on a later date to confirm the
                veracity of Your information or pursuant to any additional
                features added to the Portal. All transactional information,
                including financial information gathered by the Company, shall
                be stored on servers, log files, and any other storage system
                owned by the Company or by third parties in India.
                <br />
                <br />
                Our primary goal in collecting this information is to provide
                You with a safe, efficient, smooth, and customized experience on
                the Platform. The information collected allows Us to provide the
                Services and features on the Platform that most likely meet Your
                needs, and to customize the Platform to make Your experience
                safer and easier.
                <br />
                <br />
                We may also collect certain non-personal information, such as
                Your internet protocol address, web request, operating system,
                browser type, URL, internet service provider, IP address,
                aggregate user data, browser type, software and hardware
                attributes, pages You request, and cookie information, etc.,
                which will not identify You specifically (“Non-Personal
                Information”), while You browse, access, or use the Platform. We
                receive and store Non-Personal Information by the use of data
                collection devices such as “cookies” on certain pages of the
                Platform, in order to help and analyze Our webpage flow, track
                user trends, measure promotional effectiveness, and promote
                trust and safety.
                <br />
                <br />
                If You choose to post messages on our message boards, chat
                rooms, or other message areas or leave feedback, We will collect
                and store such information You provide to Us. We retain this
                information as necessary to resolve disputes, provide customer
                support, respond to queries and inquiries, and troubleshoot
                problems and improve the Services.
                <br />
                <br />
                If You send us correspondence, such as emails or letters, or if
                other users or third parties send Us correspondence about Your
                activities or postings on the Platform, We may collect and
                retain such information into a file specific to You for
                responding to Your request and addressing concerns in relation
                to Your use of the Platform.
                <br />
                <br />
                We shall be entitled to retain Your Personal Information and
                other information for such duration as may be required for the
                purposes specified hereunder and will be used by Us only in
                accordance with this Privacy Policy.
            </>
        </Body>
    );

    const useOfYourInformationElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            <>
                We use your Personal Information and other Non-Personal
                Information for the following purposes:
                <br />
                <br />
                1. Providing and improving the Services on the Platform that you
                request.
                <br />
                2. Resolving disputes and troubleshooting problems.
                <br />
                3. Helping to promote a safe service on the Platform and protect
                the security and integrity of the Platform, the Services, and
                the users.
                <br />
                4. Collecting money from you in relation to the Services.
                <br />
                5. Informing you about online and offline offers, products,
                services, and updates.
                <br />
                6. Customizing your experience on the Platform or sharing
                marketing material with you.
                <br />
                7. Detecting, preventing, and protecting us from any errors,
                fraud, and other criminal or prohibited activity on the
                Platform.
                <br />
                8. Enforcing and informing about our terms and conditions.
                <br />
                9. Processing and fulfilling your request for Services or
                responding to your comments and queries on the Platform.
                <br />
                10. Contacting you.
                <br />
                11. Allowing our business partners and/or associates to present
                customized messages to you.
                <br />
                12. Communicating important notices or changes in the Services,
                use of the Platform, and the terms/policies which govern the
                relationship between you and the Company and with our
                affiliates.
                <br />
                13. Any other purpose after obtaining your consent at the time
                of collection.
                <br />
                <br />
                You also specifically agree and consent to us collecting,
                storing, processing, transferring, and sharing information
                (including Personal Information) related to you with third
                parties such as banks, financial institutions, credit
                information companies, entities registered under applicable laws
                with Securities Exchange Board of India, National Stock Exchange
                of India Limited/BSE Limited/Central Registry of Securitisation
                Asset Reconstruction and Security Interest of India
                (CERSAI)/payment gateways/ collecting banks/KRAs etc. solely for
                the purpose of reviewing your profile and processing your
                transaction requests for the Services or for such other
                products/services offered by us or our group companies,
                affiliates, and subsidiary companies. In addition to the above,
                we identify and use your IP address to help diagnose problems
                with our server, resolve such problems, and administer the
                Platform. Your IP address is also used to help identify you and
                to gather broad demographic information.
                <br />
                <br />
                We may make your Personal Information and/or other Non-Personal
                Information available to group companies, affiliates, and
                subsidiary companies to enable providing you Services through
                the Platform. Please note that all information shared with group
                companies, affiliates, and subsidiary companies or made
                available to group companies, affiliates, and subsidiary
                companies will be governed by the terms of this Privacy Policy.
                We may also disclose your Personal Information to third-party
                vendors, consultants, and other service providers who work for
                the Company, who are bound by contractual obligations to keep
                such personal information confidential and use it only for the
                purposes for which we disclose it to them. This disclosure may
                be required for us, for instance, to provide you access to our
                Services and process payments including validation of your bank
                accounts, to facilitate and assist our marketing and advertising
                activities/initiatives, for undertaking auditing or data
                analysis, or to prevent, detect, mitigate, and investigate
                fraudulent or illegal activities related to our Services. We do
                not disclose your Personal Information to third parties for
                their marketing and advertising purposes without your explicit
                consent.
                <br />
                <br />
                The Company may disclose your information, to the extent
                necessary: (i) to comply with laws and to respond to lawful
                requests and legal process, (ii) to protect the rights and
                property of the Company, our users, and others, including to
                enforce the Terms, and (iii) in an emergency to protect the
                personal safety and assets of the Company, the users, or any
                person. In such an event, the Company is in no manner
                responsible for informing you or seeking your approval or
                consent. We and our group companies, affiliates, and subsidiary
                companies (to the extent Personal Information is collected by
                them) may, in compliance with applicable laws,
                share/transfer/assign all of your Personal Information and other
                information with any other business entities, in the event of a
                merger, sale, re-organization, amalgamation, joint ventures,
                assignment, restructuring of business or transfer or disposition
                of all or any portion of our business.
            </>
        </Body>
    );

    const connectingYourEmailAccountElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            <>
                By clicking on the authentication email sent by the Company to
                your registered email address, you explicitly consent to
                integrate your email account(s) with your account on the
                Platform. The Company will request your express consent in each
                case before integrating your email address with your account.
                You may also choose to enable our access to one or more of your
                email accounts by connecting them with your account on the
                Platform.
                <br />
                <br />
                Once connected, the Platform will securely access and analyze
                emails, including attachments from CAMS or Karvy&apos;s
                Consolidated Account Statement (CAS), and passwords, if any, to
                populate and track your investment details and history. The data
                obtained by this integration will be used solely by the Company
                to provide the Services, improve your user experience on the
                Platform, and consolidate your investment details and history.
                The Company agrees not to use or transfer any data or
                information received from the integration of your email
                addresses with your account on the Platform to third parties for
                serving ads, including retargeting, personalized, or
                interest-based advertising. Furthermore, the Company undertakes
                to ensure that its employees, agents, contractors, and
                successors comply with applicable laws at all times.
                <br />
                <br />
                We encourage you to review the information before consenting to
                the integration of your email addresses with your account on the
                Platform. You may opt to de-link your email addresses connected
                with the account opened on the Platform at any time by managing
                these connections with the options provided.
                <br />
                <br />
                You must not host, display, upload, modify, publish, transmit,
                store, update, or share any information that:
                <br />
                <br />
                1. belongs to another person and to which you do not have any
                right;
                <br />
                2. is obscene, pornographic, paedophilic, invasive of another’s
                privacy, including bodily privacy, insulting, or harassing on
                the basis of gender, racially or ethnically objectionable,
                relates to or encourages money laundering or gambling, or
                promotes enmity between different groups on the grounds of
                religion or caste with the intent to incite violence;
                <br />
                3. is harmful to a child;
                <br />
                4. infringes any patent, trademark, copyright, or other
                proprietary rights;
                <br />
                5. deceives or misleads the addressee about the origin of the
                message or knowingly and intentionally communicates any
                misinformation or information which is patently false and untrue
                or misleading in nature;
                <br />
                6. impersonates another person;
                <br />
                7. threatens the unity, integrity, defence, security, or
                sovereignty of India, friendly relations with foreign States, or
                public order, or causes incitement to the commission of any
                cognisable offence, or prevents investigation of any offence, or
                is insulting to other nations;
                <br />
                8. contains software virus or any other computer code, file, or
                program designed to interrupt, destroy or limit the
                functionality of any computer resource;
                <br />
                9. violates any law currently in force.
                <br />
                <br />
                50Fin&apos;s use of information received from Google APIs will
                adhere to Google API Services User Data Policy, including the
                Limited Use requirements.
            </>
        </Body>
    );

    const securityPrecautionsAndMeasuresElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            <>
                Our platform implements reasonable security measures and
                safeguards to protect your privacy and personal information in
                compliance with applicable laws. We use a secure server whenever
                you access your account on the platform or any information
                related to it. However, we cannot ensure or warrant the security
                of any information you transmit to us or guarantee that your
                personal information and/or other non-personal information
                provided for availing the services or accessing the platform
                will not be accessed, disclosed, altered, or destroyed by a
                breach of any of our security measures and safeguards.
                Therefore, you have the obligation to ensure that you take
                adequate physical, managerial, and technical safeguards to
                preserve the integrity and security of your data, including your
                personal information, while accessing or using the platform.
                <br />
                <br />
                When payment information is transmitted on or through the
                platform, it will be protected by encryption technology. By
                using our services, you expressly consent to the sharing of your
                information with third-party service providers, including
                payment gateways, to process payments and manage your
                payment-related information. To protect the security of your
                information from misuse, loss, unauthorized access,
                modification, or disclosure, we use the latest secure server
                layers encryption and access control on our systems.
                <br />
                <br />
                Please do not share your account login, password, and OTP
                details with anyone. While we observe reasonable security
                measures to protect your personal information on all our digital
                platforms, security risks may still arise for reasons outside of
                our control, such as hacking, virus dissemination, force majeure
                events, breach of firewall, etc. Please note that the measures
                we take do not guarantee absolute protection to your personal
                information. We assume no liability or responsibility for
                disclosure of your information due to errors in transmission,
                unauthorized third-party access, or other causes beyond our
                control.
                <br />
                <br />
                You play an important role in keeping your personal information
                secure. Therefore, you should not share your personal
                information or other security information for your account with
                anyone. We have undertaken reasonable measures to protect your
                rights of privacy with respect to your usage of the platform
                controlled by us and our services. However, we shall not be
                liable for any unauthorized or unlawful disclosures of your
                personal information made by any third parties who are not
                subject to our control.
            </>
        </Body>
    );

    const accessingAndUpdatingYourInformationElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            You can choose to edit, modify, or delete any personal information
            you have shared for the use of the platform at any time. However,
            please note that deleting or withdrawing information may affect the
            services we provide to you. To edit, modify, or delete your
            information, please write to hello@50fin.in.
        </Body>
    );

    const yourConsentToPrivacyPolicyElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            By visiting the Platform or creating an account to use the Services,
            you accept the provisions of the Privacy Policy. You may withdraw
            your consent at any time by submitting a written request to
            hello@50fin.in. If you do not provide or later withdraw your
            consent, please do not access the Platform or use the Services. We
            reserve the right to refuse to provide any Services through the
            Platform. In this case, the Company may either delete or de-identify
            your personal information so that it is anonymous and cannot be
            attributed to you.
        </Body>
    );

    const changesToPrivacyPolicyElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            We reserve the unconditional right to change, modify, add, or remove
            portions of this Privacy Policy at any time without specifically
            notifying you of such changes. However, we may, at our sole
            discretion, provide you with push notifications or other forms of
            notice as we deem necessary to keep you updated about this Privacy
            Policy. Any changes or updates will be effective immediately. You
            should regularly review this Privacy Policy for changes. Your
            continued usage of the Platform signifies your consent to such
            changes and agreement to be legally bound by them.
        </Body>
    );

    const grievanceOfficerElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            <>
                If you have any grievances with respect to the platform, please
                feel free to reach out to the grievance officer. The name and
                contact details of this officer are provided below:
                <br />
                <br />
                Name: Raja Ramesh Polumuru Email: raja@50fin.in
            </>
        </Body>
    );

    const governingLawAndJurisdictionElement = (
        <Body textColor={WHITE_MARBLE.LIGHT}>
            This policy will be governed by and construed in accordance with the
            laws of India, and subjected to the exclusive jurisdiction of the
            courts of Bangalore.
        </Body>
    );

    const termsOfService = [
        {
            heading: 'PRIVAY POLICY',
            id: 0,
            text: privacyPolicyElement
        },
        {
            heading: 'COLLECTION OF INFORMATION',
            id: 1,
            text: collectionOfInformationElement
        },
        {
            heading: 'USE OF YOUR INFORMATION',
            id: 2,
            text: useOfYourInformationElement
        },
        {
            heading: 'CONNECTING YOUR EMAIL ACCOUNT',
            id: 3,
            text: connectingYourEmailAccountElement
        },
        {
            heading: 'SECURITY PRECAUTIONS & MEASURES',
            id: 4,
            text: securityPrecautionsAndMeasuresElement
        },
        {
            heading: 'ACCESSING & UPDATING YOUR INFORMATION',
            id: 5,
            text: accessingAndUpdatingYourInformationElement
        },
        {
            heading: 'YOUR CONSENT TO PRIVACY POLICY',
            id: 6,
            text: yourConsentToPrivacyPolicyElement
        },
        {
            heading: 'CHANGES TO PRIVACY POLICY',
            id: 7,
            text: changesToPrivacyPolicyElement
        },
        {
            heading: 'GRIEVANCE OFFICER',
            id: 8,
            text: grievanceOfficerElement
        },
        {
            heading: 'GOVERNING LAW & JURISDICTION',
            id: 9,
            text: governingLawAndJurisdictionElement
        }
    ];

    return (
        <>
            <Head>
                <title>
                    Terms of Service | 50Fin - Loans Against Securities
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
                {/* Portfolio Table */}
                <Heading2 margin="auto" textColor={AQUAMARINE.S600}>
                    Terms of Service
                </Heading2>
                {termsOfService.map((item) => (
                    <div key={item.id} className="container-card">
                        <Heading4
                            margin="0 0 16px 0"
                            textColor={SPESSARTITE.S600}
                        >
                            {item.heading}
                        </Heading4>
                        {item.text}
                    </div>
                ))}
            </div>
            <style jsx>
                {`
                    .container-main {
                        margin: 80px;
                        padding-bottom: 80px;
                    }
                    .container-card {
                        width: 720px;
                        margin: 24px auto;
                        padding: 24px 48px;
                        background-color: ${BLACK_STONE.DARK};
                        border-radius: 16px;
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
                `}
            </style>
        </>
    );
}

export default TermsOfService;
