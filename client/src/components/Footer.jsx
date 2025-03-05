import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp, FaAward } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='bg-black h-96 w-full text-white py-10 font-light text-lg'>
      <div className='m-auto flex justify-around items-center w-full'>
        <div className='flex justify-between items-start flex-col gap-2'>
          <div className='text-3xl'>find us</div>
          <p>Building 6, Hero Honda Chowk, Block B,</p>
          <p>Sector 34, Gurugram, Haryana 122001</p>
          <p>blogs</p>
          <p>media</p>
          <p>privacy policy</p>
          <p>career</p>
          <p>contact us</p>
        </div>

        <div className='flex justify-center items-center flex-col gap-6'>
          <div className='flex justify-between items-center gap-6 text-2xl'>
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaPinterest />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
          <p>
            branding by: essentia environments
          </p>
          <p className='flex items-center gap-3'><FaAward size={40} />awards & achievement</p>
        </div>

        <div className='flex justify-between items-center flex-col gap-3'>
          <p>info@essentiaenvironments.com</p>
          <p>+91-9810088877</p>
          <div className='h-36'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56130.2393532381!2d77.02701011235362!3d28.445197039017746!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19376d00001b%3A0x481f7bccb176ef9d!2sessentia%20-%20interior%20design%2C%20bespoke%20furniture%20manufacturer%20%26%20contractor%20in%20india!5e0!3m2!1sen!2sus!4v1741199688963!5m2!1sen!2sus"
              width="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
