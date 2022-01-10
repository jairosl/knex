import React from 'react';

import Main from '../components/Home';
import Services from '../components/Services';
import AdvantagesAndArguments from '../components/AdvantagesAndArguments';
import AboutUS from '../components/AboutUs';

export default function Home() {
    return (
        <>
            <Main />
            <Services />
            <AdvantagesAndArguments />
            <AboutUS />
        </>
    );
}
