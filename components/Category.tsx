import React from "react";
import Image from "next/image";
const Category: React.FC<{ image: string; title: string }> = ({
  image,
  title,
}) => {
  return (
    <div className='flex flex-col cursor-pointer  items-center justify-center hover:bg-purple-50    p-2 m-2 group'>
      <div className='border-[1px] w-12 h-12 rounded-[8px] mb-3'>
        <Image src={image} width={48} height={48} objectFit='contain' />
      </div>
      <span className='text-sm text-center font-semibold text-gray-700 whitespace-nowrap  group-hover:text-primary mb-3'>
        {title}
      </span>
    </div>
  );
};

export default Category;
