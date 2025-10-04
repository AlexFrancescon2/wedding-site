import { useEffect, useState } from "react";

import Header from "./Header";
import hero1 from "../assets/bride.jpg";
import hero2 from "../assets/bride2.jpg";
import hero3 from "../assets/bride3.jpg";
import { motion } from "framer-motion";

const images = [hero1, hero2, hero3];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center px-4">
      <motion.div
        initial={{ x: -100, skewY: 5, scale: 0.95, opacity: 0 }}
        animate={{
          x: 0,
          skewY: 0,
          scale: 1,
          opacity: loaded ? 1 : 0,
        }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-primarydark rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden"
      >
        <div className="w-full">
          <Header />
        </div>

        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="md:w-1/2 h-auto md:h-full flex-shrink-0">
            <img
              key={currentImage}
              src={images[currentImage]}
              alt="Wedding"
              className="w-full h-full object-cover rounded-bl-xl transition-all duration-700"
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              We plan <br />
              <span className="text-pink-600">Magical moments</span>.
            </h1>
            <p className="text-gray-600 text-sm md:text-base mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Sed lacinia, urna non tincidunt mattis, tortor neque
              adipiscing diam, a cursus ipsum ante quis turpis.
            </p>
            <button className="px-6 py-3 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 w-fit">
              See Plans
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
