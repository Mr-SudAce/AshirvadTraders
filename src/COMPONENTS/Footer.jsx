import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='bg-gray-950 py-8 px-6'>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center text-center gap-8'>
                    {/* Logo Section */}
                    <div className='flex flex-col items-center'>
                        <img src="https://picsum.photos/1080/" alt="Company Logo" className='w-24 h-24 rounded-full shadow-lg transition transform hover:scale-110' />
                        <p className='text-white text-2xl font-semibold mt-2'>Logo</p>
                    </div>

                    {/* Links Section */}
                    <div className='flex flex-col items-center'>
                        <p className='text-white text-2xl font-semibold mb-3'>Links</p>
                        <ul className='text-white space-y-2'>
                            {['Home', 'Shop', 'About', 'Contact'].map((link, index) => (
                                <li key={index} className='hover:text-green-400 cursor-pointer transition duration-300'>{link}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className='flex flex-col items-center'>
                        <p className='text-white text-2xl font-semibold mb-3'>Contact</p>
                        <p className='text-white opacity-90'>123@example.com</p>
                        <p className='text-white opacity-90'>Phone: 123-456-7890</p>
                        <div className='flex gap-4 mt-4'>
                            {[FaFacebook, FaInstagram, FaYoutube, FaTiktok].map((Icon, index) => (
                                <Icon key={index} className='text-white text-2xl hover:text-green-400 cursor-pointer transition duration-300' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer