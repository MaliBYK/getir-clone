import Slider from "react-slick";
import { useState, useEffect } from "react";
import bannerList from "../public/banners.json";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <IoIosArrowForward fill='#5d3ebc' />,
  prevArrow: <IoIosArrowBack fill='#5d3ebc' />,
};

const Offers = () => {
  const [banners, setBanners] = useState<{ id: Number; image: string }[]>([]);

  useEffect(() => {
    setBanners(bannerList);
  }, []);

  return (
    <div className='container mx-auto mt-8'>
      <h3 className='subtitle mb-3'>Kampanyalar</h3>
      <div>
        <Slider {...settings}>
          {banners.map(({ id, image }) => (
            <div key={String(id)}>
              <Image
                width={400}
                height={200}
                objectFit='contain'
                className='rounded-md max-w-full max-h-full'
                src={image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offers;
