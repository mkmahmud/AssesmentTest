import { useEffect, useState } from "react";
import ProductCard from "../Card/Product/ProductCard";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    axios({
      url: "/products.json",
      method: "get",
    }).then((response) => {
      try {
        if (response.data.length > 0) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  const handleDelete = (id: string) => {
    setProducts(
      products.filter((data) => {
        return data?.id !== id;
      })
    );
  };

  return (
    <div className="m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products
        ? products.map((data) => (
            <ProductCard
              deleteProduct={handleDelete}
              key={data?.id}
              data={data}
            />
          ))
        : "No Data Found"}

      {}
    </div>
  );
};

export default Product;
