import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffeeData = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo, price } =
    coffeeData || {};

  return (
    <div className="bg-cover bg-center" style={{backgroundImage: `url(https://i.ibb.co/MMMFQF3/add-Coffee-BG.png)`}}>
      <div className="max-w-[1440px] mx-auto py-20">
        <Link to="/">
          <button className="text-3xl font-medium text-[#374151] mb-4 flex items-center gap-2 ml-2">
            {" "}
            <BsArrowLeft></BsArrowLeft> Back to home
          </button>
        </Link>
        <div className="bg-[#F4F3F0] py-10">
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
    </div>
  );
};

export default CoffeeDetails;
