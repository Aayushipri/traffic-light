import logo from "./logo.svg";
import "./App.css";
import { color_config } from "./config";
import { cx } from "@emotion/css";
import { useEffect, useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("red");

  let timerID;

  useEffect(() => {
    color_config.map((item) => {
      if (item.color === currentColor) {
        timerID = setTimeout(() => setCurrentColor(item.next), item.timer);
      }
    });

    return () => {
      clearTimeout(timerID);
    };
  }, [currentColor]);

  return (
    <div className="App">
      <div>Traffic Light</div>

      <div className="wrapper">
        {color_config.map((item) => (
          <div
            className={cx("circle", {
              [`${item.color}`]: item.color === currentColor,
            })}
            key={`${item.color}`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
