import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const WithService = ({
  children,
  initialScale,
  visibleScale,
  initialX,
  initialY,
  visibleX,
  visibleY,
  duration,
  delay,
  width,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[isInView]);
  return (
    <div
      ref={ref}
      style={{
        width,
      }}
    >
      <motion.div
        variants={{
          hidden: { y: initialY, x: initialX, scale: initialScale },
          visible: { y: visibleY, x: visibleX, scale: visibleScale },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
        style={{ width }}
      >
        {children}
      </motion.div>
    </div>
  );
};
