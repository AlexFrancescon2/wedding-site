import { BackgroundWrapper } from "../components/BackgroundWrapper";
import { Form } from "../components/Form";
import { Honeymoon } from "../components/Honeymoon";
import { LandingSection } from "../components/Landing";
import { Spotify } from "../components/Spotify";

export const Home = () => {
  return (
    <>
      <BackgroundWrapper>
        <LandingSection />
        <Form />
        <Spotify />
        <Honeymoon />
      </BackgroundWrapper>
    </>
  );
};
