import React from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact">
      <section>
        <motion.aside
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
        >
          <h1 className="heading">Contact Me</h1>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Your Message" cols="30" rows="4"></textarea>
            <motion.button
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: -100, opacity: 0 }}
            >
              SEND
            </motion.button>
          </form>
        </motion.aside>
        <aside>
          <img src={vg} alt="Contact" />
        </aside>
      </section>
    </div>
  );
};

export default Contact;
