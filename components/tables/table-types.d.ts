/**
 * This defines the data type for NAV Index item type.
 */
type NAVIndexItem = {
    id: number;
    fundName: string;
    nav: number;
    change: number;
    maxLoan: number;
};

/**
 * This defines the data type for NAV Index Table props.
 */
type NAVIndexTableProps = {
    items: NAVIndexItem[];
};

/**
 * This defines the data type for Pledgefolio props.
 */
type PledgefolioCounterProps = {
    quantity?: number;
    maxQuantity: number;
    id: string;
    setFolioItems;
    folioItems;
    defaultQuantity: number;
};

/**
 * This defines the data type for Pledgefolio props.
 */
export interface PledgefolioTableProps {
    folioItems: PledgefolioItem[];
    setFolioItems: Dispatch<SetStateAction<PledgefolioItem[]>>;
}
export interface PledgefolioItem {
    aggregator: RTAType;
    quantity: number;
    fundName: string;
    id: number;
    maxQuantity: number;
    type: MutualFundType;
    loanToValueRatio: number;
}

/**
 * This defines the data type for Portfolio Table props.
 */
type PortfolioTableProps = {
    portfolioFundItems: {
        fundName: string;
        id: number;
        amount: number;
        quantity: number;
        type: MutualFundType;
    }[];
    rta: RTAType;
};

/**
 * This defines the data type for Repayment Timeline Table props.
 */
type RepaymentTimelineTableProps = {
    repaymentItems: {
        amount: number;
        date: string;
        id: number;
        status: string;
    }[];
    reviewPage: boolean;
};

/**
 * This defines the data type for Review Pledgefolio Table props.
 */
type ReviewPledgefolioTableProps = {
    folioItems: {
        aggregator: RTAType;
        fundName: string;
        id: number;
        quantity: number;
        type: MutualFundType;
    }[];
};

export {
    NAVIndexItem,
    NAVIndexTableProps,
    PledgefolioCounterProps,
    PledgefolioTableProps,
    PortfolioTableProps,
    RepaymentTimelineTableProps,
    ReviewPledgefolioTableProps
};
