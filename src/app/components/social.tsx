import styled from "styled-components";
import { contactinfo } from "@/public/content/data";
import Icon from "./icons/icon";

const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 2rem;
  margin-left: 0.25rem;

  &:after {
    content: "";
    display: block;
    width: 1px;
    margin: 0 auto;
    background-color: var(--light-s);
  }

  li {
    margin-right: 1rem;
    font-size: 0.75rem;
    line-height: 1rem;
    flex-shrink: 0;
    a {
      display: block;
      color: rgb(113 113 122 / var(--tw-text-opacity, 1));
      transition: 0.15s ease-in-out;
      transition-property: color, transform;
      padding: 0.5rem;
      border-radius: 6px;

      &:hover,
      &:focus {
        box-shadow: inset 0 1px 0 0 rgb(244 244 245 / 0.03);
        color: rgb(228 228 231 / var(--tw-text-opacity, 1));
        background-color: #27272a80;
        transform: translateY(-5%); /* Moves up by 10px */
      }

      svg {
        width: 1.65rem;
        height: 1.65rem;
        vertical-align: middle;
      }
    }
  }
`;

const Social = () => (
  <StyledSocialList>
    {contactinfo &&
      contactinfo.socialMedia.map(({ url, name }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
  </StyledSocialList>
);

export default Social;
