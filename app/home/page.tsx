"use client";

import { ReactNode, useState } from "react";
import styles from "./page.module.scss";
import { Transition } from "@mantine/core";

function Home() {
  const [count, setCount] = useState(0);
  const [mount, setMount] = useState(true);

  const getTransition = () => {
    setMount(false);
    setTimeout(() => {
      setCount((prev) => prev + 1);
      setMount(true);
    }, 200);
  };

  const slideInFromLeftOutToRight = {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(20px)" }, // slide right on exit
    common: { willChange: "transform, opacity" },
    transitionProperty: "transform, opacity",
  };
  const componentsMap: Record<number, ReactNode[]> = {
    0: [
      <Transition
        mounted={mount}
        transition={slideInFromLeftOutToRight}
        duration={200}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div style={transitionStyle}>
            <div>Hello 1</div>
          </div>
        )}
      </Transition>,
      <Transition
        mounted={mount}
        transition={slideInFromLeftOutToRight}
        duration={200}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div style={transitionStyle}>
            <div>Bye 1</div>
          </div>
        )}
      </Transition>,
    ],
    1: [
      <Transition
        mounted={mount}
        transition={slideInFromLeftOutToRight}
        duration={200}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div style={transitionStyle}>
            <div>Hello 2</div>
          </div>
        )}
      </Transition>,
      <Transition
        mounted={mount}
        transition={slideInFromLeftOutToRight}
        duration={200}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div style={transitionStyle}>
            <div>Bye 2</div>
          </div>
        )}
      </Transition>,
    ],
    2: [
      <Transition
        mounted={mount}
        transition={slideInFromLeftOutToRight}
        duration={200}
        timingFunction="ease"
      >
        {(transitionStyle) => (
          <div style={transitionStyle}>
            <div>Hello 3</div>
          </div>
        )}
      </Transition>,
      <Transition
        mounted={mount}
        transition={slideInFromLeftOutToRight}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <div style={transitionStyle}>
            <div>Bye 3</div>
          </div>
        )}
      </Transition>,
    ],
  };

  return (
    <div className={styles.home}>
      {componentsMap[count % 3][0]}
      <button type="button" onClick={() => getTransition()}>
        click
      </button>
      {componentsMap[count % 3][1]}
    </div>
  );
}

export default Home;
