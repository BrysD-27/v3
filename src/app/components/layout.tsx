"use client";
import { GlobalStyling, theme } from "@/styles/globalcomponents";
import styled, { ThemeProvider } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  gap: 1rem;
  max-width: 1280px; /* Equivalent to Tailwind's max-w-7xl */
  margin: 0 auto; /* Centers the container */
  flex-wrap: wrap;
  text-wrap: wrap;

    @media (max-width: 1024px) { 
      flex-direction: column; 
    }

    @media (min-width: 1025px) { 
      justify-content: space-between;
    }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="root" className="font-default">
        <GlobalStyling />
        <StyledContainer>
          {children}
        </StyledContainer>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
