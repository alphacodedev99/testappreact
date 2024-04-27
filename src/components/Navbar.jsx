import React, { useEffect, useState } from 'react';
// icons
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


// motion
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


function Navbar() {
    const telefonBroj = '064 94 95 922';
    const [toggle, setToggle] = useState(true);

    const handleClick = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setToggle(true);
            }
            else if (window.innerWidth < 768) {
                setToggle(false);

            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        // {container}
        <div className='bg-[#111827]'>
            {/* mini info */}
            <div className='w-full lg:w-auto flex justify-between h-[50px] items-center '>
                <div className='flex lg:gap-5 md:gap-5'>
                    <a href={`tel:${telefonBroj}`} className='text-white ml-5 justify-center flex' target='_blank'><FaPhoneAlt size={25} className='mr-5' /><span className='lg:block md:block hidden'>Pozovite nas</span></a>
                    <a href='https://www.google.com/maps/dir//svetozara+markovic+1,+Lazarevac/@44.3803016,20.1974505,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x475a01d94d0752e7:0x4c41a02f529df390!2m2!1d20.2798512!2d44.3803312?hl=sr&entry=ttu' className='justify-center items-center flex text-white gap-3' target='_blank'><FaLocationDot size={25} color='white' /><span className='lg:block md:block hidden'>Lokacija</span></a>
                </div>
                <div>
                    <GiHamburgerMenu onClick={handleClick} className='lg:hidden md:hidden cursor-pointer' color='white' size={30} />
                </div>
                <div className='flex'>
                    <a href='https://www.facebook.com/ProAutoLAZAREVAC/?locale=sr_RS' target='_blank' className='text-white mr-5 justify-center flex gap-3'><FaFacebook size={25} /><span className='lg:block md:block hidden'>Facebook</span></a>
                    <a href="https://www.instagram.com/servis_farova_proauto/" target='_blank' className='text-white mr-5 justify-center flex'><GrInstagram size={25} className='mr-5' /><span className='lg:block md:block hidden'>Instagram</span></a>
                </div>

            </div>
            <div className='lg:flex md:flex h-[200px] gap-5 flex items-center w-full border-b-2 bg-[#030712] h-[260px] lg:h-[320px] md:h-[290px] p-5 flex-col '>
                {/* {telefon} */}

                {/* {slika} */}
                <div className='flex items-center justify-center '>
                    <img className='lg:w-[280px] rounded-md lg:h-[180px]  w-[200px] h-[150px] shadow-xl border ' src="/pro auto.webp" alt="ProAuto" />
                </div>
                <div className='gap-4 flex flex-col items-center justify-center'>

                    <div >
                        <AnimatePresence>
                            {toggle && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className='p-5'
                                >
                                    <ul className='flex lg:visible text-gray-700 lg:text-2xl md:text-2xl text-xl bg-white gap-5 p-2 text-center rounded-b-lg ' style={{ backgroundColor: '#030712', color: 'white' }}>
                                        <Link to={'/'} className='hover:transition-transform duration-400 transform hover:scale-125 cursor-pointer'>Početna</Link>
                                        <Link to={'/usluge'} className='hover:transition-transform duration-400 transform hover:scale-125 cursor-pointer'>Usluge</Link>
                                        <Link to={'/kontakt'} className='hover:transition-transform duration-400 transform hover:scale-125 cursor-pointer'>Kontakt</Link>
                                    </ul>

                                </motion.div>

                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
