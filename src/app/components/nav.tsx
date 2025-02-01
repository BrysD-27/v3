"use client";
import styled from "styled-components";
import { navLinks } from "@/content/data";
import Link from "next/link";

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
    li {
      display: block;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      margin: 0.5rem;
      margin-left: 0;

      a {
        color: rgb(113 113 122 / var(--tw-text-opacity, 1));
        border-radius: 6px;
        display: flex;
        align-items: center;
        margin-top: 2px;
        padding: 0.7rem 0.7rem 0.7rem 0;
        width: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;

        &:before {
          display: inline-flex;
          content: "";
          background-color: rgb(113 113 122 / var(--tw-text-opacity, 1));
          width: 2rem;
          height: 1px;
          margin-right: 1rem;
          color: var();
          font-size: var(--fz-xxs);
          text-align: right;
          transition: width 0.15s ease-in-out;
        }
      }
    }

    a:hover {
      background-color: rgb(228 228 231 / 0.02);
      box-shadow: inset 0 1px 0 0 rgb(244 244 245 / 0.03);
      color: rgb(228 228 231 / var(--tw-text-opacity, 1));
      &:before {
        width: 4rem;
        background-color: rgb(228 228 231 / var(--tw-text-opacity, 1));
      }
    }
  }
`;
const Nav = () => {
  return (
    <nav>
      <StyledLinks>
        <ol>
          {navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link href={url}>{name}</Link>
            </li>
          ))}
        </ol>
      </StyledLinks>
    </nav>
  );
};

export default Nav;
