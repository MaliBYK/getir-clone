import type { NextPage } from "next";
import Head from "next/head";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import Favourites from "../components/Favourites";
import Footer from "../components/Footer";
import GetApp from "../components/GetApp";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Offers from "../components/Offers";

const imageURLS = [
  "https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg",
  "https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg",
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Getir - Dakikalar İçinde Kapınızda</title>
        <meta name='description' content='getir.com clone created by MaliBYK' />
        <link
          rel='icon'
          href='https://getir.com/images/icons/favicon-32x32.png'
        />
      </Head>
      <Header />
      <HeroSection imageURLs={imageURLS} />
      <Categories />
      <Offers />
      <div className='container mx-auto'>
        <Favourites />
        <GetApp />
        <Cards />
      </div>
      <Footer />
    </>
  );
};

export default Home;
