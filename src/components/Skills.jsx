import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

const Skills = () => {
  const animation = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    OneAndFive: {
      x: -100,
      opacity: 0,
    },
    TwoAndThree: {
      y: -100,
      opacity: 0,
    },
    FourAndEight: {
      x: 100,
      opacity: 0,
    },
    SixAndSeven: {
      y: 100,
      opacity: 0,
    },
  };
  return (
    <div id="skill">
      <h1 className="heading">Skills</h1>
      <section>
        <div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.OneAndFive}
          >
            <FaJava />
            <p>Java</p>
            <span>Advance</span>
          </motion.div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.TwoAndThree}
          >
            <FaHtml5 />
            <p>HTML</p>
            <span>Advance</span>
          </motion.div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.TwoAndThree}
            transition={{
              delay: 0.3,
            }}
          >
            <FaCss3 />
            <p>CSS</p>
            <span>Advance</span>
          </motion.div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.FourAndEight}
          >
            <SiJavascript />
            <p>Javascript</p>
            <span>Medium</span>
          </motion.div>
        </div>
        <div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.OneAndFive}
            transition={{
              delay: 0.3,
            }}
          >
            <SiMongodb />
            <p>MongoDB</p>
            <span>Medium</span>
          </motion.div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.SixAndSeven}
          >
            <SiExpress />
            <p>Express.Js</p>
            <span>Medium</span>
          </motion.div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.SixAndSeven}
            transition={{
              delay: 0.3,
            }}
          >
            <SiReact />
            <p>React.js</p>
            <span>Medium</span>
          </motion.div>
          <motion.div
            whileInView={animation.whileInView}
            initial={animation.FourAndEight}
            transition={{
              delay: 0.3,
            }}
          >
            <SiNodedotjs />
            <p>Node.js</p>
            <span>Medium</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
