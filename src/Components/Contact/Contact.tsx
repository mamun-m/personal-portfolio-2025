import IconsTemp from "../../Temp/IconsTemp";
import { BsPersonCircle } from "react-icons/bs";
import "./Contact.css";
import { FaLocationArrow } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content-left">
        <h3 className="same-align">Contact Info</h3>
        <div className="contact-left-details">
          <div className="names-identity">
            <i>
              <BsPersonCircle />
            </i>
            <div>
              <span>Name </span>
              <p>Mohammad Mamun Mia</p>
            </div>
          </div>
          <div className="names-identity">
            <i>
              <FaLocationArrow />
            </i>
            <div>
              <span>location </span>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="names-identity">
            <i>
              <IoCall />
            </i>
            <div>
              <span>Call Me </span>
              <p>+8001308301175</p>
            </div>
          </div>
          <div className="names-identity">
            <i>
              <MdEmail />
            </i>
            <div>
              <span>E-mail </span>
              <p>Miam6829@gmail.com</p>
            </div>
          </div>
        </div>
        <IconsTemp />
      </div>
      <div className="contact-content-right">
        <h3 className="same-align">Contact Me </h3>
        <form>
          <div className="debug-inputs">
            <div className="deb-input">
              <label htmlFor="">Name </label>
              <input className="inpu" type="text" name="name" />
            </div>
            <div className="deb-input">
              <label htmlFor="">E-mail</label>
              <input
                className="inpu"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="ext-texare-input">
            <label htmlFor="">Majority </label>
            <input
              className="inpu"
              type="text"
              placeholder="Enter your occupations"
            />
          </div>
          <div className="ext-texare-input">
            <label htmlFor="">Message </label>
            <textarea
              name=""
              placeholder="Enter your right recomended ...."
              id=""
            ></textarea>
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
