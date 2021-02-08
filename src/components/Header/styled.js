import styled from 'styled-components';
import colors from '../../styles/colors';

export const MyHeader = styled.div`
  background: ${props => props.theme.primary};

  nav {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: ${props => props.theme.text};

    .logo {
      font-weight: bold;
      font-style: italic;
      font-size: 1.5em;
    }

    .menu {
      .switch {
        display: inline-block;
        position: relative;
        width: 30px;
        height: 10px;

        input {
          opacity: 0;
          width: 0;
          height: 0;

          &:checked {
            + .slider {
              background: ${colors.light.primary};

              &::before {
                transform: translateX(20px);
              }
            }
          }
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.2);
          transition: 0.3s ease all;
          border-radius: 500px;

          &::before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: -5px;
            bottom: 0;
            right: 0;
            top: 0;
            margin-top: auto;
            margin-bottom: auto;
            background-color: ${props => props.theme.text};
            transition: 0.3s ease all;
            border-radius: 100%;
          }
        }
      }
    }
  }
`;
