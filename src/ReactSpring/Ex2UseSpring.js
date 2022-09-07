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
  return (
    <div>
      <animated.div
      className="display-4"
        style={{
          //   color: propsUseSpring.color.to((r, g, b) => {
          //     return `rgb(${r},${g},${b})`;
          //   }),

          color: color.to((r,g,b)=>{return `rgb(${r},${g},${b})`}),
        }}
      >
        Hello Stranger
      </animated.div>
    </div>
  );
}
