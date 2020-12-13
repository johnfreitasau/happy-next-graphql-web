import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.colors.background};

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    footer {
      display: flex;
      flex-direction: column;
      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }


  }
`;

export const StyledLink = styled.a`
  position: absolute;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.5s;

  &:hover {
    background: #17d6eb;
  }
`;
