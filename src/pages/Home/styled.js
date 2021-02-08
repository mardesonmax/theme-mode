import styled from 'styled-components';

export const MyHome = styled.main`
  .item {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.text};
    padding: 0 20px;
    margin: 20px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;
