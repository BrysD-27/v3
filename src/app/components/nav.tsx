"use client";
import styled from "styled-components";
import { navLinks } from "@/public/content/data";
import Link from "next/link";

const StyledNav = styled.nav`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 40%;
    &:hover li > a:not(:hover) {
    transition: opacity 0.15s ease-in-out;
      opacity: 0.7;
    }
    li {
      display: block;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      margin: 0;
      margin-left: 0;

      a {
        color: rgb(113 113 122 / var(--tw-text-opacity, 1));
        border-radius: 6px;
        display: flex;
        align-items: center;
        margin-top: 2px;
        padding: .9rem .9rem .9rem 0;
        width: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;
        transition: background-color 0.15s ease-in-out;

        &:before {
          display: inline-flex;
          content: "";
          background: rgb(113 113 122 / 1);
          width: 2rem;
          height: 2px;
          margin-right: 1rem;
          font-size: var(--fz-xxs);
          text-align: right;
          transition: 0.15s ease-in-out;
          transition-property: width, background;
        }
      }
    }

    a:hover, a:focus {
      background-color: #27272a80;
      box-shadow: inset 0 1px 0 0 rgb(244 244 245 / 0.03);
      color: rgb(228 228 231 / var(--tw-text-opacity, 1));
      &:before {
        width: 4rem;
        background: rgb(228 228 231 / 1);
      }
    }
  }
`;
const Nav = () => {
  return (
    <StyledNav>
      <StyledLinks>
        <ol>
          {navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </ol>
      </StyledLinks>
    </StyledNav>
  );
};

export default Nav;
