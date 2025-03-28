import "./Icons.css";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpacex } from "react-icons/si";
type Props = {};

const IconsTemp = (props: Props) => {
  return (
    <div className="links-icons">
      <a href="https://www.linkedin.com/in/mohammed-mamun-121939234/">
        {" "}
        <FaLinkedin />
      </a>

      <a href="https://github.com/mamun-m">
        <FaGithub />
      </a>
      <a href="https://x.com/MiaMamun17378">
        <SiSpacex />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100010152103726">
        <FaFacebook />
      </a>
    </div>
  );
};

export default IconsTemp;
