/* eslint-disable prettier/prettier */
import React from 'react';

type WrapperCardProps = {
    // width: string;
    height?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    borderColor?: string;
    children?: React.ReactNode;
    gap?: string;
};


function Cardwrapper(props: WrapperCardProps) {

    const padding = () => (props.padding ? props.padding : '16px');
    const borderColor = () => (props.borderColor ? props.borderColor : "#BFBFBF")
    const borderRadius = () => (props.borderRadius ? props.borderRadius : "16px")
    const gap = () => (props.gap ? props.gap : "40px")
    const margin =() => (props.margin ? props.margin : "auto")

    return (
        <div className="container-card-wrapper">
            <div className="container-card-wrapper-content">
                {props.children}
            </div>
            <style jsx>
                {`
                    .container-card-wrapper {
                        display: flex;
                        flex-direction: column;
                    }


                    .container-card-wrapper-content {
                        height:${props.height};
                        padding: ${padding()};
                        margin-bottom: ${margin()};
                        border: 1px solid ${borderColor()};
                        border-radius: ${borderRadius()};
                        gap:${gap()};
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        flex: '1 1 auto';
                        overflow: 'auto';
                        display: grid;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 6px;
                        align-items: center;
                    }
                `}
            </style>

            <style jsx global>
                {`
                    .text-input-onboarding-password {
                        grid-column: 1/3;
                    }
                    .button-submit-personal-details-onboarding {
                        grid-column: 2/3;
                    }
                `}
            </style>
        </div>
    );
}
export default Cardwrapper
