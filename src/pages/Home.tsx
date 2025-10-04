import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Countdown } from "../components/Countdown";
import { RSVPButton } from "../components/RSVPButton";
import { WeddingInfo } from "../components/WeddingInfo";
import img1 from "../assets/matrimonio3.jpg";
import img2 from "../assets/matrimonio2.jpg";
import img3 from "../assets/matrimonio.jpg";

export const Home = () => {
  const images = [img1, img2, img3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div>
          <div className="mb-10 mt-11">
            <Countdown />
          </div>
          <div className="mb-10">
            <h1
              className="
    font-title 
    text-white 
    text-center 
    leading-tight 
    text-5xl 
    sm:text-6xl 
    md:text-7xl 
    lg:text-8xl 
    xl:text-9xl
  "
            >
              Morgane & Alex
            </h1>
          </div>

          <WeddingInfo />
          <div className="mt-20 flex items-center justify-center">
            <RSVPButton />
          </div>
        </div>
      </div>
    </div>
  );
};
