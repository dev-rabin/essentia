import React from 'react';
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Milestones = ({title}) => {
  return (
   <>
    <section className='bg-[#F8F8F8] p-5'>
          <div className="text-center">
            <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-[-8px]'>
              {title}
            </p>
          </div>

          <div className='flex justify-center items-center flex-wrap gap-5 my-5'>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-around items-center flex-col gap-4 bg-white p-5 h-52 w-96'>
              <div><p className='text-7xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-[-8px]'>
                <CountUp end={25} duration={2} />+
              </p></div>
              <p className=' text-gray-600'>years experience</p>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-around items-center flex-col gap-4 bg-white p-5 h-52 w-96'>
              <div><p className='text-7xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-[-8px]'>
                <CountUp end={1000} duration={2} />+
              </p></div>
              <p className=' text-gray-600'>projects globally</p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className='flex justify-around items-center flex-col gap-4 bg-white p-5 h-52 w-96'>
              <div><p className='text-7xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-full after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-[-8px]'>
                <CountUp end={700} duration={2} />+
              </p></div>
              <p className=' text-gray-600'>team members</p>
            </motion.div>
          </div>
          <div>
          </div>
        </section>
   </>
  )
}

export default Milestones