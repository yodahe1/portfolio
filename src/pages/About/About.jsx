import "./About.css";
import profileimg from "../../assets/profileimg.png";

export const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1> About Me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profileimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-pra">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              est temporibus tenetur distinctio unde nostrum? Culpa debitis
              autem, delectus iure nulla perspiciatis est quasi. Reprehenderit
              quisquam officiis quas magni explicabo.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              deleniti adipisci excepturi iste, aspernatur placeat id, sapiente
              est, rerum eius voluptate totam suscipit. Omnis eius, nam iste
              dicta perspiciatis dolore!
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              {" "}
              <p>HTML & CSS</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>JavaScript</p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>React Js</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Node Js</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>Expres Js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              {" "}
              <p>MongoDB</p> <hr style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
