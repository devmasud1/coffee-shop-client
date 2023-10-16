import { useLoaderData } from "react-router-dom";
import Coffees from "./Coffees/Coffees";
import { useState } from "react";
import Social from "./Social/Social";

const Home = () => {
  const loadedCoffee = useLoaderData();
  const [updateCoffee, setUpdateCoffee] = useState(loadedCoffee)
  return (
   <div>
     <div className="my-10">
      <div className="my-10 text-center">
        <p className="text-xl font-normal"> --- Sip & Savor --- </p>
        <h1 className="text-5xl font-normal text-[#331A15]">
          Our Popular Products
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
        {updateCoffee?.map((coffee) => (
          <Coffees key={coffee._id} coffee={coffee} updateCoffee={updateCoffee} setUpdateCoffee={setUpdateCoffee}></Coffees>
        ))}
      </div>
    </div>
    <Social></Social>
   </div>
  );
};

export default Home;
