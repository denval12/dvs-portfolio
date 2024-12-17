import React from "react";
import { EXPERIENCES } from "../assets/constants";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <div className="border-b border-line pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 principal-font  text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8  flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm principal-font">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6
                className="mb-2 font-semibold"
                style={{ color: `  rgba(0, 2, 38, 1)` }}
              >
                {experience.role}-{" "}
                <span className="text-sm">{experience.company}</span>
              </h6>
              <p className="mb-4 ">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded px-2 py-1 text-sm font-medium"
                  style={{ color: ` rgba(165, 79, 3, 1)` }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;