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
              As a passionate MERN stack web developer, I specialize in creating
              dynamic, responsive, and user-friendly web applications. With
              expertise in MongoDB, Express.js, React, and Node.js, I excel at
              crafting seamless full-stack solutions that deliver exceptional
              performance. My approach combines clean code practices with
              innovative problem-solving to ensure each project is both
              efficient and scalable.
            </p>
            <p>
              Beyond coding, I am deeply committed to staying at the forefront
              of web development trends. Whether collaborating with a team or
              working independently, I thrive on transforming ideas into
              functional digital experiences that leave a lasting impact. My
              goal is to continuously enhance my skills and contribute to
              projects that make a difference.
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
