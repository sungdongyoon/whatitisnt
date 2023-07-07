import React from 'react';
import { styled } from 'styled-components';

const Button = styled.div`
  position: fixed;
  bottom: 100px;
  right: 200px;
  width: 140px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 12px;
    font-weight: bold;
  }
  img {
    width: 60px;
    height: 60px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #FFF000;
  }
`;

const AsideBtn = () => {
  return (
    <Button>
      <span>문의 / 상담</span>
      <img src='https://wiisnt.co.kr/images/cm_logo_1_02.svg'/>
    </Button>
  )
}

export default AsideBtn;
