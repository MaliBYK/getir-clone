import Card from "./Card";

const images = [
  "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
  "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
  "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
];
const titles = [
  "Her siparişinize bir kampanya",
  "Dakikalar içinde kapınızda",
  "Binlerce çeşit mutluluk",
];
const descriptions = [
  "Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.",
  "Getir’le siparişiniz dakikalar içinde kapınıza gelir.",
  "Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.",
];
const Cards = () => {
  return (
    <section className='grid md:grid-cols-3 grid-cols-1 space-y-3 px-3 md:space-y-0 md:px-0  md:space-x-4 mb-16'>
      <Card image={images[0]} title={titles[0]} description={descriptions[0]} />
      <Card image={images[1]} title={titles[1]} description={descriptions[1]} />
      <Card image={images[2]} title={titles[2]} description={descriptions[2]} />
    </section>
  );
};

export default Cards;
