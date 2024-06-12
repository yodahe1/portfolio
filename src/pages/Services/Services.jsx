import "./Services.css";
import Service_Data from "../../assets/Service_Data";
import arrowicon from "../../assets/icons8-arrow-30.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service-title">
        <h1>My Services</h1>
      </div>
      <div className="service-container">
        {Service_Data.map((Services, index) => {
          return (
            <div key={index} className="service-format">
              <h3>{Services.s_no} </h3>
              <h2>{Services.s_name} </h2>
              <p>{Services.s_desc} </p>
              <div className="more">
                <p>Read More</p>
                <img src={arrowicon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Services;
