import styled from 'styled-components';

export const Area = styled.section`
  color: #fff;
  max-width: 1160px;
  position: relative;
  padding: 32px 0;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 0px;
  background: radial-gradient(40% 52% at 70% 50%, #00406c, #002e4e00);

  &.reverse {
    background: radial-gradient(40% 52% at 30% 50%, #00406c, #002e4e00);
  }
`;

export const Infos = styled.div`
  padding: 16px;
  width: 600px;
  position: relative;

  h4 {
    color: #2b97e2;
    font-size: 13px;
  }
`;

export const Description = styled.div`
  position: absolute;
  z-index: 99;
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  &.reverse {
    left: -64px;
    align-items: flex-end;

    p {
      padding-left: 36px;
    }
  }

  p {
    margin-top: 18px;
    padding: 24px 32px;
    border-radius: 14px;
    background-color: #00406c30;
    width: 580px;
    backdrop-filter: blur(20px);
    color: #ccd6f6;
    font-weight: 500;
    font-size: 18px;
  }

  a {
    width: min-content;
    margin-left: 24px;
  }
`;

export const ImgCard = styled.div`
  /* padding: 80px; */
`;

export const BgImg = styled.div`
  background-color: #001a2c;
  border-radius: 10px;
  width: 580px;
  height: 340px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  &.reverse {
    justify-content: flex-start;
    img {
      border-radius: 0 16px 0 10px;
    }
  }

  img {
    border-radius: 16px 0 10px 0;
    width: calc(580px - 48px);
    max-height: calc(340px - 32px);
    /* position: absolute; */
    top: 24px;
    left: 32px;
  }
`;
