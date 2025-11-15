import { useI18n } from "../i18n/use-i18n";

export const Honeymoon = () => {
  const { t } = useI18n();

  return (
    <section className="relative w-screen bg-white -top-[50px]">
      <div className="py-16 px-6 sm:px-12 bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 rounded-3xl max-w-4xl mx-auto mt-16 overflow-hidden shadow-xl">
        {/* Decorative icons/placeholders */}
        <img
          src="/placeholder-plane.svg"
          alt="plane"
          className="absolute top-0 right-0 w-32 opacity-20 animate-bounce"
        />
        <img
          src="/placeholder-palm.svg"
          alt="palm tree"
          className="absolute bottom-0 left-0 w-40 opacity-15"
        />

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-4 text-center">
          {t("honeymoonTitle")}
        </h2>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-purple-800 mb-10 text-center">
          {t("honeymoonSubtitle")}
        </p>

        {/* Contribution Card */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg mx-auto text-center transform hover:-translate-y-1 transition-all duration-300">
          <p className="text-purple-800 font-medium mb-6">
            {t("honeymoonText")}
          </p>
          <div className="inline-block bg-purple-50 border border-purple-200 rounded-lg p-4 font-mono text-purple-900 text-lg break-all cursor-pointer hover:bg-purple-100 transition-colors">
            IBAN: IT60X0542811101000000123456
          </div>
        </div>
      </div>
    </section>
  );
};
