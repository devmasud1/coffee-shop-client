import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://i.ibb.co/2YtkvFT/details-Coffee-Bg.jpg)`,
        }}
      >
        <div className="max-w-[1440px] mx-auto  py-20">
          <div>
            <img
              src={`https://i.ibb.co/5WHV8K7/logo1.png`}
              alt=""
              className="w-28"
            />
          </div>
          <div className="flex justify-between ">
          <div className="flex flex-col w-1/2">
            <div>
              <h1 className="text-4xl font-normal my-4">Espresso Emporium</h1>
              <p className="font-normal">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex items-center gap-5 my-3">
                <BsFacebook className="text-2xl cursor-pointer"></BsFacebook>
                <AiFillTwitterCircle className="text-2xl cursor-pointer"></AiFillTwitterCircle>
                <AiFillInstagram className="text-2xl cursor-pointer"></AiFillInstagram>
                <AiFillLinkedin className="text-2xl cursor-pointer"></AiFillLinkedin>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-normal my-4">Get in Touch</h1>
              <p>+88 01334 233 321</p>
              <p>info@gmail.com</p>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-normal my-4 ">Connect with Us</h1>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered input-secondary w-full "
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-secondary w-full my-3"
            />
            <textarea
              className="textarea textarea-secondary w-3/4"
              placeholder="Message"
            ></textarea>
          </div>
          </div>
         
        </div>
      </div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/mb1fwHV/mini-Footer.jpg)`,
        }}
      >
        <footer className="footer footer-center p-4 text-white ">
          <aside>
            <p>Copyright Espresso Emporium ! All Rights Reserved</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
