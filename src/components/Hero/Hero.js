import React from "react";
import { HeroSection } from "./Hero.elements";
import { Container } from "../../globalStyles";

const Hero = ({ lightBg }) => {
  return (
    <>
      <HeroSection lightBg={lightBg}>
        <Container>
            <HeroRow imgStart={imgStart}>
                <HeroColumn>
                    <TextWrapper>lazar</TextWrapper>
                </HeroColumn>
            </HeroRow>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
