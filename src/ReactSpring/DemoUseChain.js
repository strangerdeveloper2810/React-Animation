import {
  useSpring,
  useChain,
  useTransition,
  animated,
  useSpringRef,
} from "@react-spring/web";
import React, { useState } from "react";

export default function DemoUseChain() {
  //Tạo 1 useSpring animation
  let springRef = useSpringRef();
  let [arrContent, setArrContent] = useState([
    { id: 1, title: "Front-End Developer", content: "ReactJS" },
    { id: 2, title: "Back-End Developer", content: "NodeJS" },
    { id: 3, title: "Mobile Developer", content: "Flutter" },
  ]);

  const propsAnimation = useSpring({
    opacity: 1,
    width: "100%",
    height: "100%",
    from: { opacity: 0, width: "0%", height: "0%" },
    config: { duration: 500 },
    ref: springRef,
  });

  //Tạo 1 useTransition

  let transitionRef = useSpringRef();
  const transitions = useTransition(arrContent, {
    from: { transform: "translate3d(0,-40px,0)" },
    enter: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
      width: "100%",
      height: "100%",
    },
    leave: {
      transform: "translate3d(0,-40px,0)",
      opacity: 0,
      width: "100%",
      height: "0%",
    },
    config: { duration: 500 },
    ref: transitionRef,
  });

  //Kết hợp 2 useSpring
  useChain([springRef, transitionRef], [0, 0.5]);

  const deleteItem = (id) => {
    setArrContent([...arrContent.filter((item) => item.id !== id)]);
  };
  const renderItem = () => {
    return transitions((props, key, item) => (
      <animated.div
        key={key}
        style={props}
        className="bg-info text-danger p-3 mt-2 mb-2"
      >
        <div className="text-end ">
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteItem(item.item.id);
            }}
          >
            X
          </button>
        </div>
        <h3>{item.item.title}</h3>
        <p>{item.item.content}</p>

        {console.log("item", item)}
      </animated.div>
    ));
  };
  return (
    <div className="container">
      <animated.div style={propsAnimation}>{renderItem()}</animated.div>
    </div>
  );
}
