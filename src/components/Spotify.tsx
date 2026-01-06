import qrCode from "../assets/qrcode-spotify.png";
import { useI18n } from "../i18n/use-i18n";

export const Spotify = () => {
  const { t } = useI18n();

  return (
    <>
      <div className="relative">
        <div className="absolute w-screen -z-10 h-[200px] bg-primarylight -top-[70px]" />
        <div className="relative w-screen overflow-hidden bg-primarylight text-primarydark clip-trapezoid-both flex items-center justify-center z-10 font-body p-4">
          <div id="spotify" className="absolute top-[60px]" />

          <div className="max-w-3xl w-full mt-[100px] mb-[150px] flex flex-col md:flex-row md:justify-between items-center gap-12">
            <div className="order-2 md:order-1">
              <a
                href="https://open.spotify.com/playlist/0PAiJOKPBsiU1YMYnB1Jno?si=IaYK_fc3RGiMoCz2Xckkzw&pi=oDkN4mJpRv2_V"
                target="_blank"
              >
                <img
                  src={qrCode}
                  alt="Wedding rings"
                  className="w-56 mx-auto"
                />
              </a>
              <p className="mt-3 text-center uppercase">{t("scanOrClick")}</p>
            </div>

            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-10 uppercase">
                {t("spotifyTitle")}
              </h2>
              <p className="mb-4">{t("spotifyContent1")}</p>
              <p>{t("spotifyContent2")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
