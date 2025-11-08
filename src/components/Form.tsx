import { Timestamp, addDoc, collection } from "firebase/firestore";

import { SuccessPopup } from "./SuccessPopup";
import { db } from "../../firebase";
import { useForm } from "react-hook-form";
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
  const [showSuccess, setShowSuccess] = useState(false);
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
    } catch (error) {
      console.error(error);
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="relative min-h-[120vh] w-screen overflow-hidden bg-primary clip-trapezoid-both flex items-center justify-center ">
      <div id="rsvp-form" className="absolute top-[60px]" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white/20 backdrop-blur-md p-10 rounded-3xl max-w-2xl w-full text-black shadow-xl my-[200px]"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-primarydark">
          RSVP
        </h2>

        {/* Name */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            Nome
          </label>
          <input
            {...register("name", { required: "Inserisci il tuo nome" })}
            className="
    w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500 
    border border-transparent
    focus:border-primarydark focus:outline-none
    transition
  "
            placeholder="Il tuo nome completo"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Number of people */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            Numero di persone
          </label>
          <input
            type="number"
            {...register("people", {
              required: "Indica il numero di persone",
              min: { value: 1, message: "Almeno 1 persona" },
            })}
            className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
            placeholder="2"
          />
          {errors.people && (
            <p className="text-red-400 text-sm mt-1">{errors.people.message}</p>
          )}
        </div>

        {/* Two fields side by side: Dietary info + number of people with dietary restrictions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 font-semibold text-primarydark">
              Informazioni alimentari
            </label>
            <input
              {...register("dietary")}
              className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
              placeholder="Vegan, senza glutine, ecc."
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-primarydark">
              Numero con restrizioni alimentari
            </label>
            <input
              type="number"
              {...register("dietaryCount")}
              className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
              placeholder="1"
            />
          </div>
        </div>

        {/* Number of kids */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            Numero di bambini (&lt;8 anni)
          </label>
          <input
            type="number"
            {...register("kids")}
            className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
            placeholder="0"
          />
        </div>

        {/* Additional notes */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-primarydark">
            Note aggiuntive
          </label>
          <textarea
            {...register("notes")}
            className="w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-500     border border-transparent
    focus:border-primarydark focus:outline-none
    transition"
            placeholder="Qualsiasi informazione aggiuntiva"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-white text-primarydark font-semibold rounded-full hover:bg-white/90 transition text-lg"
        >
          {isSubmitting ? "Invio..." : "Invia RSVP"}
        </button>
      </form>

      {showSuccess && (
        <SuccessPopup
          message="Grazie! RSVP ricevuto 🎉"
          gifUrl="https://i.pinimg.com/originals/ce/4e/74/ce4e7484ae0727138d035eea8155f600.gif"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

///entry.1673626679=Nome&entry.124610597=People&entry.2012505343=Dieta+info&entry.2015780199=number+of+dieta&entry.121606933=number+of+kids&entry.999310727=NOteeees
