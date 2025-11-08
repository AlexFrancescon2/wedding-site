import { BackgroundWrapper } from "../components/BackgroundWrapper";
import { Form } from "../components/Form";
import { LandingSection } from "../components/Landing";

export const Home = () => {
  return (
    <>
      <BackgroundWrapper>
        <LandingSection />
        <Form />
      </BackgroundWrapper>
    </>
  );
};
