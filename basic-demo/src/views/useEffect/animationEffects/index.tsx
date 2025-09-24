/*
 * @Author: st004362
 * @Date: 2025-06-09 16:09:21
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-09 16:36:22
 * @Description:
 */
import { useState, useEffect, useRef } from "react";
import { FadeInAnimation } from "./animation.ts";

function Welcome() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const animation = new FadeInAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
      }}
    >
      Welcome
    </h1>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
