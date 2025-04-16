import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyling = createGlobalStyle`
#root {
  width: 100%; /* Full width */
  padding: 24px 16px; 
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding-bottom: 4rem;
    padding-top: 4rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1025px) {
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 32px;
      padding-right: 32px;
  }
}

  @media (max-width: 1024px) {
    .BgAnimation__svg {
      display: none;
    }
  }

  .BgAnimation__svg {
    position: absolute;
    top: 0;
    width: 450px;
    height: 530px;
    @media (min-width: 1024px) {
      padding-top: 6rem;
    }
  }
  
  main {
    padding-bottom: 6rem;
    padding-top: 6rem;
    @media (min-width: 1025px) {
      position: sticky;
      width:  52%;
    }
  }
`

export const Section = styled.section`
  display: ;
  flex-direction: ;
  padding: ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media  {
    padding:  ;
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`

export const StyledSection = styled.section`
  @media (min-width: 1025px) {
    scroll-margin-top: 6rem;
    margin-bottom: 9rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const StyledHeading = styled.div`
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  @media (min-width: 1025px) {
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  h2 {
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const StyledParagraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.625;
`;

export const theme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
};