import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Counter = ({ number, type, timer = 2 }) => {
  const refForRender = useRef(null);
  const isInView = useInView(refForRender);
  const [state, setState] = useState(0);
  const ref = useRef(0);
  const accumulaor = number / 500;

  const updateCurrentState = () => {
    if (isInView) {
      if (ref.current < number) {
        if (isInView) {
          const result = Math.ceil(accumulaor + ref.current);
          if (result > number) {
            return setState(number);
          }
          setState(result);
          ref.current = result;
          setTimeout(updateCurrentState, timer);
        } else {
          setState(0);
          ref.current = 0;
          return;
        }
      }
   
    } else {
      setState(0);
      ref.current = 0;
      return;
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCurrentState();
    }
    return () => (isMounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, isInView]);
  
  return (
    <div ref={refForRender} className="counter--count">
      <div className="counter-count--number">{state}</div>
      <div className="counter-count--type">{type}</div>
    </div>
  );
};