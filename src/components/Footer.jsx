import React from "react";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/114284694"
          alt="Founder"
        />
        <h2>Abhinav Maurya</h2>
        <span>Hustler Never Make Excuses !!!</span>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://instagram.com/abhinav_.476" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/abhinav2-3" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://linkedin.com/in/abhinav476" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://twitter.com/abhinav_476" target="blank">
            <AiFillTwitterSquare />
          </a>
        </article>
      </aside>
      {/* eslint-disable-next-line */}
      <a href="#">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
