import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: ${props => props.theme.background};
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;
