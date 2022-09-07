import React from "react";
import { useSpring, animated } from "react-spring";
export default function Ex2UseSpring(props) {
  //   let propsUseSpring = useSpring({
  //     // Màu sắc sau khi animation chạy xong
  //     // color: [131, 111, 255],
  //     color: "rgb(131,111,255)",

  //     from: {
  //       // Màu sắc bắt đầu
  //       //   color: [238, 99, 99],
  //       color: "rgb(238,99,99)",
  //     },

  //     config: { duration: 5000 },
  //   });

  let { color, ...propsUseSpring } = useSpring({
    // Màu sắc sau khi animation chạy xong
    color: [131, 111, 255],
    // color: "rgb(131,111,255)",

    from: {
      // Màu sắc bắt đầu
      color: [238, 99, 99],
      //   color: "rgb(238,99,99)",
    },

    config: { duration: 5000 },
  });

  //   Tăng font chữ và tăng độ dài
  let propsAnimation = useSpring({
    from: {
      width: "0%",
      height: "0%",
      fontSize: "10px",
      color: "blue",
    },

    to: async (next, cancel) => {
      await next({
        widht: "100%",
        opacity: 1,
        height: "100%",
        fontSize: "50px",
        color: "#FFAAEE",
      });
      await next({
        widht: "50%",
        opacity: 0,
        height: "50%",
        fontSize: "20px",
        color: "rgb(14,26,19)",
      });
      await next({
        widht: "100%",
        opacity: 1,
        height: "100%",
        fontSize: "50px",
        color: "red",
      });
    },

    config: {duration: 5000}
  });
  return (
    <div>
      <animated.div
        className="display-4"
        style={{
          //   color: propsUseSpring.color.to((r, g, b) => {
          //     return `rgb(${r},${g},${b})`;
          //   }),

          color: color.to((r, g, b) => {
            return `rgb(${r},${g},${b})`;
          }),
        }}
      >
        Hello Stranger
      </animated.div>


      <animated.div style={propsAnimation}>
        <h1>Front-End Engineer</h1>
        <p>Skill: ReactJS + TypeScipt + Redux</p>
      </animated.div>
    </div>
  );
}
