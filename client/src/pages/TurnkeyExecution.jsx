import React from 'react';
import Interior3 from "../assets/img/interior3.jpg";
import Interior1 from "../assets/img/interior1.jpg";
import Interior2 from "../assets/img/interior2.jpg";
import Exterior1 from "../assets/img/exterior1.jpg";
import Exterior2 from "../assets/img/exterior2.jpg";
import ImageCard from '../components/ImageCard';
import { Link } from 'react-router-dom';

const TurnkeyExecution = () => {
  return (
    <section>
      <div>
        <img src={Interior3} alt="" className='w-full h-[500px] object-cover mt-20 ' />
      </div>
      <header className='my-16'>
        <div className="text-center">
          <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
            turnkey interior solutions: seamless execution from concept to reality
          </p>
        </div>
      </header>
      <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
        <p className='my-8'>
          In the realm of high-end interior design, the complexities of managing multiple contractors and coordinating various design elements can often overshadow the excitement of creating a dream space. Essentia Environments understands this challenge, which is why we specialize in providing comprehensive <strong>end-to-end turnkey interior design solutions</strong>. We alleviate the stress and streamline the process, positioning ourselves as your trusted <strong>Turnkey Interior designer</strong>.
        </p>
        <p className='my-8'>
          Our approach is built on a foundation of meticulous planning and disciplined execution. We believe that a successful project is not just about aesthetics; it’s also about efficiency and reliability. Our dedicated team operates with a commitment to on-time, within-budget delivery, ensuring that your vision is realized without any unexpected delays or cost overruns. This unwavering dedication allows us to provide a <strong>seamless</strong> experience from concept to completion.
        </p>

        <p className='my-8'>
          We recognize that our clientele often possesses demanding, high-end visions. These visions, while inspiring, can present significant logistical challenges. Essentia Environments excels at transforming these intricate concepts into flawlessly executed <strong>luxury</strong> realities. Our expertise in project management and our network of trusted contractors enable us to navigate complexities with ease, ensuring that every detail is meticulously addressed.
        </p>

        <p className='my-8'>
          Our <strong>solutions</strong> are designed to provide a stress-free experience, allowing you to focus on the excitement of seeing your dream space come to life. We handle all aspects of the project, from initial design consultations and material selection to construction, installation, and final styling. This comprehensive approach eliminates the need for you to juggle multiple contractors and manage disparate timelines.
        </p>

        <p className='my-8'>
          Essentia Environments is committed to <strong>offering</strong> a level of service that transcends expectations. We believe in building strong client relationships based on trust, transparency, and open communication. We keep you informed at every stage of the process, providing regular updates and addressing any concerns promptly. Our goal is to create a collaborative environment where your voice is heard, and your vision is realized.
        </p>

        <p className='my-8'>
          The true essence of our <strong>end-to-end turnkey interior design solutions</strong> lies in our ability to deliver a <strong>seamless</strong> and luxurious experience. We understand that your time is valuable, and we strive to maximize efficiency without compromising quality. By entrusting your project to Essentia Environments, you can be confident that your dream space will be transformed into a tangible reality with a level of sophistication and refinement that reflects your unique style and discerning taste. Our commitment to excellence makes us the premier <strong>turnkey Interior designer</strong> of choice.
        </p>
      </main>

      <main className='my-5 p-5'>
        <div className='flex justify-center items-center gap-10 mt-8 flex-wrap'>
          <ImageCard title="apartment camellias (gurgaon)" imageSrc={Interior1} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="whiteland snowflat (gurgaon)" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="show flat jaipur" imageSrc={Interior2} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="office gurgaon" imageSrc={Exterior1} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="office-gwalior" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="villa-faridabad" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="elan sales gallery gurgaon" imageSrc={Exterior2} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="farm house vasant kunj" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="apartment magnolias" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="villa faridabad" imageSrc={Exterior1} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="villa maharani bagh" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
          <ImageCard title="villa maharani bagh" imageSrc={Exterior2} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="w-[500px]" />
        </div>
      </main>
      <main className='text-center my-10'>
        <Link to="/interiors-and-designs">
          <button className='bg-black p-4 text-white rounded transition-all duration-300 hover:bg-[#DBDBDB] hover:text-black cursor-pointer'>back to interior designs</button>
        </Link>
      </main>
    </section>
  )
}

export default TurnkeyExecution
