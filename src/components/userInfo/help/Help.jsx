import "./help.css";
import Contact from "./sub/Contact";

function Help() {
  return (
    <div className="p-4 help_topDiv">
      <div className="help_title">
        <div>
          <h2 className="mb-5 fw-bold help_title_name">Your Support Team</h2>
          <p>
            Consider us your dedicated support network, here to guide you <br />
            through any challenges or queries you may have. From technical{" "}
            <br />
            assistance to general inquiries, our team is committed to providing{" "}
            <br />
            comprehensive and empathetic support.
          </p>
        </div>
        <div>
          <img src="/images/help.svg" alt="img" />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Help;
