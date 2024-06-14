import "./Mycontact.css";
import callicon from "../../assets/icons8-call-30.png";
import mailicon from "../../assets/icons8-mail-24.png";

const Mycontact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "09ecb207-5b62-4891-a8c2-b53e58498478");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1> Get in touch</h1>
          <p> I am currently available to take a new project.</p>
          <div className="contact-info">
            <div className="contact-detail">
              <img src={callicon} alt="" /> <p> +251-913-339-527</p>
            </div>
            <div className="contact-detail">
              <img src={mailicon} alt="" /> <p> yodahemeless@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor=""> Your Email</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Write your message here</label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your message"
            ></textarea>
            <button type="submit" className="info-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mycontact;
