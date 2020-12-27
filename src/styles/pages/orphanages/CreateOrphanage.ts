import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Main = styled.main`
  flex: 1;

  form {
    width: 700px;
    margin: 64px auto;
    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    padding: 64px 80px;
    overflow: hidden;

    /* .leaflet-container {
      margin-bottom: 40px;
      border: 1px solid #d3e2e5;
      border-radius: 20px;
    } */
    .map-container {
    margin-top: 64px;
    background: #e6f7fb;
    border: 1px solid #b3dae2;
    border-radius: 20px;

    footer {
      padding: 20px 0;
      text-align: center;

      a {
        line-height: 24px;
        color: #0089a5;
        text-decoration: none;
      }
    }

    .leaflet-container {
      border-bottom: 1px solid #dde3f0;
      border-radius: 20px;
    }
  }


    fieldset {
      border: 0;

      legend {
        width: 100%;
        font-size: 32px;
        line-height: 34px;
        color: #5c8599;
        font-weight: 700;
        border-bottom: 1px solid #d3e2e5;
        margin-bottom: 40px;
        padding-bottom: 24px;
      }

      div + div {
        margin-top: 24px;
      }

      div {
        //background: red;

        &.leaflet-container {
          width: 400px;
          height: 400px;
        }

        label {
          display: flex;
          color: #8fa7b3;
          margin-bottom: 8px;
          line-height: 24px;
        }

        input,
        textarea {
          width: 100%;
          background: #f5f8fa;
          border: 1px solid #d3e2e5;
          border-radius: 20px;
          outline: none;
          color: #5c8599;
        }

        input {
          height: 64px;
          padding: 0 16px;
        }

        textarea {
          min-height: 120px;
          max-height: 240px;
          resize: vertical;
          padding: 16px;
          line-height: 28px;
        }

        div .button-select {
          display: grid;
          grid-template-columns: 1fr 1fr;

          button {
            height: 64px;
            background: #f5f8fa;
            border: 1px solid #d3e2e5;
            color: #5c8599;
            cursor: pointer;

            &:active {
              background: #edfff6;
              border: 1px solid #a1e9c5;
              color: #37c77f;
            }

            &:first-child {
              border-radius: 20px 0px 0px 20px;
            }

            &:last-child {
              border-radius: 0 20px 20px 0;
              border-left: 0;
            }
          }
        }
      }
    }
  }

  fieldset + fieldset {
    margin-top: 80px;
  }

  button {
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      background: #36cf82;
    }
  }
`
