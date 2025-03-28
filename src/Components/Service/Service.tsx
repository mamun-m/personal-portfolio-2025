import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdAnimation } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";
import "./Service.css";
import Card from "../../Temp/Card";
import service from "../../json/Service.json";
import Testimonial from "../Testimonial/Testimonial";

const iconMapping = {
  FaCode: FaCode,
  FaLaptopCode: FaLaptopCode,
  AiOutlineAntDesign: AiOutlineAntDesign,
  MdAnimation: MdAnimation,
  MdManageAccounts: MdManageAccounts,
  VscVscode: VscVscode
};
type IconKey = keyof typeof iconMapping;
const Service = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <h1>My services </h1>
        <div className="services-card-section">
          {service.map((service) => {
            const { id, head, text1, text2, Icon } = service;
            const Iconcom = iconMapping[Icon as IconKey];
            return (
              <div key={id} className="hoveradd-service">
                <Card head={head} text1={text1} text2={text2} Icon={Iconcom} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="service-testimonial-section">
        <Testimonial />
      </div>
    </div>
  );
};

export default Service;
