import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyling = createGlobalStyle`
  #root {
    max-width: 1280px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    color: var(--color-zinc-300);

    @media (min-width: 768px) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  @media (max-width: 1280px) {
    .BgAnimation__svg {
      display: none;
    }
  }

  .BgAnimation__svg {
    position: absolute;
    top: 0;
    width: 570px;
    height: 665px;
    @media (min-width: 1024px) {
      padding-top: 6rem;
    }
  }
  
  main {
    @media (min-width: 1024px) {
      padding-top: 6rem;
      padding-bottom: 6rem;
      position: sticky;
    }
  }
`

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  gap: 1rem;
  width: 100%;
`;

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

export const StyledHeader = styled.header`
  width: 48%;
  @media (min-width: 1024px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: relative;
    position: sticky;
  }
`

export const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%
`

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

