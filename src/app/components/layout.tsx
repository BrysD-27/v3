"use client";
import { GlobalStyling, StyledContainer, theme } from "@/styles/globalcomponents";
import { ThemeProvider } from "styled-components";

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
