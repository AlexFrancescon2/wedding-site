import { Countdown } from "./Countdown";
import { RSVPButton } from "./RSVPButton";
import { WeddingInfo } from "./WeddingInfo";

export const LandingSection = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
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
