import img from "../../assets/dhaka.jpeg";
import "./About.css";
import { FcDownload } from "react-icons/fc";
import Card from "../../Temp/Card";
import Dotted from "../../Temp/Dotted";
import Progress from "../../Temp/Progress";
import Data from "../../json/Data.json";
import IconsTemp from "../../Temp/IconsTemp";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="one-about-section">
          <div className="one-img">
            <img src={img} className="one-img-phots" alt="" />
          </div>
          <div className="one-details">
            <h1>About me </h1>
            <Dotted />
            <div className="one-details-content">
              <h2>Personal Information</h2>
              <div className="one-detail-two-both">
                <div className="one-details-content-left">
                  <div>
                    <span>First Name : </span> Mohammad Mamun
                  </div>
                  <div>
                    <span>Last Name : </span> Hasan
                  </div>
                  <div>
                    <span>Address : </span> Dhaka, Bangladesh
                  </div>
                </div>
                <div className="one-details-content-right">
                  <div>
                    <span>Email: </span> miam6829@gmail.com
                  </div>
                  <div>
                    <span>Phone : </span> (+880)1308301175
                  </div>
                  <div>
                    <span>Language : </span> Bangla,English
                  </div>
                </div>
              </div>
              <button>
                DOWNLOAD RESUME{" "}
                <i>
                  <FcDownload />
                </i>{" "}
              </button>
              <div className="icon-section">
                <IconsTemp />
              </div>
              <div className="futuer-txt">
                <h2>🚀 1. AI & Automation Will Change the Industry</h2>
                <h4>
                  AI-powered tools like GitHub Copilot and ChatGPT will help
                  developers write code faster.
                </h4>
                <h4>
                  AI will not replace programmers but will make coding more
                  efficient.
                </h4>
                <h4>
                  Developers will focus more on problem-solving and architecture
                  rather than just writing code.
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="two-about-section">
          <h1>My Resume</h1>
          <Dotted />
          <div className="two-about-section-content">
            <div className="two-about-education">
              <h2>Education </h2>
              <Card
                head="HSC(2020-Present)"
                text1={"HSC stands for Higher Secondary Certificate"}
                text2={"Taken after class 12 (college level)."}
              />
              <Card
                head="Software in Engineering(2021-Recently)"
                text1={"Front-end Engineer"}
                text2={"Taken after class 12 (college level)."}
              />
            </div>
            <hr className="two-about-section-hr" />
            <div className="two-about-experince">
              <h2>Experince</h2>
              <Card
                head="Professional Training"
                text1={"Complete Web Developement Course"}
                text2={"udemy Course : Date May 3, 2023"}
              />
              <Card
                head="Beginner to Expert"
                text1={"Master Git and Github"}
                text2={"Master HTML AND CSS By building real world projects"}
              />
            </div>
          </div>
        </div>
        <div className="three-about-section">
          <h1>
            My <span>Skills </span>{" "}
          </h1>

          <Dotted />
          <div className="skills-details">
            <div className="skills-one">
              <h2>Front-End</h2>
              <div className="front-end-skill">
                {Data.map((dat) => {
                  return <Progress key={dat.id} titleName={dat.title} />;
                })}
              </div>
            </div>
            <div className="skills-two">
              <Card
                head="Others/Tools"
                text1="Vite,AOS,React Router, Redux Toolkit, React Hook Form , React Query Axios, Swipper.js, Material Ul, React-Toastify "
                text2="VS Code , Chrome Dev-tool, GitHub, Codepen, Terminal"
              />
              <br />
              <Card
                head="practicing"
                text1={"code . code  .code "}
                text2={"vs . code "}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
