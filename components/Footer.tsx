import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { BiGlobe } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className='bg-white flex flex-col'>
      <div className='container mx-auto py-10 flex flex-col space-y-6'>
        <div className='flex justify-between  '>
          <div className='flex flex-col space-y-2'>
            <span className='footer-title'>Getir'i indirin!</span>
            <img
              className='cursor-pointer w-[160px]'
              src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
              alt='App Store'
            />
            <img
              className='cursor-pointer w-[160px]'
              src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
              alt='Google play'
            />
            <img
              className='cursor-pointer w-[160px]'
              src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
              alt='appgalery'
            />
          </div>
          <div className='footer-menu'>
            <span className='footer-title'>Getir'i keşfedin</span>
            <span className='footer-link'>Hakkımızda</span>
            <span className='footer-link'>Kariyer</span>
            <span className='footer-link'>İletişim</span>
            <span className='footer-link'>COVID-19 Duyuru</span>
            <span className='footer-link'>Sosyal Sorumluluk Projeleri</span>
          </div>
          <div className='footer-menu'>
            <span className='footer-title'>Yardıma mı ihtiyacınız var?</span>
            <span className='footer-link'>Sıkça Sorulan Sorular</span>
            <span className='footer-link'>Kişisel Verilerin Korunması</span>
            <span className='footer-link'>Gizlilik Politikası</span>
            <span className='footer-link'>Kullanım Koşulları</span>
            <span className='footer-link'>Çerez Politikası</span>
          </div>
          <div className='footer-menu'>
            <span className='footer-title'>İş Ortağımız Olun</span>
            <span className='footer-link'>Bayimiz Olun</span>
            <span className='footer-link'>Deponuzu Kiralayın</span>
            <span className='footer-link'>GetirYemek Restoranı Olun</span>
            <span className='footer-link'>GetirÇarşı İşletmesi Olun</span>
          </div>
        </div>
        <hr />
        <div className='flex justify-between items-center'>
          <div className='flex space-x-2 text-xs'>
            <span className='text-gray-500'>{"&#169;"} 2021 Getir</span>
            <li className='text-primary cursor-pointer'>
              Bilgi Toplumu Hizmetleri
            </li>
          </div>
          <div className='flex space-x-3 items-center text-[21px] text-gray-500'>
            <div className='p-1 rounded-md hover:bg-purple-100  hover:text-primary  transition-all'>
              <SiFacebook />
            </div>
            <div className='p-1 rounded-md hover:bg-purple-100 hover:text-primary   transition-all'>
              <FaTwitter />
            </div>
            <div className='p-1 rounded-md hover:bg-purple-100  hover:text-primary transition-all'>
              <FaInstagram />
            </div>
            <div className='flex space-x-2  text-[18px] items-center hover:bg-purple-100  hover:text-primary  transition-all rounded-md border-[1px] p-2'>
              <BiGlobe />
              <span className='text-sm'>Türkçe (TR)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
