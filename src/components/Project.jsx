import React from "react";
import { Carousel } from "react-responsive-carousel";
import data from "../assets/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Project = () => {
  return (
    <div id="project">
      <h1 className="heading">Projects</h1>
      <section>
        <div>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay
          >
            {data.projects.map((i) => (
              <div key={i.title} className="projectItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h1>{i.title}</h1>
                  <p>{i.description}</p>
                  <a href={i.url} target="blank">
                    View Project
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Project;
