import Image from 'next/image';

import ButtonWithIcon from '../ui-components/button-with-icon';
import {
    AQUAMARINE,
    BLACK_STONE,
    SAPPHIRE,
    SPESSARTITE
} from '../../core/constants/colors';
import { Heading5, Heading6 } from '../typography';
import { LinkPortfolioCardProps } from './dashboard-types';

import usePortfolioStore from '../../store/portfolio';
import useProfileStore from '../../store/profile';
import Button from '../ui-components/button';

/**
 * This function defines the Link Portfolio card on the UI.
 *
 * @version 0.1.1
 * @author Aayush Goyal
 * @created 2023-03-06
 * @modifier Aayush Goyal
 * @modified 2023-03-07
 * @since 0.6.0
 */
function LinkPortfolioCard(props: LinkPortfolioCardProps) {
    const { generateKarvyOtp } = usePortfolioStore((state) => state);
    const { fiftyFinUser } = useProfileStore((state) => state);

    const headingText = `Add Your ${props.rta} Portfolio`;
    const subHeadingText = `Link your ${props.rta} Account to import your Mutual Fund.`;

    const cardBackgroundColor =
        props.rta === 'CAMS' ? SAPPHIRE.S400 : SPESSARTITE.S400;

    const linkCAMSPortfolio = () => {};

    const linkKFintechPortfolio = () => {
        if (fiftyFinUser?.id) {
            generateKarvyOtp({ userId: fiftyFinUser.id.toString() });
        }
    };

    const linkMutualFundPortfolio =
        props.rta === 'CAMS' ? linkCAMSPortfolio : linkKFintechPortfolio;

    const rtaIconAltText = props.rta === 'CAMS' ? 'CAMS Logo' : 'KFintech Logo';

    const rtaIconSrc =
        props.rta === 'CAMS'
            ? '/icons/brands/CAMS.svg'
            : '/icons/brands/KFintech.svg';

    return (
        <div className="container-link-portfolio">
            <Heading5
                className="heading-portfolio"
                textColor={BLACK_STONE.EXTRA_DARK}
                margin="auto"
            >
                {headingText}
            </Heading5>
            <Image
                className="icon-rta"
                src={rtaIconSrc}
                alt={rtaIconAltText}
                width={182}
                height={64}
            />
            <Heading6
                className="heading-text"
                margin="auto"
                textColor={BLACK_STONE.EXTRA_DARK}
            >
                {subHeadingText}
            </Heading6>
            {props.rta === 'CAMS' ? (
                <Button
                    className={`button-link-portfolio button-link-${props.rta}`}
                    backgroundColor={BLACK_STONE.EXTRA_DARK}
                    buttonText="Coming Soon"
                    buttonType="PRIMARY"
                    foregroundColor={AQUAMARINE.S600}
                    width="440px"
                    disabled
                    onButtonClick={linkMutualFundPortfolio}
                />
            ) : (
                <ButtonWithIcon
                    backgroundColor={BLACK_STONE.EXTRA_DARK}
                    buttonText={`Link Your ${props.rta} Portfolio`}
                    buttonType="PRIMARY"
                    foregroundColor={AQUAMARINE.S600}
                    className={`button-link-portfolio button-link-${props.rta}`}
                    iconURL="/icons/link-01-black-stone-aquamarine-s600.svg"
                    iconWidth={25}
                    iconHeight={25}
                    iconAltText="Link"
                    onButtonClick={linkMutualFundPortfolio}
                    width="440px"
                />
            )}
            <style jsx>
                {`
                    .container-link-portfolio {
                        background-color: ${cardBackgroundColor};
                        border-radius: 24px;
                        padding: 48px 72px;
                        height: fit-content;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    .button-link-portfolio {
                        width: fit-content;
                        margin: 24px auto 0;
                    }
                    .icon-rta {
                        display: block;
                        height: 64px;
                        margin: 24px auto;
                    }
                `}
            </style>
        </div>
    );
}

export default LinkPortfolioCard;
