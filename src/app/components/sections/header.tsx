"use client";
import BackgroundAnimation from "../background-animation";
import Nav from "../nav";
import styled from "styled-components";
import Social from "../social";
import Link from "next/link";

const StyledHeader = styled.header`
  @media (min-width: 1024px) {
    width: 48%;
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: relative;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
  }
`;

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  z-index: 5;
  flex: 1;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <div className="lg:mb-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
            <Link href="/">Bryson Davis</Link>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
            Full stack Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal">
            I craft accessible, scalable, full-stack web solutions.
          </p>
          <Nav />
        </div>
        <Social />
      </StyledHeaderContent>
      <BackgroundAnimation />
    </StyledHeader>
  );
};

export default Header;
