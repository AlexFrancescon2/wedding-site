import { AnimatePresence, motion } from "framer-motion";

import { useEffect } from "react";
import { useI18n } from "../i18n/use-i18n";

interface SuccessPopupProps {
  message: string;
  gifUrl?: string;
  onClose: () => void;
}

export const Popup = ({ message, gifUrl, onClose }: SuccessPopupProps) => {
  const { t } = useI18n();

  useEffect(() => {
    // Save original overflow styles
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Prevent scrolling
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restore original styles
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl p-8 max-w-sm w-full text-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {gifUrl && (
            <img
              src={gifUrl}
              alt="Celebration"
              className="mx-auto mb-4 w-32 h-32"
            />
          )}
          <h2 className="text-xl font-bold mb-2 text-primarydark">{message}</h2>
          <button
            className="mt-4 px-6 py-2 bg-primarydark text-white rounded-full font-semibold hover:bg-primary/80 transition"
            onClick={onClose}
          >
            {t("close")}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
