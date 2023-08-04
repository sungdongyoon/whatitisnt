import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid #eee;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
`;

const LoginTitle = styled.div`
  margin: 50px;
  font-weight: bold;
  font-size: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  margin-bottom: 20px;
  height: 50px;
  border-radius: 50px;
  padding: 0 20px;
  border: none;
  background-color: #eee;
`;

const Button = styled.button`
  margin-bottom: 20px;
  height: 50px;
  border-radius: 50px;
  border: none;
  background-color: #000;
  color: #fff;
`;

const Nav = styled.div`
  margin: 10px 0;
  span {
    font-size: 12px;
    margin: 0 5px;
    a {
      text-decoration: none;
      color: #000;
    }
  }
`;

const LoginSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin: 20px 0;
    font-size: 12px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .kakao {
    background-color: #FEE500;
  }
  .naver {
    background-color: #22B25D;
  }
  .facebook {
    background-color: #4a6484;
  }
  .google {
    border: 1px solid #ccc;
    img {
      width: 40px;
      height: 40px;
    }
  }
`;

const Join = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    font-size: 12px;
    margin: 15px 0;
  }
`;

const Button2 = styled.button`
  border: 1px solid #ccc;
  border-radius: 50px;
  background-color: #fff;
  width: 100%;
  height: 50px;
`;

const Login = ({setAutentic}) => {
  const [idValue, setIdValue] = useState("");
  const navigate = useNavigate();
  const userLogin = (e) => {
    e.preventDefault();
    alert(`${idValue}님 반갑습니다`)
    setAutentic(true);
    navigate('/');
  }
  return (
    <Container>
      <Content>
        <LoginTitle>
          LOGIN
        </LoginTitle>
        <Form onSubmit={(e) => userLogin(e)}>
          <Input type='text' placeholder='아이디' value={idValue} onInput={(e) => setIdValue(e.target.value)} required/>
          <Input type='password' placeholder='비밀번호' required/>
          <Button>로그인</Button>
        </Form>
        <Nav>
          <span><a href='#'>아이디찾기</a></span>
          <span><a href='#'>비밀번호찾기</a></span>
          <span><a href='#'>회원 혜택보기</a></span>
        </Nav>
        <LoginSelect>
          <div>
            SNS 계정으로 로그인하기
          </div>
          <Logo>
            <a className='kakao' href='#'>
              <img src='https://wiisnt.co.kr/images/cm_icon_social_kakao_login-.svg'/>
            </a>
            <a className='naver' href='#'>
              <img src='https://wiisnt.co.kr/images/cm_icon_social_naver_login-.svg'/>
            </a>
            <a className='facebook' href='#'>
              <img src='https://wiisnt.co.kr/images/cm_icon_social_facebook_login-.svg'/>
            </a>
            <a className='google' href='#'>
              <img src='https://wiisnt.co.kr/images/cm_icon_social_google_login-.svg'/>
            </a> 
          </Logo>
        </LoginSelect>
        <Join>
          <div>
            아직 와릿이즌 회원이 아니신가요?
          </div>
          <Button2>회원가입 하기</Button2>
          <div>
            비회원 주문조회
          </div>
        </Join>
      </Content>
    </Container>
  )
}

export default Login;
