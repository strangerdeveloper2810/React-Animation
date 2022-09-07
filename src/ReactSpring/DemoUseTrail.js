import React, { useState } from "react";
import { animated, useTrail } from "react-spring";

const items = [
  { title: "Front-End", content: "ReactJS" },
  { title: "Back-End", content: "NodeJS" },
  { title: "Fullstack", content: "MERN" },
];
export default function DemoUseTrail(props) {
  let [status, setStatus] = useState(true);

  const [propsUseTrail, set] = useTrail(items.length, () => {
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 80 : 0,
      color: "red",
      from: {
        opacity: 0,
        x: 20,
        height: 0,
        color: "green",
      },
      config: { duration: 600 },
    };
  });

  set({
    opacity: status ? 1 : 0,
    x: status ? 0 : 20,
    height: status ? 80 : 0,
    color: "red",
    from: { opacity: 0, x: 20, height: 0, color: "green" },
    config: { duration: 600 },
  });
  

  return (
    <div>
      {propsUseTrail.map((propsUseSprings, index) => {
        return (
          <div key={index}>
            <animated.div style={propsUseSprings}>
              {items[index].title}:{items[index].content}
            </animated.div>
          </div>
        );
      })}

      <button
        className="btn btn-success me-3"
        onClick={() => {
          setStatus(!status);
        }}
      >
        Set Status
      </button>

      <button
        className="btn btn-primary"
        onClick={() => {
          console.log(propsUseTrail);
          set({ color: "pink" });
        }}
      >
        setColor
      </button>
    </div>
  );
}
