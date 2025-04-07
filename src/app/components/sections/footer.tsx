"use client";
import { StyledParagraph } from "@/styles/globalcomponents";
import styled from "styled-components";

const StyledFooter = styled.footer`
    max-width: 28rem;
    font-size: .875rem;
    line-height: 1.25rem;
`;

const Footer = () => {
  return (
      <StyledFooter>
        <StyledParagraph>
          Coded in Visual Studio Code.
          Built with Next.js and Tailwind CSS, deployed with blank.
        </StyledParagraph>
      </StyledFooter>
  );
};

export default Footer;
