import categoryList from "../public/categories.json";
import { useState, useEffect } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState<
    { id: number; title: string; image: string }[]
  >([]);

  useEffect(() => {
    setCategories(categoryList);
  }, []);

  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <h3 className='subtitle'>Kategoriler</h3>
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10'>
          {categories.length > 0 &&
            categories.map(({ id, title, image }) => (
              <Category key={id} title={title} image={image} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
