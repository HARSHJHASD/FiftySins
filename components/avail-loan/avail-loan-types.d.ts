/**
 * This defines the data type for BankDetailsLinkingActions props.
 */
type BankDetailsLinkingActionsProps = {
    ctaAction: () => void;
    bankInfo?: any;
    setBankInfo?: (params: any) => void;
};

/**
 * This defines the data type for PersonalDetailsCard props.
 */
type PersonalDetailsProps = {
    panLinkStatus: number;
};

export { BankDetailsLinkingActionsProps, PersonalDetailsProps };
