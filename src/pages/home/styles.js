import styled from 'styled-components';

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
  margin: 32px 0;

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

  font-family: 'Preahvihear', sans-serif;
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 32px;
`;

export const RowName = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 280px;
  top: 0px;

  img {
    width: 91px;
  }
  p {
    padding-top: 12px;
    font-size: 20px;
  }

  span {
    color: #2b97e2;
  }
`;

export const LineAvatar = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  width: 400px;
  height: 300px;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: radial-gradient(
    ellipse at center,
    #ffffffaa 0%,
    #00406caa 45%,
    #002e4e00 60%
  );

  img {
    margin-top: 24px;
    width: 200px;
  }
`;

export const Lead = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-top: 32px;

  h3 {
    text-decoration: underline;
    font-weight: 300;
    font-size: 18px;
  }

  h1 {
    margin-top: 6px;
    font-size: 42px;
    line-height: 60px;
  }
  h1 span {
    font-size: 42px;
    color: #2b97e2;
  }

  span {
    font-size: 16px;
  }
`;

export const CurrentWork = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 16px;
  margin-top: 48px;
  font-family: 'Preahvihear', sans-serif;
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
    font-family: 'Preahvihear', sans-serif;
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

export const Stack = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: 'Preahvihear', sans-serif;
  text-align: center;

  h2 {
    font-size: 24px;
  }
  p {
    font-size: 17px;
  }
  img {
    margin-top: 48px;
    width: 900px;
  }
`;
