import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyling = createGlobalStyle`
#root {
  width: 100%; /* Full width */
  padding: 24px 16px; /* Equivalent to py-6 px-4 */
}

@media (min-width: 640px) { /* sm breakpoint */
  #root {
    padding: 48px 24px; /* Equivalent to sm:py-12 sm:px-6 */
  }
}

@media (min-width: 1024px) { /* lg breakpoint */
  #root {
    padding-left: 32px; /* Equivalent to lg:px-8 */
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

