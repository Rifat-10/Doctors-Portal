import React from 'react';
import Service from './Service';
import fluoride from '../assets/images/fluoride.png';
import cavity from '../assets/images/cavity.png';
import whitening from '../assets/images/whitening.png';
import treatment from '../assets/images/treatment.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-12'>
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}>
                        </Service>)
                }
            </div>

            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl " />
                    <div>
                        <h1 class="text-5xl font-bold ml-16">Exceptional Dental Care</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;