import { useNavigate } from "react-router-dom";
import "./Error.css";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <h1>404 - Page Not Found </h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Error Illustration"
        className="error-img"
      />
      <button onClick={() => navigate("/")}>Go Home </button>
    </div>
  );
};

export default Error;
