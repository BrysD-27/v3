"use client";
import { experienceInfo } from "@/public/content/data";
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
  z-index: 20;
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
  div {
    header {
      z-index: 10;
      margin-bottom: 0.5rem;
      margin-top: 0.25rem;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06rem;
      @media (min-width: 640px) {
        grid-column: span 2 / span 2;
      }
    }
  }
`;

const StyledOverlayDiv = styled.div`
  position: absolute;
  top: -1rem;
  bottom: -1rem;
  z-index: 0;
  border-radius: 0.375rem;
  @media (min-width: 1024px) {
    left: -1.5rem;
    right: -1.5rem;
    display: block;
  }
`;

const StyledContentDiv = styled.div`
  z-index: 10;
  grid-column: span 6 / span 6;

  p {
    letter-spacing: .04rem;
  }
`;

const StyledHeading3 = styled.h3`
  h3 {
    font-weight: 500;
    line-height: 1.375;
    a {
      display: inline-flex;
      align-items: baseline;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25;
    }
  }
`;

const StyledUnorderedList = styled.ul`
  flex-wrap: wrap;
  margin-top: 0.5rem;
  display: flex;
  div {
    display: flex;
    align-items: center;
    border-radius: 9999px;
    padding: 0.25rem 0.75rem 0.25rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.25rem;
    background-color: rgb(56 189 248 / .1);
  }
  `;

const StyledOverlaySpan = styled.span`
  position: absolute;
  border-radius: 0.25rem;
  @media (min-width: 1024px) {
    display: block;
  }
  @media (min-width: 768px) {
    left: -1.5rem;
    right: -1.5rem;
    top: 1rem;
    bottom: 1rem;
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
          {experienceInfo.map(
            ({ company, title, range, description, technologies }, i) => (
              <li className="mb-12" key={i}>
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <StyledOverlayDiv></StyledOverlayDiv>
                  <header>{range}</header>
                  <StyledContentDiv>
                    <StyledHeading3>
                      <div>
                        <a>
                          <StyledOverlaySpan></StyledOverlaySpan>
                          <span>
                            {title}
                            <span className="inline-block">
                              {company}
                            </span>
                          </span>
                        </a>
                      </div>
                    </StyledHeading3>
                    <p className="mt-2 text-sm leading-normal">
                      {description}
                    </p>
                    <StyledUnorderedList>
                      {technologies.map(( value, i) => (
                        <li className="mr-1.5 mt-2" key={i}>
                          <div className="text-sky-300">{value}</div>
                        </li>
                      ))}
                    </StyledUnorderedList>
                  </StyledContentDiv>
                </div>
              </li>
            )
          )}
        </ol>
      </StyledGroupList>
    </StyledSection>
  );
};

export default Experience;
