import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
`;

export const ContainerWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  //justify-content: space-between;
  background-image: url('/assets/landing.svg') no-repeat 95% center;

  main {

    h1 {
    max-width: 350px;
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
    /* margin-top: 50px;
    margin-left: 50px; */
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }

  }
`;

export const Link = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.5s;

  &:hover {
    background: #96feff;
  }

`;





