import "./Progress.css";
type Props = { titleName: string };

const Progress = ({ titleName }: Props) => {
  return (
    <div className="progress-container">
      <label htmlFor="">{titleName}</label>
      <div className="inputs">
        <div className="input-hide"></div>
      </div>
    </div>
  );
};

export default Progress;
