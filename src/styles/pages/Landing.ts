import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};

  z-index:-1;

  .background {
    position: fixed;
    opacity: 0.7;
    overflow: hidden;
    margin-left: 300px;

    z-index: 0;

  }
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
  justify-content: space-between;
  /* background-image: url('/landing.svg') no-repeat 95% center; */


  main {
    h1 {
    max-width: 350px;
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
    }

    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }

  }
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
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





