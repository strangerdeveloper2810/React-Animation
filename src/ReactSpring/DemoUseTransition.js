import React, { useState } from "react";
import {useTransition, animated} from "@react-spring/web"
export default function DemoUseTransition(props) {
  const [arrItems, setArrItems] = useState([
    { id: 1, title: "Front-End Engineer", content: "ReactJS" },
    { id: 2, title: "Back-End Engineer", content: "NodeJS" },
    { id: 3, title: "Mobile Engineer", content: "Flutter" },
  ]);

  const [article, setArticle] = useState({
    id: "",
    title: "",
    content: "",
  });

  const propsUseTransition = useTransition(arrItems, {
    from: { transform: "translate3d(0,-40px,0)" }, //Component từ vị trí trước khi render
    enter: { transform: "translate3d(0,0px,0)" }, //Component tại thời điểm render
    leave: { transform: "translate3d(0,-40px,0)" },
    config: { duration: 600 },
  });

  const renderItem = () => {
    return propsUseTransition((props, item, key) => {
      return (
        <animated.div
          key={key}
          style={props}
          className="bg-dark text-white p-3 mt-2"
        >
          <div className="text-end">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              X
            </button>
          </div>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </animated.div>
      );
    });
  };

  const handleChange = (event) => {
    let { value, name } = event.target;
    setArticle({
      ...article,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let item = { ...article, id: Date.now() };

    setArrItems([...arrItems, item]);
  };

  const deleteItem = (id) => {
    setArrItems([...arrItems.filter((item) => item.id !== id)]);
  };

  return (
    <div className="container-fluid">
      {renderItem()}
      <div className="form-group mt-3">
        <h3>Title</h3>
        <input className="form-control" name="title" onChange={handleChange} />
      </div>

      <div className="form-group mt-3 mb-3">
        <h3>Content</h3>
        <input
          className="form-control"
          name="content"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-primary text-dark" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}
