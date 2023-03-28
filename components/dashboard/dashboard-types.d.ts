/**
 * This defines the data type for Link Portfolio props.
 */
type LinkPortfolioCardProps = {
    rta: RTAType;
};

/**
 * This defines the data type for Mutual Fund types.
 */
type MutualFundType = 'Equity' | 'Debt';

/**
 * This defines the data type for RTA types.
 */
type RTAType = 'CAMS' | 'KFintech';

export { LinkPortfolioCardProps, MutualFundType, RTAType };
