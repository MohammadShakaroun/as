import { useInView } from "framer-motion";

function UseAnimateHook(ref) {
  const inView = useInView(ref, { once: true });

  return {inView };
}

export default UseAnimateHook;
