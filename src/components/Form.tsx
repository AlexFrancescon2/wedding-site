import { Timestamp, addDoc, collection } from "firebase/firestore";

import { Popup } from "./SuccessPopup";
import branches from "../assets/branches.svg";
import { db } from "../../firebase";
import rings from "../assets/wedding-rings.png";
import { useForm } from "react-hook-form";
import { useI18n } from "../i18n/use-i18n";
import { useState } from "react";

interface FormData {
  name: string;
  people: number;
  dietary: string;
  dietaryCount: number;
  kids: number;
  notes: string;
}

export const Form = () => {
  const { t } = useI18n();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await addDoc(collection(db, "rsvps"), {
        name: data.name || "",
        people: Number(data.people) || 0,
        dietary: data.dietary || "",
        dietaryCount: Number(data.dietaryCount) || 0,
        kids: Number(data.kids) || 0,
        notes: data.notes || "",
        timestamp: Timestamp.fromDate(new Date()),
      });
      reset();
      setShowSuccess(true);
    } catch {
      setShowFail(true);
    }
  };

  const onSuccessCallback = () => {
    const formSection = document.getElementById("honeymoon");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-[120vh] w-screen overflow-hidden bg-primary clip-trapezoid-both flex items-center justify-center z-10">
      <div id="rsvp-form" className="absolute top-[60px]" />

      <img
        src={branches}
        alt="branches"
        className="
    absolute
    invert brightness-0 scale-x-[-1]
    rotate-[15deg] left-48 top-72
    w-[180px] md:w-[280px] 
  "
      />
      {/* bg-white/20 backdrop-blur-md shadow-xl rounded-3xl */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-10  max-w-2xl w-full mt-[100px] mb-[150px] z-4"
      >
        <div className="flex items-center justify-center mb-10">
          <img src={rings} alt="Wedding rings" className="w-32" />;
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center text-primarydark underline">
          {t("formTitle")}
        </h2>
        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            {t("name")}
          </label>
          <input
            {...register("name", { required: t("namePlaceholder") })}
            className="
    w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500 
    border border-transparent
    focus:border-primarydark focus:outline-none
    transition
  "
            placeholder={t("namePlaceholder")}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        {/* Number of people */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            {t("totalAttendees")}
          </label>
          <input
            type="number"
            {...register("people", {
              required: t("totalAttendeesRequired"),
              min: { value: 1, message: t("totalAttendeesMin") },
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
            placeholder={t("totalAttendeesRequired")}
          />
          {errors.people && (
            <p className="text-red-400 text-sm mt-1">{errors.people.message}</p>
          )}
        </div>
        {/* Two fields side by side: Dietary info + number of people with dietary restrictions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-semibold text-primarydark">
              {t("dietaryRestrictions")}
            </label>
            <input
              {...register("dietary")}
              className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
              placeholder={t("dietaryRestrictionsPlaceholder")}
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-primarydark">
              {t("dietaryRestrictionsNumber")}
            </label>
            <input
              type="number"
              {...register("dietaryCount")}
              className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
              placeholder={t("dietaryRestrictionsNumberPlaceholder")}
            />
          </div>
        </div>
        {/* Number of kids */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            {t("NumberOfKids")}
          </label>
          <input
            type="number"
            {...register("kids")}
            className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
            placeholder={t("NumberOfKidsPlaceholder")}
          />
        </div>
        {/* Additional notes */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            {t("notes")}
          </label>
          <textarea
            {...register("notes")}
            className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
            placeholder={t("notesPlaceholder")}
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-white text-primarydark font-semibold rounded-full hover:bg-white/90 transition text-lg"
        >
          {isSubmitting ? t("sending") : t("send")}
        </button>
      </form>
      <img
        src={branches}
        alt="branches"
        className="
    absolute
    invert brightness-0
    rotate-[-15deg] right-48 top-72
    w-[180px] md:w-[280px] 
  "
      />
      {showSuccess && (
        <Popup
          message={t("formSuccessTitle")}
          gifUrl="https://i.pinimg.com/originals/ce/4e/74/ce4e7484ae0727138d035eea8155f600.gif"
          onClose={() => {
            setShowSuccess(false);
            onSuccessCallback();
          }}
        />
      )}
      {showFail && (
        <Popup
          message={t("formFailTitle")}
          gifUrl="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyeXhtbzgybHQ0ODVtZXF4cjN4MTZ5ejRhaDQxMWI1MjZuY3Z3d2VkeiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Y0xtyHetvfEBIk5FKh/200w.gif"
          onClose={() => setShowFail(false)}
        />
      )}
    </div>
  );
};
