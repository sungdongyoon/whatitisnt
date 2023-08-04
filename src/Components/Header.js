import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
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
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
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
  list-style: none;
  padding: 0;
  // margin: 0 300px;
  flex: 1;
`;

const Atag = styled.a`
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 13px;
  padding: 10px 20px;
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
`;

const Header = ({authentic, setAutentic}) => {
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
      </Content>
    </Container>
  )
}

export default Header;
