import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo, price } = coffeeData || {};

  return (
    <div className="my-10">
      <Link to="/">
        <button className="text-3xl font-medium text-[#374151] mb-4 flex items-center gap-2 ml-2">
          {" "}
          <BsArrowLeft></BsArrowLeft> Back to home
        </button>
      </Link>
      <div className="bg-[#F4F3F0]  py-20">
        <div className="flex justify-center items-center gap-20">
          <div>
            <img src={photo} alt="" className="w-[400px]" />
          </div>
          <div className="space-y-4">
            <p>Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Supplier: {supplier}</p>
            <p>Taste: {taste}</p>
            <p>Category: {category}</p>
            <p>Details: {details}</p>
            <p>Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
