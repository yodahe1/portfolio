import "./Hero.css";
import profileimg from "../../assets/profileimg.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="pro">
        <div className="left">
          <h1>
            <span>I am Yodahe Meless </span>, Frontend web developer
          </h1>
          <p> I am experienced in HTML, CSS, JS, REACT and NODE JS</p>
        </div>
        <div className="right">
          <img src={profileimg} alt="" />
        </div>
      </div>

      <div className="hero-action">
        <div className="hero-connect">connect with me</div>
        <div className="resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
