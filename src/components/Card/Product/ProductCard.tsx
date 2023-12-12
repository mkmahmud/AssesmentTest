// import cardImage from "../../../assets/card.jpg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ deleteProduct, data }: any) => {
  const { id, image, category, price, discountPrice } = data;

  return (
    <div className="max-w-[250px] bg-gray overflow-hidden  rounded-lg my-4">
      <div>
        <img
          src={image}
          className="block mx-auto w-full h-[300px]"
          alt="Card Images"
        />
      </div>
      <div className="p-2">
        <div>
          <p className="underline my-2">
            {category?.title} {`>`} {category?.subCategory}
          </p>
          <h1>
            ${price} <del className="mx-4">${discountPrice}.90</del>
          </h1>
        </div>
        <div className="flex">
          <button
            onClick={() => {
              deleteProduct(id);
            }}
            className="px-2 py-2 bg-primary text-white  rounded-full m-2"
          >
            Delete
          </button>
          <button
            onClick={() => {
              console.log(id);
            }}
            className="px-2 py-2 bg-primary text-white  rounded-full m-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
