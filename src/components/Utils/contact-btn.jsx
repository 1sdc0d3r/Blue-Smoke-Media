import React, { useState } from "react";
import phone from "../../images/phone.png";
import other from "../../images/pintrest.jpg";

export default function ContactBtn() {
  const [data, setData] = useState({
    hidden: true,
    name: "",
    number: "",
    message: "",
  });

  const onChangeHandler = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(data);
  };

  const toggleClass = (el, cl) => {
    console.log(document.querySelector(el));
    document.querySelector(el).classList.toggle(cl);
  };

  return (
    <div className="contact-text">
      <button
        className="text-btn"
        onClick={() => {
          setData({ ["hidden"]: !data.hidden });
          toggleClass("form", "hide-form");
        }}
      >
        <img src={data.hidden ? other : phone} alt="text-btn" />
      </button>
      <form onSubmit={onSubmitHandler}>
        <p>
          Enter your information, and we will text you back as soon as we are
          available.
        </p>
        <div className="input-fields">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Mobile Phone"
            name="number"
            value={data.number}
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="message"
            name="message"
            // rows="3"
            value={data.message}
            onChange={onChangeHandler}
          />
        </div>
        {/* todo implement char count */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
