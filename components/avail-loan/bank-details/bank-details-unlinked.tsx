import {
    AQUAMARINE,
    BLACK_STONE,
    SPESSARTITE
} from '../../../core/constants/colors';
import { Heading6 } from '../../typography';
import Button from '../../ui-components/button';
import { BankDetailsLinkingActionsProps } from '../avail-loan-types';

/**
 * This function is used as the "Bank Details - Unlinked" card on the "Avail Loan" screen of the web app.
 *s
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2023-03-08
 * @modifier
 * @modified
 * @since 0.13.0
 */
function BankDetailsUnlinked(props: BankDetailsLinkingActionsProps) {
    return (
        <div className="container-header">
            <Heading6
                className="heading-personal-info"
                textColor={BLACK_STONE.DARK}
            >
                Bank Details
            </Heading6>
            <Button
                backgroundColor={BLACK_STONE.DARK}
                buttonType="PRIMARY"
                buttonText="Link Bank Account"
                className="button-avail-pan-link-bank"
                foregroundColor={AQUAMARINE.S600}
                onButtonClick={props.ctaAction}
                width="240px"
            />
            <style jsx>
                {`
                    .container-header {
                        display: flex;
                        width: 520px;
                        padding: 24px;
                        background-color: ${SPESSARTITE.S300};
                        border-radius: 24px;
                        align-items: center;
                        margin-bottom: 12px;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .button-avail-pan-link-bank {
                        display: block;
                        width: fit-content;
                        margin-left: auto;
                    }
                `}
            </style>
        </div>
    );
}

export default BankDetailsUnlinked;
