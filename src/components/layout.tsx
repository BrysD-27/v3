"use client";
import { GlobalStyling, theme } from "@/styles/globalcomponents";
import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
  }F

  @media (min-width: 1025px) {
    justify-content: space-between;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="root" className="font-default">
        <GlobalStyling />
        <StyledContainer>{children}</StyledContainer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
