import Router from 'next/router';
import { useEffect, useState } from 'react';
// import Image from 'next/image';
import { AQUAMARINE } from '../../core/constants/colors';
// import { TextButton2 } from '../typography';

import useGlobalStore from '../../store/global';
import useProfileStore from '../../store/profile';
import useDigioStore from '../../store/digio';
import useBankStore from '../../store/bank';

import BankDetails from './bank-details';
import PANDetails from './pan-details';
import UserDetails from './user-details';
import UserCredentialDetails from './user-credential-details';


/**
 * This function is used as a Stepper component for the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.19.0
 */

const initialBankInfoState = {
    bankName: '',
    accountType: '',
    accountNumber: '',
    ifscCode: '',
    userId: '',
    accountName: ''
};


function OnboardingStepper() {
    const [stepsStatuses, setStepsStatuses] = useState([
        { id: 0, status: 'ACTIVE' },
        { id: 1, status: 'INACTIVE' },
        { id: 2, status: 'INACTIVE' },
        { id: 3, status: 'INACTIVE' }

    ]);

    const { fireBaseUser, signUpParams, setSignUpParams, userSignIn } =
        useGlobalStore((state) => state);

    const [userInfo, setUserInfo] = useState({ ...signUpParams });
    const [panNumber, setPanNumber] = useState();
    const [bankInfo, setBankInfo] = useState(initialBankInfoState);
    const [isSubmit, setIsSubmit] = useState(false);
    const createUser = useProfileStore((state) => state.createUser);
    const { fiftyFinUser, fetchUser, isUserCreated } = useProfileStore(
        (state) => state
    );
    const { isBankAccountLinkSuccess, linkBankAccount } = useBankStore(
        (state) => state
    );

    const { kycVerification, isKycVerified } = useDigioStore((state) => state);

    useEffect(() => {
        if (isBankAccountLinkSuccess) {
            userSignIn({
                email: signUpParams.email,
                password: signUpParams.password
            });
            Router.push('/dashboard');
        }
    }, [isBankAccountLinkSuccess]);

    useEffect(() => {
        if (isUserCreated) {
            setStepsStatuses([
                { id: 0, status: 'COMPLETED' },
                { id: 1, status: 'COMPLETED' },
                { id: 2, status: 'ACTIVE' },
                { id: 3, status: 'INACTIVE' }

            ]);
        }
    }, [isUserCreated]);

    useEffect(() => {
        if (isKycVerified) {
            setStepsStatuses([
                { id: 0, status: 'COMPLETED' },
                { id: 1, status: 'COMPLETED' },
                { id: 2, status: 'COMPLETED' },
                { id: 3, status: 'ACTIVE' }
            ]);
        }
    }, [isKycVerified]);

    useEffect(() => {
        if (fireBaseUser && !fiftyFinUser) {
            fetchUser({ idType: 'email', id: fireBaseUser?.email });
        }
    }, [fireBaseUser]);

    useEffect(() => {
        if (fiftyFinUser) {
            setBankInfo({
                ...bankInfo,
                userId: fiftyFinUser.id?.toString(),
                accountName: `${fiftyFinUser.first_name} ${fiftyFinUser.last_name}`
            });
        }
    }, [fiftyFinUser]);
    const submitPersonalDetails = () => {
        setSignUpParams(userInfo);
        setIsSubmit(true)
          if ( userInfo.firstName &&  userInfo.lastName && userInfo.phoneNumber && userInfo.dateOfBirth ) {
            setStepsStatuses([
            { id: 0, status: 'COMPLETED' },
            { id: 1, status: 'ACTIVE' },
            { id: 2, status: 'INACTIVE' },
            { id: 3, status: 'INACTIVE' }

        ]);
        setIsSubmit(false)
          }

    };
    
    const submitCrendentialDetails = () => {
        setIsSubmit(true)
        setSignUpParams(userInfo);
        createUser(userInfo);
        
    };
    const skipPanDetails = () => {
        setStepsStatuses([
            { id: 0, status: 'COMPLETED' },
            { id: 1, status: 'COMPLETED' },

            { id: 2, status: 'INACTIVE' },
            { id: 3, status: 'ACTIVE' }
        ]);
    };

    const submitPANDetails = () => {
        if (fiftyFinUser) {
            kycVerification({
                userId: fiftyFinUser.id.toString(),
                idType: 'PAN',
                idNumber: panNumber
            });
        }
    };

    const skipBankDetails = () => {
        userSignIn({
            email: signUpParams.email,
            password: signUpParams.password
        });
        Router.push('/dashboard');
    };

    const submitBankDetails = async () => {
        linkBankAccount(bankInfo);
    };

    const personalDetailsForm = (
        <UserDetails
        isSubmit={isSubmit}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            submitPerformAction={submitPersonalDetails}
        />
    );
    const credentialDetailsForm = (
       <UserCredentialDetails
       isSubmit={isSubmit}
       userInfo={userInfo}
       setUserInfo={setUserInfo}
       submitPerformAction={submitCrendentialDetails}
       />
    );

    const panDetailsForm = (
        <PANDetails
            setPanNumber={setPanNumber}
            skipPerformAction={skipPanDetails}
            submitPerformAction={submitPANDetails}
        />
    );

    const bankDetailsForm = (
        <BankDetails
            bankInfo={bankInfo}
            setBankInfo={setBankInfo}
            skipPerformAction={skipBankDetails}
            submitPerformAction={submitBankDetails}
        />
    );
    let view: JSX.Element;
    if (stepsStatuses[0].status === 'ACTIVE') {
        view = personalDetailsForm;
    } 
    else  if (stepsStatuses[1].status === 'ACTIVE') {
        view = credentialDetailsForm;
    } 
    else if (stepsStatuses[2].status === 'ACTIVE') {
        view = panDetailsForm;
    } else {
        view = bankDetailsForm;
    }

    // const getStepperNumberLabel = (
    //     status: string,
    //     text: number
    // ): JSX.Element => {
    //     let element: JSX.Element;
    //     if (status === 'ACTIVE') {
    //         element = (
    //             <TextButton2 textColor={BLACK_STONE.EXTRA_DARK}>
    //                 {text.toString()}
    //             </TextButton2>
    //         );
    //     } else if (status === 'INACTIVE') {
    //         element = (
    //             <TextButton2 textColor={AQUAMARINE.S600}>
    //                 {text.toString()}
    //             </TextButton2>
    //         );
    //     } else {
    //         element = (
    //             <Image
    //                 alt="check"
    //                 className=""
    //                 src="/icons/check-black-stone-extra-dark.svg"
    //                 width={32}
    //                 height={32}
    //             />
    //         );
    //     }

    //     return element;
    // };

    // const getReturnT;

    return (
        <div className="container-stepper">
            <div className="container-stepper-icons" />
            <div className="container-stepper-content">{view}</div>
            <style jsx>
                {`
                    .container-divider {
                        height: 2px;
                        color: ${AQUAMARINE.S600};
                    }
                `}
            </style>
        </div>
    );
}

export default OnboardingStepper;
