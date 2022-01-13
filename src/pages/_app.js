import React from 'react';
import GlobalStyle from '../styles/global';

import Footer from '../components/Footer';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
