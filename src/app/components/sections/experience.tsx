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

const StyledGroupList = styled.div`
    li {
        margin-bottom: 3rem;
    }
    div {
        position: relative;
        display: grid;
        padding-bottom: .25rem;
        @media(min-width: 640px) {
            grid-template-columns: repeat(8, minmax(0, 1fr));
        }
        @media(min-width: 768px) {
            gap: 1rem;
        }
    }
`;

const Experience = () => {
  return (
      <StyledSection id="about" aria-label="About me">
          <StyledHeading>
            <h2>Experience</h2>
          </StyledHeading>
          <StyledGroupList>
            <ol>
                <li>Test</li>
            </ol>
          </StyledGroupList>
      </StyledSection>
  );
};

export default Experience;
