import React from 'react';
import doctor from '../assets/images/doctor.png';
import appointment from '../assets/images/appointment.png';
import Button from '../Shared/Button';
const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />

            </div>
            <div className='flex-1'>
                <h3 className='text-xl font-bold text-primary'>Appointment</h3>
                <h2 className='text-white text-3xl'>Make an appointment Today</h2>
                <p className='text-white mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, est aliquid? Minima officia blanditiis recusandae sint hic accusamus neque, saepe at ad excepturi harum sunt quam culpa est perspiciatis tempore!</p>

                <Button>Get started</Button>



            </div>

        </section>
    );
};

export default MakeAppointment;