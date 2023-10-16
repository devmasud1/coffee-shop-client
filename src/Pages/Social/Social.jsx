const Social = () => {
    const imgLinks = [
        'https://i.ibb.co/cQSxXBV/Rectangle-13.png',
        'https://i.ibb.co/WfGcYMc/Rectangle-14.png',
        'https://i.ibb.co/9GvBsjk/Rectangle-15.png',
        'https://i.ibb.co/1z63G8L/Rectangle-16.png',
        'https://i.ibb.co/tc869kM/Rectangle-9.png',
        'https://i.ibb.co/gt1xCMb/Rectangle-10.png',
        'https://i.ibb.co/znKSH8m/Rectangle-11.png',
        'https://i.ibb.co/GQsCj55/Rectangle-12.png',
      ];
  
    return (
      <div className="my-20">
        <div className="text-center">
          <h2 className="text-xl font-medium">Follow Us Now</h2>
          <h1 className="text-5xl font-medium">Follow on Instagram</h1>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {imgLinks.map((imgLink, index) => (
            <div key={index}>
              <img src={imgLink} alt={`Image ${index + 1}`} 
              className="rounded-lg"/>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Social;
  