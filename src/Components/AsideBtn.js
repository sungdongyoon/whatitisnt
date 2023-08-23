import React from 'react';
import { styled } from 'styled-components';
import theme from '../style/theme';

const Button = styled.div`
  position: fixed;
  bottom: 50px;
  right: 100px;
  width: 150px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 12px;
    font-weight: bold;
    background-color: #fff;
    padding: 10px 20px;
    padding-right: 50px;
    border-radius: 30px;
  }
  img {
    width: 60px;
    height: 60px;
    border: 1px solid #000;
    border-radius: 50%;
    background-color: #FFF000;
    position: absolute;
    right: 0;
  }
  @media screen and ${theme.mobile} {
    display: none;
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
