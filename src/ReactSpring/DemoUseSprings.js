import React from "react";
import { animated, useSprings } from "react-spring";
export default function DemoUseSprings(props) {
  let arrOpacity = [
    {
      opacity: 0.1,
      color: "red",
      fontSize: "20px",
      content: "FullStack",
      num: 100,
    },
    {
      opacity: 0.3,
      color: "green",
      fontSize: "30px",
      content: "Back-End",
      num: 200,
    },
    {
      opacity: 0.5,
      color: "blue",
      fontSize: "40px",
      content: "Front-End",
      num: 300,
    },
    {
      opacity: 0.7,
      color: "orange",
      fontSize: "50px",
      content: "Devops",
      num: 400,
    },
    {
      opacity: 1,
      color: "purple",
      fontSize: "60px",
      content: "Data Engineer",
      num: 500,
    },
  ];
  let propsAnimationUseSprings = useSprings(
    arrOpacity.length,
    arrOpacity.map((item) => {
      return {
        opacity: item.opacity,
        color: item.color,
        fontSize: item.fontSize,
        content: item.content,
        num: item.num,
        from: {
          opacity: 0,
          color: "black",
          fontSize: "10px",
          content: "",
          num: 0,
        },
        config: { duration: 5000 },
      };
    })
  );
  return (
    <div>
      {propsAnimationUseSprings.map((propsAnimation, index) => {
        return (
          <div key={index}>
            <animated.div style={propsAnimation}>
              {propsAnimation.num}
            </animated.div>

            <animated.div style={propsAnimation}>
              {propsAnimation.content}
            </animated.div>

          </div>
        );
      })}
    </div>
  );
}
