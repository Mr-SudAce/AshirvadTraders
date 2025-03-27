/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const UseAboutUs = ({
    name,
    description,
    image,
    contact,
    address,
    location,
    socialMedia
}) => {
    return (
        <>
            <motion.div className='text-black w-full  '>
                <div className='h-screen relative'>
                    <h2 className='text-[var(--superbg2)] font-extrabold absolute text-7xl opacity-75 flex justify-center items-center bg-white w-full max-h-50 h-full z-1 top-3/6 '>{name}</h2>
                <img src={image} alt="About Us" className='w-full opacity-75 h-screen object-cover' />
                </div>
                <div className='px-6'>
                    <p>{description}</p>
                    <p>Contact: {contact}</p>
                    <p>Address: {address}</p>
                    <p>Location: {location}</p>
                    <div>
                        <h4>Follow us:</h4>
                        <ul>
                            <li><Link href={`${socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                            <li><Link href={`${socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">Instagram</Link></li>
                            <li><Link href={`${socialMedia.tiktok}`} target="_blank" rel="noopener noreferrer">TikTok</Link></li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default UseAboutUs;
