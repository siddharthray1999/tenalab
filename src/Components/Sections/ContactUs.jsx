import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h3
        style={{ color: "#858457", fontWeight: "700", marginTop: "5%" }}
        className="get-contact"
      >
        Get In Touch
      </h3>
      <form action="/action_page.php">
        <label for="fname" style={{ marginRight: "2%" }} className="form-head">
          Name:
        </label>
        <input
          placeholder="Your Name"
          type="text"
          id="fname"
          name="fname"
          style={{ width: "45%", border: "none" }}
        />

        <br />
        <label for="lname" style={{ marginRight: "2%" }} className="form-head">
          Email:
        </label>
        <input
          placeholder="Your Email Address"
          type="email"
          id="lname"
          name="lname"
          style={{ width: "45%", marginTop: "1%", border: "none" }}
        />

        <br />
        <label for="lname" style={{ marginRight: "2%" }} className="form-head">
          Subject:
        </label>
        <input
          placeholder="Subject"
          type="email"
          id="lname"
          name="lname"
          style={{ width: "45%", marginTop: "1%", border: "none" }}
        />

        <br />
        <label for="w3review" className="form-head">
          Write Us:
        </label>
        <textarea
          placeholder="Your Query"
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          style={{ width: "45%", border: "none" }}
        ></textarea>
      </form>
      <button
        className="form-butn"
        style={{
          width: "170px",
          height: "47px",
          color: "white",
          background: "#858457",
          border: "none",
          borderRadius: "5px",
          marginTop: "5%",
        }}
      >
        SEND MESSAGE
      </button>
    </div>
  );
};

export default ContactUs;
