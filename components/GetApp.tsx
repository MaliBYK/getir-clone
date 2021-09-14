import Image from "next/image";

const GetApp = () => {
  return (
    <section className='bg-get-app-bg min-h-[312px] rounded-md mt-8 bg-primary flex justify-between mb-16 pt-5'>
      <div className='flex flex-col text-white pl-10 my-auto'>
        <h2 className='text-[26px] font-bold mb-3 '>{"Getir'i indirin!"}</h2>
        <span className='font-semibold mb-6'>
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </span>
        <div className='flex space-x-2 mt-4'>
          <img
            className='cursor-pointer'
            src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
            alt='App Store'
          />
          <img
            className='cursor-pointer'
            src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
            alt='Google play'
          />
          <img
            className='cursor-pointer'
            src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
            alt='appgalery'
          />
        </div>
      </div>
      <img
        src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'
        loading='lazy'
      />
    </section>
  );
};

export default GetApp;
