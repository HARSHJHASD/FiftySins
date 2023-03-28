import { useState } from 'react';

import BankDetailsInProcess from './bank-details-in-process';
import BankDetailsLinked from './bank-details-linked';
import BankDetailsUnlinked from './bank-details-unlinked';

import Loading from '../../ui-components/loading';

import useBankStore from '../../../store/bank';

/**
 * This function is used as the "Bank Details" card on the "Avail Loan" screen of the web app.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.13.0
 */
function BankDetails() {
    const { isLoading, linkBankAccount, banks } = useBankStore(
        (state) => state
    );
    const [bankLinkStatus, setBankLinkStatus] = useState(
        banks?.length !== 0 ? 2 : 0
    );
    const [bankInfo, setBankInfo] = useState({});

    const initiateBankLinkProcess = () => {
        linkBankAccount(bankInfo);
    };

    let bankElement: JSX.Element;
    if (bankLinkStatus === 0) {
        bankElement = (
            <BankDetailsUnlinked ctaAction={() => setBankLinkStatus(1)} />
        );
    } else if (bankLinkStatus === 1) {
        bankElement = (
            <BankDetailsInProcess
                bankInfo={bankInfo}
                setBankInfo={setBankInfo}
                ctaAction={initiateBankLinkProcess}
            />
        );
    } else {
        bankElement = <BankDetailsLinked />;
    }

    if (isLoading) {
        return <Loading />;
    }

    return <div>{bankElement}</div>;
}

export default BankDetails;
