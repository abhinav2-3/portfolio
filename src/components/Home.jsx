import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight } from "react-icons/bs";
import logo from "../assets/logo1.png";

const Home = () => {
  const projectCount = useRef(null);
  const projectCountAnimation = () => {
    animate(0, 50, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      {/* Left */}
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hii, I'M <br /> Abhinav Maurya
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "A Frotend Developer",
                "A Backend Developer",
                "A Student",
                "A Technophile",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "typeWriterPara",
            }}
          />
          <motion.div {...animation.button}>
            <a href="#about">About Me</a>
            <a href="#project">
              Project <BsArrowUpRight />
            </a>
          </motion.div>
          <article>
            <div>
              <p>
                +
                <motion.span
                  whileInView={projectCountAnimation}
                  ref={projectCount}
                >
                  50
                </motion.span>
              </p>
              <span>Project Done </span>
            </div>
            <aside>
              <h2>Contact</h2>
              <span>abhinavmaurya476@gmail.com</span>
            </aside>
          </article>
        </div>
      </section>

      {/* Right */}
      <section>
        <div>
          <img src={logo} alt="Profile" />
        </div>
      </section>
    </div>
  );
};

export default Home;
