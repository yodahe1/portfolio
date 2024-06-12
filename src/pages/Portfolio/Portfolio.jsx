import "./Portfolio.css";
import myport_data from "../../assets/myport_data.js";
import arrow_icon from "../../assets/icons8-arrow-30.png";

const Portfolio = () => {
  return (
    <div className="myport">
      <div className="myport-title">
        <h1>My portfolio</h1>
      </div>
      <div className="myport-container">
        {myport_data.map((myport, index) => {
          return <img key={index} src={myport.p_img} alt="" />;
        })}
      </div>
      <div className="myport_more">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
