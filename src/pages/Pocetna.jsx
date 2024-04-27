import React from 'react'
//icons
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

function Pocetna() {
    return (
        // container
        <div>
            {/* prvi deo */}
            <div className='flex'>
                <div className='w-[50%] bg-[#111827] flex text-center flex-col  items-center font-bold font-serif lg:h-[500px] md:h-[350px] h-[200px] '>
                    <h1 className='lg:text-5xl md:text-3xl text-white m-auto shadow-2xl p-5 text-xl'>MI BRINEMO O VASIM FAROVIMA</h1>
                    <p className='text-white text-xl m-5 hidden lg:block md:block'>Servis kojem mozete verovati</p>
                    <hr className='w-[60%] text-white lg:mb-10 md:mb-6 border-2' />
                    <Link to={'/kontakt'} className='lg:text-3xl md:text-2xl text-white shadow-2xl p-5 text-l flex items-center gap-2'>KONTAKT<GoArrowRight /></Link>
                </div>
                <div className='w-[50%]'>
                    <img src="/Audi.webp" alt="Audi A6" className='w-full lg:h-[500px] md:h-[350px] h-[200px]' />
                </div>

            </div>
            {/* drugi deo */}
            <div className='flex'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Pocetna