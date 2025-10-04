import { WEDDING_DATE } from "../globals";

export const WeddingInfo = ({ lang = "it" }) => {
  const weddingDate: Date = new Date(WEDDING_DATE);

  // Format the day and rest
  const dayName = weddingDate.toLocaleDateString(lang, { weekday: "long" });
  const rest = weddingDate.toLocaleDateString(lang, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between rounded-full bg-white shadow-lg overflow-hidden w-[95vw] md:w-[400px] mx-auto">
      <div className="flex-1 text-center p-6">
        <div className="text-xl text-gray-800 font-body">{dayName}</div>
        <div className="text-l text-gray-800 font-body">{rest}</div>
      </div>

      <div className="w-px bg-gray-400 h-16"></div>

      <div className="flex-1 text-center p-6">
        <p className="text-l text-gray-800 font-body">
          <a
            href="https://maps.app.goo.gl/37ocznLSdfYoSHQD6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-center"
          >
            Locanda Armonia
          </a>
        </p>
        <p className="text-l text-gray-800 font-body">Bergamo, IT</p>
      </div>
    </div>
  );
};
