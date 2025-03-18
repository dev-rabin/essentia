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
        <img src={Interior3} alt="" className='w-full h-[560px] object-cover' />
      </div>
      <header className='my-10'>
        <div className="text-center">
          <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
            Turnkey Interior Solutions: Effortless Transformation from Vision to Completion
          </p>
        </div>
      </header>
      <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
        <p className='my-8'>
          In the world of <strong>luxury interior design</strong>, managing multiple contractors and synchronizing diverse design elements can become overwhelming, taking away from the joy of crafting your dream space. Shub Shiv Living recognizes this challenge and offers <strong>seamless turnkey interior solutions</strong> that handle every detail from conception to completion. With our expertise, we simplify the process, ensuring a stress-free experience while delivering a space that perfectly reflects your vision. As your trusted turnkey interior designer, we bring efficiency, elegance, and excellence to every project.
        </p>
        <p className='my-8'>
          At Shub Shiv Living, our approach is rooted in meticulous planning and precise execution, ensuring that every project is as efficient as it is <strong>aesthetically stunning</strong>. We understand that true success in turnkey interior solutions goes beyond design—it requires timely delivery, budget adherence, and seamless coordination. Our dedicated team works relentlessly to bring your vision to life without unexpected delays or cost overruns, offering a <strong>stress-free and reliable experience</strong> from concept to completion.
        </p>

        <p className='my-8'>
        At Shub Shiv Living, we understand that our clients have distinctive, high-end aspirations that demand precision and excellence. While these grand visions can pose logistical challenges, our expertise in project management and our network of trusted professionals allow us to seamlessly transform intricate concepts into stunning luxury realities. With a commitment to flawless execution, we ensure that every detail is <strong>meticulously crafted</strong>, delivering interiors that exude refinement and sophistication.
        </p>

        <p className='my-8'>
        At Shub Shiv Living, our turnkey interior solutions are crafted to offer a hassle-free experience, allowing you to enjoy the journey of bringing your dream space to life. <strong>From initial consultations and material selection to construction, installation, and final styling</strong>, we handle every detail with precision and care. Our comprehensive approach ensures a seamless execution, eliminating the need for you to coordinate multiple contractors or manage complex timelines. With us, your vision is realized effortlessly and elegantly.
        </p>

        <p className='my-8'>
        At Shub Shiv Living, we are dedicated to delivering exceptional service that goes beyond expectations. We prioritize trust, transparency, and open communication, ensuring a smooth and collaborative experience. Our team keeps you informed at every stage, providing regular updates and addressing any concerns promptly. By fostering a <strong>client-focused approach</strong>, we create an environment where your ideas are valued, and <strong>your vision comes to life</strong> with precision and care.
        </p>

        <p className='my-8'>
        The true essence of our turnkey interior solutions lies in our ability to provide a seamless and luxurious experience. At Shub Shiv Living, we recognize the value of your time and ensure efficient execution without compromising quality. By entrusting your project to us, you can be assured that your dream space will be brought to life with sophistication and precision, reflecting your distinctive style and refined taste. Our <strong>unwavering commitment to excellence</strong> positions us as the preferred choice for <strong>turnkey interior solutions</strong>.
        </p>
      </main>

      <main className='my-5 p-5'>
        <div className='flex justify-center items-center gap-10 mt-8 flex-wrap'>
          <ImageCard title="apartment camellias (gurgaon)" imageSrc={Interior1} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="whiteland snowflat (gurgaon)" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="show flat jaipur" imageSrc={Interior2} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="office gurgaon" imageSrc={Exterior1} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="office-gwalior" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="villa-faridabad" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="elan sales gallery gurgaon" imageSrc={Exterior2} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="farm house vasant kunj" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="apartment magnolias" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="villa faridabad" imageSrc={Exterior1} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="villa maharani bagh" imageSrc={Interior3} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
          <ImageCard title="villa maharani bagh" imageSrc={Exterior2} imageHeight="h-[450px] w-[590px]" imageWidth="w-[590px]" titleWidth="md:w-[500px] sm:w-[380px]" />
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
