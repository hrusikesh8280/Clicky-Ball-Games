import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/balls.css";

interface life_line{
    lifelines:number[]
}
const Lifelines = ({ lifelines }:life_line) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "4px",
        marginTop: "5px"
      }}
    >
      {lifelines.map((_, index) =>
        lifelines[index] !== null ? (
          <motion.div
            key={index}
            className="heart-shape"
            animate={
              lifelines[index] === null
                ? {
                    y: [-10, 10, -10, 10, -10, 10, -10, 10, 0],
                    opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0],
                    scale: [1, 1, 1, 1, 1, 1, 1, 1, 0.5]
                  }
                : {}
            }
            transition={{
              duration: 1,
              ease: "linear",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }}
            // onClick={() => handleClick(index)}
          />
        ) : (
          <div key={index} style={{ width: "30px", height: "40px" }} />
        )
      )}
    </div>
  );
};

export default Lifelines;
