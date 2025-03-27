/* eslint-disable no-unused-vars */
import React from 'react'
import { FaHandshake, FaInfo, FaRegClock } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { FaLocationPin } from 'react-icons/fa6';

const UseItemDetail = ({
  productTitle,
  postdate,
  KMdriven,
  location,
  price,
  contact,
  imageUrl,
  year,
  description,
}) => {
  return (
    <>
      <div className='w-full '>
        <motion.h1
          className='text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Used {productTitle} for Sale
        </motion.h1>

        <motion.div
          className='overflow-hidden flex flex-col md:flex-row items-center md:items-start'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={imageUrl}
            alt={productTitle}
            className='w-full md:w-1/2 h-64 md:h-[400px] object-cover rounded-lg'
            loading='lazy'
            decoding='async'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <div className='py-6 px-4 flex flex-col lg:gap-9 md:gap-6 gap-3 w-full '>
            <h1 className='text-2xl font-bold text-gray-800'>{productTitle}</h1>
            <p className='text-gray-600 text-sm'>Posted {postdate} Days Ago | {KMdriven} KMs Driven</p>
            <p className='text-gray-700 flex items-center'><FaLocationPin/> Location: {location}</p>
            <div className='text-blue-600 font-semibold text-xl'>Price: NPR {price}</div>
            <p className='text-gray-700'>Contact: {contact}</p>

            <div className='flex flex-wrap mt-4 gap-4'>
              <motion.button
                className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md'
                whileHover={{ scale: 1.1 }}
              >
                <FaInfo /> Get Details
              </motion.button>
              <motion.button
                className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md'
                whileHover={{ scale: 1.1 }}
              >
                <FaRegClock /> Schedule a Visit
              </motion.button>
              <motion.button
                className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md'
                whileHover={{ scale: 1.1 }}
              >
                <FaHandshake /> Negotiate Price
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mt-6 grid lg:grid-cols-2 md:grid-cols-2 gap-6'
        >
          <div>
            <h2 className='text-xl font-semibold text-gray-800 uppercase'>Overview</h2>
            <table className='w-full mt-2 border-gray-300 text-gray-800 rounded-lg shadow-sm'>
              <tbody>
                {[
                  ['Ad', productTitle],
                  ['Added', postdate ? `Posted ${postdate} Days Ago` : 'N/A'],
                  ['KMs Driven', KMdriven || 'N/A'],
                  ['Location', location || 'N/A'],
                  ['Price', `NPR ${price || 'N/A'}`],
                  ['Contact', contact || 'N/A'],
                ].map(([key, value], index) => (
                  <tr key={index} className='border-t border-gray-300'>
                    <td className='p-3 bg-gray-100 font-medium'>{key}</td>
                    <td className='p-3'>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 className='text-xl font-semibold text-gray-800 uppercase'>Description</h2>
            <p className='text-gray-700 mt-2 text-justify line-clamp-10'>{description}</p>
          </div>

        </motion.div>
      </div>
    </>

  )
}

export default UseItemDetail