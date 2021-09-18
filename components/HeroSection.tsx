import React, { useState } from "react";
import Slider from "react-slick";
import { SiFacebook } from "react-icons/si";
import ReactFlagsSelect from "react-flags-select";
type Props = {
  imageURLs: string[];
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
};

const phones = {
  US: "+1",
  DE: "+50",
  TR: "+90",
  IT: "+7",
  IN: "+15",
};

const HeroSection: React.FC<Props> = ({ imageURLs }) => {
  const [selected, setSelected] = useState("TR");

  return (
    <div className='hidden md:block w-full h-[500px] relative before:absolute before:inset-0 before:bg-gradient-to-r before:h-full before:z-10 before:from-primary before:to-transparent '>
      <Slider {...settings}>
        <div>
          <img
            loading='lazy'
            src={imageURLs[0]}
            className='w-full h-[500px] object-cover'
          />
        </div>
        <div>
          <img
            loading='lazy'
            src={imageURLs[1]}
            className='w-full h-[500px] object-cover'
          />
        </div>
      </Slider>
      <div className='container px-8 lg:px-0 absolute left-1/2 -translate-x-1/2 container   h-[305px]  top-1/2 -translate-y-1/2 z-20 flex items-center justify-between'>
        <div className=''>
          <img
            src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'
            alt='getir logo'
            className='mb-10 h-[180px]'
          />
          <div className='text-white text-4xl font-semibold leading-[2.5rem] tracking-[-0.1rem] '>
            Dakikalar içinde <br /> kapınızda
          </div>
        </div>
        <form className='bg-white p-5 rounded-lg shadow-lg text-center w-[400px]'>
          <h4 className='text-primary font-semibold mb-5'>
            Giriş yap veya kayıt ol
          </h4>
          <div className='flex space-x-2 '>
            <ReactFlagsSelect
              className='flag-select'
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={code => setSelected(code)}
              selected={selected}
            />
            <div className='relative w-full flex items-center'>
              <input
                required
                type='tel'
                id='tel'
                className='w-full border-2 h-14 px-4  rounded-[4px] border-primary-gray text-gray-500 hover:border-primary-dark focus:border-primary-dark focus:outline-none peer text-sm focus:pt-2 valid:pt-2 '
              />
              <label
                className='text-secondary-gray absolute text-sm px-4 peer-default:text-secondary-gray   whitespace-nowrap transition-all
                  peer-focus:text-xs   peer-focus:top-2  peer-focus:text-primary
                  peer-valid:text-xs   peer-valid:top-2  peer-valid:text-primary   
                 '
                htmlFor='tel'
              >
                Telefon Numarası
              </label>
            </div>
          </div>
          <button
            type='submit'
            className='bg-brand-yellow text-primary w-full my-4 h-12 rounded-lg text-sm font-semibold shadow-sm transition-all duration-500 hover:bg-primary hover:text-brand-yellow'
          >
            Telefon numarası ile devam et
          </button>
          <hr />
          <button
            type='submit'
            className='flex relative bg-[#E7EAF1] rounded-lg shadow-sm items-center w-full h-12 my-4 text-[#3C5A99] text-center justify-center'
          >
            <SiFacebook className='self-center text-2xl justify-self-start absolute left-3 top-1/2 -translate-y-1/2' />
            <span className='justify-self-end font-semibold my-4  text-sm'>
              Facebook ile devam et
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
