import React from "react";
import { useSpring, animated } from "react-spring";
export default function DemoUseSpring(props) {
  const propsAnimation = useSpring({
    color: "red",
    from: { color: "green" },
    config: { duration: 5000 },
  });

  const propsAnimationNumber = useSpring({
    num: 20,
    color: "orange",
    fontsize: 30,
    from: { num: 10, color: "blue", fontsize: 10 },
    config: { duration: 5000 },
  });

  const propsScroll = useSpring({
    scroll: 100,
    from: { scroll: 0 },
    config: {duration: 2000}
  });

  return (
    <div>
      <h1>Change Color Text</h1>
      <animated.div style={propsAnimation}>
        <h1 className="display-4"> Demo useSpring</h1>
      </animated.div>
      <hr />
      <h1>Change Number</h1>
      <animated.h1 style={{color: propsAnimationNumber.color, fontSize: propsAnimationNumber.fontsize}}>{propsAnimationNumber.num}</animated.h1>

      <animated.p style={{ fontSize: propsAnimationNumber.num }}>
        Hello
      </animated.p>

      <hr />
      <h1>Scroll</h1>
      <animated.div scrollTop={propsScroll.scroll}>
        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>

        <p className="text-success display-3">Hello</p>
      </animated.div>
    </div>
  );
}
