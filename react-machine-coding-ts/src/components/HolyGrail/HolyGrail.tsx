import { FC } from "react";
import "./style.css";

const HolyGrail: FC = () => {
  return (
    <div className="container">
      <div className="header">Header</div>
      <div className="columns">
        <div className="column1">Column1</div>
        <div className="column2">Column2</div>
        <div className="column3">Column3</div>
      </div>

      <div className="footer">Footer</div>
    </div>
  );
};

export default HolyGrail;
