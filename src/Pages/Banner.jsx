const Banner = () => {
  return (
    <div
      className="h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/QK9TCRN/bg.png)`,
      }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="lg:w-1/2"></div>
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-5xl font-normal text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>

          <button className="px-4 py-1 bg-[#E3B577] rounded transition-transform transform-gpu hover:scale-105 hover:bg-transparent hover:border-2 border-[#ffffff] hover:text-white transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
