"use client";
import { GlobalStyling, StyledContent, theme } from "@/styles/globalcomponents";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div id="root" className="bg-background text-white font-default">
        <GlobalStyling />
        <StyledContent>{children}</StyledContent>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
