import { useMediaQuery } from "@uidotdev/usehooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const container = useRef(null);

  const isPhone = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const enterStyles = {
    scale: useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, 40]),
    opacity: useTransform(scrollYProgress, [0, 0.1, 1], [1, 1, 0]),
  };

  const resultStyles = {
    scale: useTransform(scrollYProgress, [0, 0.9, 1], [0, 0, 1]),
  };

  if (isPhone) {
    return (
      <div
        ref={container}
        className="relative overflow-hidden h-[100dvh] w-full flex flex-col justify-center items-center text-center bg-blue-400"
      >
        <h1 className="text-[44px]  font-bold text-black">
          Please use large screen
        </h1>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className="relative overflow-hidden h-[300vh] w-full flex flex-col text-center from-green-400 to-blue-400 bg-gradient-to-t"
    >
      <div className="h-[100vh] flex items-center justify-center w-full">
        <motion.h1 className="text-[134px] leading-[113px] font-bold text-black">
          SMOOTH & ZOOM WEB SCROLLING
        </motion.h1>
      </div>
      <div className="fixed top-0 h-[100vh] w-full">
        <motion.div
          style={enterStyles}
          className="absolute flex items-center justify-center w-full h-full"
        >
          <h2 className="font-bold text-black">ENTER</h2>
        </motion.div>
      </div>
      <motion.div
        style={resultStyles}
        className="fixed top-0 h-[100vh] flex items-center justify-center w-full"
      >
        <h2 className="text-xl font-bold text-black ">HERE THE RESULT</h2>
      </motion.div>
    </div>
  );
};

export default Home;
