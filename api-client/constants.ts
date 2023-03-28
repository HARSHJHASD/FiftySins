/* eslint-disable import/prefer-default-export */

export const BASE_URLS = {
    authBaseUrl: process.env.AUTH_BASE_URL,
    digioBaseUrl: process.env.DIGIO_BASE_URL,
    portfolioBaseUrl: process.env.PORTFOLIO_BASE_URL,
    loansBaseUrl: process.env.LOANS_BASE_URL,
    firebaseBaseUrl: `${process.env.FIREBASE_BASE_URL}`,
    firebaseApiKey: `${process.env.FIREBASE_API_KEY}`
};
// export const BASE_URLS = {
//     authBaseUrl: 'https://fifty-fin-auth-n77ca4jn5a-el.a.run.app',
//     digioBaseUrl: 'https://fifty-fin-digio-n77ca4jn5a-el.a.run.app',
//     portfolioBaseUrl: 'https://fifty-fin-portfolio-n77ca4jn5a-el.a.run.app',
//     loansBaseUrl: 'https://fifty-fin-loans-n77ca4jn5a-el.a.run.app',
//     firebaseBaseUrl: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword`,
//     firebaseApiKey: 'AIzaSyDA8-8vMOv0TeKvwFw673y8EPLJsiT83Qs'
// };
