import React from 'react';

import Main from '../components/Home';
import Services from '../components/Services';
import AdvantagesAndArguments from '../components/AdvantagesAndArguments';
import AboutUS from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import { Mej } from '../components/Mej';

export default function Home() {
    return (
        <>
            <Main />
            <Services />
            <AdvantagesAndArguments />
            <AboutUS />
            <ContactUs />
            <Mej />
        </>
    );
}
