import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { HERO_CONTENT } from "../../constants";
// import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react";

// animation
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const type = useRef(null);

  useEffect(() => {
    const typed = new Typed(type.current, {
      strings: ["Front-End Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* section content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Opan Surgawan
            </motion.h1>
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              <span
                ref={type}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
              ></span>
            </motion.div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* section image */}
        {/* <div className="w-full lg:w-1/2 lg:pt-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="opan junior"
              className="max-w-full object-contain w-[500px] h-[500px]"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
