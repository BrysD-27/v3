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
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const StyledAnchor = styled.a`
  font-weight: 500;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));

  transition: color 0.1s ease-in-out;

  &:hover,
  &:focus {
    color: rgb(56 189 248 / var(--tw-text-opacity, 1));
  }
`;

const StyledFancySpan = styled.span`
  font-weight: 500;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
  transition: color 0.1s ease-in-out;

  &:hover,
  &:focus {
    cursor: url(/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiamond.b8577623.ico&w=64&q=75), auto;
    color: rgb(94 234 212 / var(--tw-text-opacity, 1));
  }
}
`;

const StyledParagraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.625;
`;

const About = () => {
  return (
      <StyledSection id="about" aria-label="About me">
        <StyledHeading>
          <h2>About</h2>
        </StyledHeading>
        <div>
          <StyledParagraph>
            {"I'm"} a developer passionate about building well-engineered,
            intuitive user experiences. I enjoy working at the intersection of
            design and development, crafting interfaces that are not only
            visually appealing but also performant and user-friendly. Clean
            code, efficiency, and accessibility are core to my approach.
          </StyledParagraph>
          <StyledParagraph>
            Currently, {"I'm"} a Software Team Lead at{" "}
            <StyledAnchor href="https://www.hobbylobby.com/" target="_blank">
              Hobby Lobby
            </StyledAnchor>
            , specializing in accessibility and scalability. I contribute to the
            creation and maintenance of full-stack applications that enhance the
            efficiency and productivity of Hobby {"Lobby's"} stores, ensuring
            our suite of applications is intuitive, high-performing, and aligned
            with modern UI/UX standards to deliver an inclusive user experience.
          </StyledParagraph>
          <StyledParagraph>
            Beyond coding, {"I’m"} usually weightlifting, learning random
            subjects, spending time with my girlfriend and two cats, or
            exploring Minecraft for <StyledFancySpan>Diamonds</StyledFancySpan>.
          </StyledParagraph>
        </div>
      </StyledSection>
  );
};

export default About;
