import { motion } from "framer-motion";
import plane from "../assets/plane.png";
import { useI18n } from "../i18n/use-i18n";

export const Honeymoon = () => {
  const { t } = useI18n();

  return (
    <div className="relative">
      <div className="absolute w-screen -top-[70px] h-[150px] bg-white text-black"></div>
      <div className="py-16 bg-white px-4 sm:px-0 overflow-x-hidden bg-white">
        <motion.div
          className="flex items-stretch max-w-full sm:max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          initial={{ x: -500, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 20 },
          }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div id="honeymoon" />

          {/* Left panel with plane */}
          <div className="w-1/3 bg-primary flex items-center justify-center p-4 sm:p-8 relative">
            <motion.img
              src={plane}
              alt="plane"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-24 h-24 sm:w-40 sm:h-40"
            />
          </div>

          {/* Right panel with text */}
          <div className="flex-1 bg-primarydark p-4 sm:p-12 text-white relative">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-semibold tracking-wide mb-4">
              {t("honeymoonTitle")}
            </h2>

            <p className="text-xs sm:text-lg lg:text-xl mb-6 max-w-full">
              {t("honeymoonSubtitle")}
            </p>

            <p className="text-xs sm:text-base lg:text-lg mb-8 max-w-full">
              {t("honeymoonText")}
            </p>

            <div className="bg-white p-3 sm:p-8 rounded-2xl shadow-bg max-w-full mx-auto text-center transform hover:-translate-y-1 transition-all duration-300 text-primarydark text-xs sm:text-base">
              IT60X0542811101000000123456
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
