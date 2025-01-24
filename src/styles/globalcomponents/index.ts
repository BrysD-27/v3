import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyling = createGlobalStyle`
    #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

