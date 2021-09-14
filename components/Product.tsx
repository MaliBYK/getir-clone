import React from "react";
import Image from "next/image";
import { RiAddFill } from "react-icons/ri";
const Product: React.FC<{
  image: string;
  title: string;
  alt: string;
  price: number;
}> = ({ image, title, alt, price }) => {
  return (
    <div className='flex flex-col items-center bg-white p-2 relative shadow-sm cursor-pointer'>
      <div className='absolute top-3 right-3 z-20 p-2 border-[1px] rounded-lg shadow-lg bg-white'>
        <RiAddFill className='w-4 h-4 ' fill='#5d3ebc' />
      </div>
      <Image src={image} width={120} height={120} />
      <span className='text-center text-sm text-primary-dark font-semibold my-2'>
        &#8378;{price}
      </span>
      <span className='text-center text-sm   font-semibold'>{title}</span>
      <span className='text-sm text-gray-500 mt-2'>{alt}</span>
    </div>
  );
};

export default Product;
