import React from 'react';
import { Modal as AntModal, ModalProps } from 'antd';
import { BLACK_STONE, WHITE_MARBLE } from '../../core/constants/colors';

const CustomModal = (props: ModalProps) => (
    <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <AntModal {...props} mask>
            {props?.children}
        </AntModal>
        <style jsx global>
            {`
                .ant-modal .ant-modal-content {
                    background-color: ${BLACK_STONE.EXTRA_DARK};
                    display: grid;
                    align-items: center;
                    justify-content: center;
                }
                .ant-modal .ant-modal-title {
                    background-color: ${BLACK_STONE.EXTRA_DARK};
                    color: ${WHITE_MARBLE.LIGHT};
                }
            `}
        </style>
    </>
);

export default CustomModal;
