import { styled } from 'styled-components';
import theme from '../style/theme';

const Container = styled.div`
  border-top: 1px solid #000;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and ${theme.mobile} {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const Information = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  img {
    margin-bottom: 30px;
  }
  .info_title {
    font-weight: bold;
    font-size: 14px;
  }
  span {
    margin-bottom: 5px;
    font-size: 12px;
    line-height: 20px;
  }
  @media screen and ${theme.laptop} {
    .info_title {
      font-size: 12px;
    }
    span {
      font-size: 10px;
    }
  }
  @media screen and ${theme.mobile} {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Wraps = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center
  @media screen and ${theme.mobile} {
    width: 100%;
  }
`;

const Help = styled.div`
  width: 50%;
  height: 100%;
  border-left: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .help_wrap {
    display: flex;
    flex-direction: column;
  }
  @media screen and ${theme.mobile} {
    width: 100%;
    border: none;
  }
`;

const HelpText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span {
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

const Company = styled.div`
  width: 50%;
  height: 100%;
  border-left: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .company_wrap {
    display: flex;
    flex-direction: column;
  }
  @media screen and ${theme.mobile} {
    width: 100%;
  }
`;

const CompanyText = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  span {
    margin-bottom: 10px;
    font-size: 12px;
  }
`;

const Footer = () => {
  return(
    <Container>
      <Content>
        <Information>
          <img src='https://wiisnt.co.kr/images/cm_logo_1_4.png'/>
          <span className='info_title'>The purpose and intention of this site is to promote the CD album (What it isNt)</span>
          <span>(주)비케이브 서울 마포구 잔다리로 24, 5층(서교동, 서영빌딩)</span>
          <span>[24, Jandari-ro, Mapo-gu, Seoul, Republic of Korea] 대표. 윤형석 [Yun, Hyungseok]<br/>
            대표 전화번호. 02-338-3316 사업자 등록번호. 261-81-17293<br/>
            통신판매업 신고 2020-서울마포-4143
          </span>
        </Information>
        <Wraps>
          <Help>
            <div className='help_wrap'>
              <span className='title'>HELP</span>
              <HelpText>
                <span>GUIDE</span>
                <span>TERMS & CONDITIONS</span>
                <span>PRIVACY POLICY</span>
              </HelpText>
            </div>
          </Help>
          <Company>
            <div className='company_wrap'>
              <span className='title'>COMPANY</span>
              <CompanyText>
                <span>ABOUT</span>
                <span>STOCKIST</span>
                <span>CONTACT</span>
              </CompanyText>
            </div>
          </Company>
        </Wraps>
      </Content>
    </Container>
  )
}

export default Footer;