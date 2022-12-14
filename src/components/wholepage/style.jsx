import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  h1 {
    color: #6c63ff;
    font-size: 32px;
    margin-left: 10px;
    margin-right: 10px;

    @media screen and (max-width: 550px) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .rocket {
    width: 50%;

    @media screen and (max-width: 550px) {
      margin-top: 20px;
    }
  }
  width: 100vw;
  height: 100vh;
  color: #9c9ab6;
  background-color: white;

  section {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 550px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    div {
      text-align: center;
      align-items: center;
      p {
        font-size: 18px;
      }
      button {
        width: 150px;
        font-size: 16px;
        padding: 10px;
        border-radius: 8px;
        border-color: transparent;
        background-color: #6c63ff;
        color: white;
      }
      button:hover {
        cursor: pointer;
        background-color: #4a44b6;
      }
    }
  }
  .Image {
    background-repeat: no-repeat;
    width: 100%;
  }
  .Image2 {
    background-repeat: no-repeat;
    width: 100%;
    background-position: bottom;
  }
`;
