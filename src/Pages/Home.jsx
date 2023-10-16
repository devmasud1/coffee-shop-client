import { useLoaderData } from "react-router-dom";
import Coffees from "./Coffees/Coffees";
import { useState } from "react";
import Social from "./Social/Social";
import Banner from "./Banner";
import Footer from "./shared/Footer";

const Home = () => {
  const loadedCoffee = useLoaderData();
  const [updateCoffee, setUpdateCoffee] = useState(loadedCoffee)
  return (
   <div>
    <div>
    <Banner></Banner>
    </div>
    <div style={{
          backgroundImage: `url(https://i.ibb.co/gV4Sx90/coffeeBg.png)`,
        }}>
    <div className=" max-w-[1440px] mx-auto my-20" > 
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
    </div>
   
    <Social></Social>
    <Footer></Footer>
   </div>
  );
};

export default Home;
