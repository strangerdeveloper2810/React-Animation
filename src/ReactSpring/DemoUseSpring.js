import React from "react";
import { useSpring, animated } from "react-spring";
export default function DemoUseSpring(props) {
  const propsAnimation = useSpring({
    color: "red",
    from: { color: "green" },
    config: { duration: 1000 },
  });
  return (
    <animated.div style={propsAnimation}>
      <h1 className="display-4"> Demo useSpring</h1>
    </animated.div>
  );
}
