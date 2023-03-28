import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
// import { useEffect } from 'react';
// import TagManager from 'react-gtm-module';
import Script from 'next/script';
// import '../components/main.css';
import { AuthContextProvider } from '../utils/AuthContext';
import AdBlockerCheck from '../utils/ad-blocker-checker';
import ErrorAdBlocker from '../components/error-ad-blocker';

/**
 * This class is used to serve custom App component used by Next.js to initialize page.
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2022-03-02
 * @modifier
 * @modified
 * @since 0.1.0
 */
const CustomApp = ({ Component, pageProps }: any) => {
    const [isAdBlockerActive, setIsAdBlockerActive] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAdBlockerActive(AdBlockerCheck());
        }, 0);
    }, []);

    if (isAdBlockerActive) {
        return <ErrorAdBlocker />;
    }

    return (
        // useEffect(() => {
        //     TagManager.initialize({
        //         gtmId: 'GTM-W4GDHJP'
        //     });
        // }, []);

        // eslint-disable-next-line react/jsx-props-no-spreading
        <AuthContextProvider>
            <Script
                src="https://app.digio.in/sdk/v10/digio.js"
                strategy="beforeInteractive"
            />
            <Component {...pageProps} />
        </AuthContextProvider>
    );
};

export default CustomApp;
