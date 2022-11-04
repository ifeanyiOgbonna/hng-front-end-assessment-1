import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
      <div className="container">
        <img src="/img/_Avatar.png" className="mobile_avatar" alt="avatar" />
        <img
          src="/img/_Avatar share button.png"
          className="desktop_avatar"
          alt=""
        />
        <img
          alt="profile"
          src="img/profile.png"
          className="profile__img"
          id="profile__img"
        />
        <p id="slack">Ogbonna Ifeanyi</p>

        <a
          href="https://twitter.com/IfeanyiIfybest"
          className="btn"
          id="twitter"
        >
          Twitter Links
        </a>

        <a href="https://training.zuri.team/" className="btn" id="‘btn__zuri’">
          Zuri team
        </a>

        <a href=" http://books.zuri.team " className="btn" id="Books">
          Zuri Books
        </a>

        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Ifeanyi Ogbonna"
          className=" btn"
          id="‘book__python’"
        >
          Python Books
        </a>

        <a href="https://background.zuri.team," className="btn" id="‘pitch">
          Want to know more about your coder? We offer the best background check
          services
        </a>

        <a
          href="https://books.zuri.team/design-rules"
          className="btn"
          id="‘book__design’"
        >
          Having hard time with designs? Checkout this free design rule book for{" "}
          <strong>HNG</strong> and thank me later
        </a>
        <Link
          to="/contact"
          className="btn"
          id="contact"
        >
          Contact Me
        </Link>

        <div className="media-links">
          <a href="#">
            <img src="/img/slack.svg" alt="slack" id="slack" />
          </a>
          <a href="https://github.com/ifeanyiOgbonna">
            <img src="/img/Icon.png" alt="github" />
          </a>
        </div>
      </div>
  );
};

export default Home;
