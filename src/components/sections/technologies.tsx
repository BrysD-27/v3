"use client";
import { StyledHeading, StyledSection } from "@/styles/globalcomponents";
import styled from "styled-components";
import ReactIcon from "../icons/react";
import DatabaseIcon from "../icons/database";
import { technologies } from "../../../public/content/data";

const StyledGroupList = styled.div`
  div {
    header {
      margin-bottom: 0.5rem;
      margin-top: 0.25rem;
      font-size: 1.25rem;
      line-height: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06rem;
      color: rgb(161 161 170 / var(--tw-text-opacity, 1));
      display: flex;
      align-items: center;

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

export const StyledTechHeading = styled.div`
  padding-top: .5rem;
  white-space: nowrap;

  h2 {
    display: flex;
    align-items: center;
    svg {
      margin-right: 0.5rem;
    }
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const StyledSubHeading = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  white-space: nowrap;

  h5 {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const StyledUnorderedList = styled.ul`
  flex-wrap: wrap;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  padding-left: .8rem;
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

const StyledTechCategoryDiv = styled.div`
    padding-bottom: .5rem;
    @media (min-width < 1024px) {
        padding-left: 1.5rem;
    }
  }
`;

const StyledTechDiv = styled.div`
  padding-left: 3rem;
  padding-bottom: .25rem;
`;

const Technologies = () => {
  return (
    <StyledSection id="technologies" aria-label="Technologies">
      <StyledHeading>
        <h2>Technologies</h2>
      </StyledHeading>
      <StyledGroupList>
        <ol>
          {Object.entries(technologies).map(([key, value]) => (
            <li className="mb-4" key={key}>
              <StyledTechCategoryDiv>
                <StyledTechHeading>
                  <h2>
                    {key === "Front-End" ? <ReactIcon /> : <DatabaseIcon />}
                    {key}
                  </h2>
                </StyledTechHeading>
                {Object.entries(value).map(([propKey, propValue]) => (
                  <StyledTechDiv key={propKey}>
                    <StyledSubHeading>
                      <h5>&ndash; {propKey}</h5>
                    </StyledSubHeading>
                    <StyledUnorderedList>
                      {propValue.map((item, i) => (
                        <li className="mr-1.5 mt-2" key={i}>
                          <div className="text-sky-300">{item}</div>
                        </li>
                      ))}
                    </StyledUnorderedList>
                  </StyledTechDiv>
                ))}
              </StyledTechCategoryDiv>
            </li>
          ))}
        </ol>
      </StyledGroupList>
    </StyledSection>
  );
};

export default Technologies;
