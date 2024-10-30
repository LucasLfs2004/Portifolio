import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #00111c;
  align-items: center;
`;

export const Presentation = styled.section`
  color: #fff;
  width: -webkit-fill-available;
  max-width: 1160px;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
  }
  i {
    img {
      padding-left: 6px;
      height: 16px;
    }
  }

  font-family: "Preahvihear", sans-serif;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 32px;
  font-family: "Preahvihear", sans-serif;
`;

export const WorkXpArea = styled.section`
  /* margin: 80px 0; */
  background: radial-gradient(circle, #00406c 0%, #002e4e00 40%);
  padding: 60px 0;
  display: flex;

  flex-direction: column;
  column-gap: 36px;
  width: max-content;
  max-width: 1160px;
  flex-wrap: wrap;
  row-gap: 32px;
  h1 {
    font-family: "Preahvihear", sans-serif;
    color: #fff;
    /* padding-left: 18px; */
    font-size: 28px;
  }
`;

export const CardWorkArea = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 36px;
  width: max-content;
  max-width: 1160px;
  flex-wrap: wrap;
  row-gap: 64px;
`;
