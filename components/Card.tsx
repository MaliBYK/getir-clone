import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

const Card: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className='flex flex-col rounded-md bg-white items-center p-6 shadow-sm '>
      <img src={image} className='w-[150px] h-[150px] object-cover my-7' />
      <span className='text-lg text-primary font-semibold mb-4'>{title}</span>
      <span className='text-center text-[15px] text-gray-500'>
        {description}
      </span>
    </div>
  );
};

export default Card;
