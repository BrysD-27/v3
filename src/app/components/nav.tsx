"use client";
import styled from "styled-components";
import { navLinks } from "@/content/data";
import Link from "next/link";

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
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
