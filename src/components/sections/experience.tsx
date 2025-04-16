"use client";
import { experienceInfo } from "../../../public/content/data";
import { StyledHeading, StyledSection } from "@/styles/globalcomponents";
import styled from "styled-components";

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
      color: rgb(161 161 170 / var(--tw-text-opacity, 1));
      @media (min-width: 640px) {
        grid-column: span 2 / span 2;
      }
      display: flex;
      align-items: start;
      div:last-child {
        display: flex;
        align-items: center;
      }

      div:last-child::before {
        content: "";
        width: 0.75rem;
        height: 1px;
        margin: 0 0.375rem 0 0.375rem;
        background-color: rgb(113 113 122 / 1);
      }
    }
  }
`;

const StyledContainerDiv = styled.div`
  display: grid;
  position: relative;
  padding-bottom: .25rem;
  @media (width >= 768px) {
    gap: 1rem;
    }
    @media (width >= 640px) {
      gap: 2rem;
      grid-template-columns: repeat(8, minmax(0, 1fr));
  }
    transition: color 0.15s ease-in-out;

    &:hover {
      @media (min-width: 1024px) {
        color: rgb(228 228 231 / var(--tw-text-opacity, 1));
    }
  }

  &:hover ${() => StyledOverlayDiv} {
    @media (min-width: 1024px) {
        box-shadow: inset 0 1px 0 0 rgb(244 244 245 / 0.03);
        background-color: #27272a80;
    }
  }

  &:hover ${() => StyledTitleAnchor} {
    @media (min-width: 1024px) {
      transition: color 0.15s ease-in-out;
      color: rgb(56 189 248 / var(--tw-text-opacity, 1));
      svg {
        transition: transform 0.15s ease-in-out;
        transform: translateY(-15%) translateX(15%);
      }
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
    transition-property: background-color, box-shadow;
    transition: 0.15s ease-in-out;
    left: -1.5rem;
    right: -1.5rem;
    display: block;
  }
`;

const StyledContentDiv = styled.div`
  z-index: 10;
  grid-column: span 6 / span 6;

  p {
    letter-spacing: 0.04rem;
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
    background-color: rgb(56 189 248 / 0.1);
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
    top: -1rem;
    bottom: -1rem;
  }
  @media (max-width: 1024px) {
      display: none;
  }
`;

const StyledTitleAnchor = styled.a`
  display: inline-flex;
  align-items: baseline;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 768px) {
    &:hover {
      transition: color 0.15s ease-in-out;
      color: rgb(56 189 248 / var(--tw-text-opacity, 1));
        svg {
          transition: transform 0.15s ease-in-out;
          transform: translateY(-15%) translateX(15%);
        }
      }
    }
  }
`;

const Experience = () => {
  return (
    <StyledSection id="experience" aria-label="Work experience">
      <StyledHeading>
        <h2>Experience</h2>
      </StyledHeading>
      <StyledGroupList>
        <ol>
          {experienceInfo.map(
            ({ company, title, range, link, description, technologies }, i) => (
              <li className="mb-12" key={i}>
                <StyledContainerDiv>
                  <StyledOverlayDiv></StyledOverlayDiv>
                  <header>
                    {range.split("-").map((value, i) => (
                      <div key={i}>{value}</div>
                    ))}
                  </header>
                  <StyledContentDiv>
                    <StyledHeading3>
                      <div>
                        <StyledTitleAnchor href={link} target="_blank">
                          <StyledOverlaySpan></StyledOverlaySpan>
                          <span>
                            {title + " • "}
                            <span className="inline-block">
                              {company}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </StyledTitleAnchor>
                      </div>
                    </StyledHeading3>
                    <p className="mt-2 text-sm leading-normal">{description}</p>
                    <StyledUnorderedList>
                      {technologies.map((value, i) => (
                        <li className="mr-1.5 mt-2" key={i}>
                          <div className="text-sky-300">{value}</div>
                        </li>
                      ))}
                    </StyledUnorderedList>
                  </StyledContentDiv>
                </StyledContainerDiv>
              </li>
            )
          )}
        </ol>
      </StyledGroupList>
      <div className="mt-12">
        <StyledTitleAnchor className="cursor-pointer" href="/resume.pdf" target="_blank" rel="noopener norefferer">
          <span>
            View Full Résumé
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </span>
        </StyledTitleAnchor>
      </div>
    </StyledSection>
  );
};

export default Experience;
