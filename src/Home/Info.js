import React from 'react';
import InfoCard from './InfoCard';
import clock from "../assets/icons/clock.svg"
import location from "../assets/icons/marker.svg"
import phone from "../assets/icons/phone.svg"

const Info = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-32 w-8/6">
            <InfoCard cardTitle="Opening Hours " bgClass="bg-gradient-to-r from-secondary to-primary" img={clock} cardText="08:00 AM - 10:00 PM"></InfoCard>
            <InfoCard cardTitle="Our Location " bgClass="bg-accent" img={location} cardText="Dhaka, Bangladesh"></InfoCard>
            <InfoCard cardTitle="Contact" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone} cardText="+088 01700000000"></InfoCard>
        </div>
    );
};

export default Info;