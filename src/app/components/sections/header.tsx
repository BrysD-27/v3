"use client";
import BackgroundAnimation from "../background-animation";
import Nav from "../nav";
import styled from "styled-components";

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
    <>
      <StyledHeader>
        <StyledHeaderContent>
          <div className="mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-200 sm:text-5xl">
              Bryson Davis
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
              Full stack Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I craft accessible, scalable, full-stack web solutions.
            </p>
            <Nav />
          </div>
          <ul className="flex">
            <li>
              <a>Github</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
          </ul>
        </StyledHeaderContent>
        <BackgroundAnimation />
      </StyledHeader>
      <main>
        Test
      </main>
    </>
  );
};

export default Header;
