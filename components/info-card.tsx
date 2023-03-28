// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

import TextInput from './ui-components/text-input';
import { Heading6, Body } from './typography';
import { BLACK_STONE, WHITE_MARBLE } from '../core/constants/colors';

type InfoCardProps = {
    isEdit?: boolean;
    isNameEdit?: boolean;
    className?: string;
    title: string;
    description: any;
    iconUrl?: string;
    iconWidth?: string;
    iconHeight?: string;
};

export default function InfoCard(props: InfoCardProps) {
    const {
        className,
        isEdit,
        isNameEdit,
        title,
        description,
        iconUrl,
        iconWidth,
        iconHeight
    } = props;

    const StyledInfoCard = styled.div`
        padding: 18px 24px;
        width: 45%;
        background-color: #3c3c3c;
        border-radius: 16px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: flex-start;
    `;

    const StyledInfoEditCard = styled(StyledInfoCard)``;

    const InfoCardWrapper = styled.div``;

    const InfoCardTitle = styled(Heading6)`
        margin: 0 0 8px;
        color: #e1e1e1;
    `;
    const InfoEditCardTitle = styled(InfoCardTitle)`
        margin: 0 0 2px;
    `;

    const InfoCardDescription = styled(Body)`
        margin: 0;
        color: #ffffff;
    `;

    const CardImage = styled.img`
        width: ${iconWidth || '24px'};
        height: ${iconHeight || '32px'};
    `;

    const InfoEditInput = styled(TextInput)<any>``;

    const SecondRowEditWrapper = styled.div`
        margin-top: 16px;
    `;

    if (isEdit) {
        return (
            <StyledInfoEditCard className={className}>
                <InfoCardWrapper>
                    <InfoEditCardTitle>
                        {isNameEdit ? 'First Name' : title}
                    </InfoEditCardTitle>
                    <InfoEditInput
                        backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                        foregroundColor={WHITE_MARBLE.LIGHT}
                        maxlength={10}
                        width="300px"
                        type="text"
                        value={description}
                    />
                    {isNameEdit && (
                        <SecondRowEditWrapper>
                            <InfoEditCardTitle>Last Name</InfoEditCardTitle>
                            <InfoEditInput
                                backgroundColor={BLACK_STONE.EXTRA_LIGHT}
                                foregroundColor={WHITE_MARBLE.LIGHT}
                                maxlength={10}
                                width="300px"
                                type="text"
                                value={description}
                            />
                        </SecondRowEditWrapper>
                    )}
                </InfoCardWrapper>
            </StyledInfoEditCard>
        );
    }

    return (
        <StyledInfoCard className={className}>
            <InfoCardWrapper>
                <InfoCardTitle>{title}</InfoCardTitle>
                <InfoCardDescription>{description}</InfoCardDescription>
            </InfoCardWrapper>
            {iconUrl && <CardImage alt="lock" src={iconUrl} />}
        </StyledInfoCard>
    );
}
