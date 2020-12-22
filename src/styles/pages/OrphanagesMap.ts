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

  div {
    z-index: 5;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgb(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #0889a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      width: 40px;
      height: 40px;
      background: #15c3d6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgb(23, 142, 166, 0.16);
      border-radius: 12px;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;

export const StyledLink = styled.a`
  z-index: 10;

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
