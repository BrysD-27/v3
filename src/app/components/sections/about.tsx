"use client";
import styled from "styled-components";

const StyledSection = styled.section`
  @media (min-width: 1024px) {
    scroll-margin-top: 6rem;
    margin-bottom: 9rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 6rem;
  }
`;

const StyledHeading = styled.div`
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    @media (min-width: 1024px) {
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
    }
    h2 {
        letter-spacing: .1rem;
        text-transform: uppercase;
        font-weight: 700;
    }
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.625;
`;

const About = () => {
  return (
    <main>
      <StyledSection id="about" aria-label="About me">
        <div>
            <StyledHeading><h2>About</h2></StyledHeading>
        </div>
        <div>
          <StyledParagraph>
            {"I'm"} a developer passionate about building well-engineered, intuitive
            user experiences. I enjoy working at the intersection of design and
            development, crafting interfaces that are not only visually
            appealing but also performant and user-friendly. Clean code,
            efficiency, and accessibility are core to my approach.
          </StyledParagraph>
          <StyledParagraph>
            Currently, {"I'm"} a Software Team Lead at Hobby Lobby, specializing in
            accessibility and scalability. I contribute to the creation and
            maintenance of full-stack applications that enhance the efficiency
            and productivity of Hobby {"Lobby's"} stores, ensuring our suite of
            applications is intuitive, high-performing, and aligned with modern
            UI/UX standards to deliver an inclusive user experience.
          </StyledParagraph>
          <StyledParagraph>
            Beyond coding, {"I’m"} usually weightlifting, learning random subjects,
            hanging out with my girlfriend and two cats, or exploring Minecraft
            for diamonds.
          </StyledParagraph>
        </div>
      </StyledSection>
    </main>
  );
};

export default About;
