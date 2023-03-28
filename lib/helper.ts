'use client';
/* eslint-disable import/prefer-default-export */
import digioPopup from '../utils/digio-container';

const openDigio = (processId, email, accessToken) => {
    const component = digioPopup(processId, email, accessToken);
    component.init();
    component.submit();
};

export default openDigio;
