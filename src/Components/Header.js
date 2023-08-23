import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import theme from '../style/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
`;

const Banner = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 12px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  flex: 1;
`;

const ImgWrap = styled.div`
  img {
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
  @media screen and ${theme.mobile} {
    display: none;
  }
`;

const Atag = styled.a`
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 13px;
  padding: 0px 20px;
  .new {
    color: #068FFF;
  }
  .swim {
    color: red;
  }
  .store,
  .log {
    cursor: pointer;
  }
  @media screen and ${theme.laptop} {
    padding: 0px 10px;
  }
  @media screen and ${theme.tablet} {
    font-size: 11px;
    padding: 0px 5px;
  }
`;

const MenuBtn = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  font-size: 30px;
  color: ${(props) => props.isToggle ? "#fff" : "#000"};
  position: absolute;
  right: 30px;
  transition: 0.5s;
  transform: ${(props) => props.isToggle && "scaleY(-1)"};
  transition-delay: 0.3s;
  z-index: 10;
  cursor: pointer;
  @media screen and ${theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  display: none;
  width: 100vw;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  transform: ${(props) => (props.isToggle ? "translateY(0)" : `translateY(-500px)`)};
  transition: 1s;
  div {
    color: #fff;
  }
  @media screen and ${theme.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ul {
      display: flex;
      justify-content: flex-start;
      gap: 30px;
      padding: 0;
      list-style: none;
      margin: 30px;
      .log {
        cursor: pointer;
      }
      li {
        font-size: 12px;
      }
      &:first-child {
        li {
          font-weight: bold;
          &:first-child {
            color: red;
          }
          &:last-child {
            color: #40F8FF;
          }
        }
      }
    }
  }
`;

const Header = ({authentic, setAutentic}) => {
  const [isToggle, setIsToggle] = useState(false);
  const onClickToggle = () => {
    setIsToggle(!isToggle);
  }
  const navigate = useNavigate();
  const logOut = () => {
    if(window.confirm("로그아웃 하시겠습니까?")) {
      setAutentic(false);
      alert("로그아웃 되었습니다");
    } else {
      setAutentic(true);
    }
  }
  return (
    <Container>
      <Banner>WEEKLY BEST ITEM🔥</Banner>
      <Content>
        <Ul>
          <li onClick={() => navigate('/productAll')}>
            <Atag><span className='store'>스토어</span></Atag>
          </li>
          <li>
            <Atag>룩북</Atag>
          </li>
          <li>
            <Atag>매거진</Atag>
          </li>
          <li>
            <Atag>브랜드 소개</Atag>
          </li>
          <li>
            <Atag><b className='new'>NEW ARRIVAL</b></Atag>
          </li>
          <li>
            <Atag><b className='swim'>SWIM WEAR</b></Atag>
          </li>
        </Ul>
        <ImgWrap onClick={() => navigate('/')}>
          <img src='https://wiisnt.co.kr/images/cm_logo_1_02.svg' width={50}/>
        </ImgWrap>
        <Ul>
          <li>
            <Atag>매장안내</Atag>
          </li>
          <li>
            <Atag>회원혜택</Atag>
          </li>
          <li>
            <Atag>검색</Atag>
          </li>
          {authentic ? (
            <li>
              <Atag><span className='log' onClick={logOut}>로그아웃</span></Atag>
            </li>
          ) : (
            <li onClick={() => navigate('/login')}>
              <Atag><span className='log'>로그인</span></Atag>
            </li>
          )}
          <li>
            <Atag>장바구니</Atag>
          </li>
        </Ul>
        <MenuBtn onClick={onClickToggle} isToggle={isToggle}>
          <FontAwesomeIcon icon={faChevronDown}/>
        </MenuBtn>
        <MobileMenu isToggle={isToggle}>
          <div className='mobileMenu'>
            <ul>
              <li>NEW ARRIVAL</li>
              <li>SWIM WEAR</li>
            </ul>
            <ul>
              <li>스토어</li>
              <li>룩북</li>
              <li>매거진</li>
              <li>브랜드 소개</li>
            </ul>
            <ul>
              <li>매장안내</li>
              <li>회원혜택</li>
              <li>검색</li>
              {authentic ? (
                <li className='log' onClick={logOut}>로그아웃</li>
              ) : (
                <li className='log' onClick={() => navigate('/login')}>로그인</li>
              )}
              <li>장바구니</li>
            </ul>
          </div>
        </MobileMenu>
      </Content>
    </Container>
  )
}

export default Header;
