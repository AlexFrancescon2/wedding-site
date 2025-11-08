import { useEffect, useState, type ReactNode } from "react";
import img1 from "../assets/matrimonio3.jpg";
import img2 from "../assets/matrimonio2.jpg";
import img3 from "../assets/matrimonio.jpg";
import mobileImg1 from "../assets/bg-mobile-1.jpeg";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export const BackgroundWrapper = ({ children }: Props) => {
  const desktopImages = [img1, img2, img3];
  const mobileImages = [mobileImg1];
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const images = isMobile ? mobileImages : desktopImages;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[current]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Foreground content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
};
