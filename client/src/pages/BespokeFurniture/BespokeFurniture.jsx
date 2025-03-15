import React from 'react';
import Interior2 from "../../assets/img/interior2.jpg";
import Sofa from "../../assets/img/sofa.png";
import Table from "../../assets/img/outdoor_furniture.png";
import { Link } from 'react-router-dom';

const BespokeFurniture = () => {
  return (
      <section>
                  <div>
                      <img src={Interior2} alt="" className='w-full h-[550px] object-cover ' />
                  </div>
                  <header className='my-16'>
                      <div className="text-center">
                          <p className='text-4xl font-light mx-auto mb-2 relative inline-block after:content-[""] after:block after:w-[120px] after:h-[1px] after:bg-black after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-14px]'>
                          custom luxury furniture: tailored for your lifestyle
                          </p>
                      </div>
                  </header>
                  <main className='w-[80%] mx-auto text-justify my-10 text-gray-700 text-lg font-light'>
                      <p className='my-8'>
                      At Essentia Environments, our finishes and furnishings library is a masterpiece of meticulous R&D and artful curation, designed to enhance your lifestyle. With the expertise of our <strong>bespoke interior designers</strong>, we offer a pristine selection of carefully curated materials, including exclusive imported fabrics and wallpapers, all while being exceptionally price-sensitive. Our bespoke furniture collections—Essentia Signature, Premium, Exotic, and Luxury—are custom-designed to accommodate every budget and aesthetic preference. From the very foundation to the final touches of decor and bedding, we are your comprehensive solution, ensuring flawless execution from A to Z. 
                      </p>
                      <p className='my-8'>
                      Essentia Environments transforms every space into a captivating blend of elegance and functionality, perfectly tailored to our discerning clientele’s unique tastes and needs. For our outdoor bespoke furniture, we prioritize durability and weather-resistant materials, combining style with robust construction to create custom pieces that withstand the elements while maintaining their elegance. 
                      </p>
      
                      <p className='my-8'>
                      Our indoor bespoke furniture collection is a testament to luxurious craftsmanship and meticulous detail. Each piece is fashioned from premium materials and finished to perfection, creating a harmonious blend of beauty and durability that complements your lifestyle. Our designs feature sumptuous fabrics, rich woods, and refined finishes, all curated to elevate your interiors with elegance and sophistication. With Essentia, you can trust that every item is not only a statement of style but also a lasting investment in comfort and quality.
                      </p>
                      <p className='my-8'>
                      In addition to our diverse furniture collections, we pride ourselves on offering <strong>bespoke interior design services</strong> that extend beyond mere aesthetics. Our team of experienced designers is dedicated to understanding your vision, lifestyle, and preferences. We work closely with you throughout the design process, from the initial consultation to the final installation, ensuring that every element harmonizes with your aspirations and reflects your unique identity. Our bespoke approach allows us to create spaces that are not just visually striking but also profoundly functional, catering to your everyday needs and enhancing your overall quality of life.
                      </p>
                      <p className='my-8'>
                      We recognize that the integration of technology into home design is more important than ever. Therefore, we offer smart furniture solutions that blend seamlessly into your living spaces, enhancing convenience without compromising style. With options for integrated charging stations, adjustable lighting, and adaptable configurations, we aim to keep your home at the forefront of modern living. Our commitment to sustainability is also reflected in our sourcing and manufacturing processes. We prioritize eco-friendly materials and ethical production methods, ensuring that our beautiful creations are not only aesthetically pleasing but also environmentally responsible. This commitment to sustainability resonates with our clients who are increasingly conscious of their environmental footprint and seek to make informed choices that contribute to a healthier planet.
                      </p>
                      <p className='my-8'>
                      At Essentia Environments, we understand that the home is a sanctuary, a place of comfort and refuge. Our goal is to create spaces that evoke a sense of peace and joy, where every piece of furniture and every detail contributes to a cohesive narrative of your life. We invite you to explore the endless possibilities within our finishes and furnishings library, where your visions transform into tangible reality. Whether you are looking to refresh a single room or undertake a complete home renovation, our expertise, along with our extensive collection of furnishings and finishes, is here to guide you. Embrace the art of living beautifully with Essentia Environments, where every design choice is an invitation to experience life at its finest.
                      </p>

                      <div className='flex justify-around items-center gap-5 flex-wrap'>
                        <div className='flex flex-col items-center gap-4'>
                            <img src={Sofa} alt="" className='h-56 w-56 object-cover'/>
                           <Link to='/bespoke-furniture-indoor'>
                           <button className='py-1 px-3 bg-black text-white cursor-pointer'>Indoor Furniture</button>
                           </Link>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <img src={Table} alt="" className='h-56 w-56 object-cover'/>
                            <Link to="/bespoke-furniture-outdoor">
                            <button className='py-1 px-3 bg-black text-white cursor-pointer'>outdoor Furniture</button>
                            </Link>
                        </div>
                      </div>
                  </main>
              </section>
  )
}

export default BespokeFurniture
