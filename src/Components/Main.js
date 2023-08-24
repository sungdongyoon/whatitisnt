import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import theme from '../style/theme';
import pham1 from "../img/pham1.jpg";
import pham2 from "../img/pham2.jpg";
import pham3 from "../img/pham3.jpg";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 50%;
  }
  @media screen and ${theme.mobile} {
    display: flex;
    flex-direction: column;
    img {
      width: 100%;
    }
  }
`;

const Phamplat = styled.div`
  width: 100%;
  display: flex;
  // flex: 1;
  .pham {
    width: 33.3%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    position: relative;
    img {
      width: 100%;
    }
    div {
      position: absolute;
      bottom: 30px;
      left: 30px;
      span {
        display: block;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      span:last-child {
        font-size: 20px;
        font-weight: normal;
      }
    }
  }
  @media screen and ${theme.laptop} {
    .pham {
      div {
        span {
          font-size: 30px;
          &:last-child {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media screen and ${theme.tablet} {
    .pham {
      div {
        bottom: 20px;
        span {
          font-size: 20px;
          &:last-child {
            font-size: 16px;
          }
        }
      }
    }
  }
  @media screen and ${theme.mobile} {
    flex-direction: column;
    .pham {
      width: 100%;
      div {
        span {
          font-size: 40px;
          &:last-child {
            font-size: 20px;
          }
        }
      }
    }
  }
`;

const Category = styled.div`
  width: 100%;
  height: 160px;
  background-color: #eee;
  @media screen and ${theme.tablet} {
    height: 120px;
  }
`;

const Ul = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 5%;
    img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
    }
    span {
      margin-top: 10px;
    }
  }
  @media screen and ${theme.tablet} {
    li {
      img {
        width: 50px;
        height: 50px;
      }
      span {
        font-size: 12px;
      }
    }
  }
  @media screen and ${theme.mobile} {
    li {
      margin: 0 3%;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        font-size: 8px;
      }
    }
  }
  @media screen and ${theme.mobile} {
    li {
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

const BestItem = styled.div`
  width: 1400px;
  border-bottom: 2px solid #000;
  margin: 100px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  .slide_left {
    position: absolute;
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    color: #ccc;
    cursor: pointer;
  }
  .slide_right {
    position: absolute;
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 50px;
    color: #ccc;
    cursor: pointer;
  }
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  .bestitem {
    width: 1400px;
    display: flex;
    overflow: hidden;
    .bestitem_item {
      display: flex;
      flex-direction: column;
      width: 280px;
      transition: 0.5s;
      img {
        width: 280px;
        height: 100%;
      }
      .bestitem_title {
        display: block;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .bestitem_discount {
        color: red;
        font-weight: bold;
        margin-right: 10px;
      }
      .bestitem_price {
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
      }
      .bestitem_originPrice {
        font-size: 14px;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
  @media screen and ${theme.laptop} {
    width: 840px;
    .slide_left {
      left: -50px;
    }
    .slide_right {
      right: -50px;
    }
    .bestitem {
      width: 840px;
    }
  }
  @media screen and ${theme.tablet} {
    width: 560px;
    .bestitem {
      width: 560px;
    }
  }
  @media screen and ${theme.mobile} {
    width: 280px;
    .slide_left {
      left: -60px;
    }
    .slide_right {
      right: -80px;
    }
    .bestitem {
      width: 280px;
    }
  }
`;

const News = styled.div`
  width: 1400px;
  margin: 100px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  .news {
    display: flex;
    justify-content: space-between;
    .news_item {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .news_title {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
      }
      .news_subTitle {
        display: block;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 30px;
      }
      .news_img {
        width: 100%;
        margin-bottom: 30px;
      }
      .news_item_section {
        width: 80%;
        .news_item_info {
          display: flex;
          align-items: center;
          cursor: pointer;
          .news_item_img {
            width: 70px;
            margin-right: 10px;
          }
          .news_item_detail {
            font-size: 14px;
            display: flex;
            flex-direction: column;
            .news_item_title {
              font-size: 14px;
            }
            .news_item_origin_price {
              color: #999;
              text-decoration: line-through;
            }
            .news_item_price {
              b {
                color: red;
              }
            }
          }
        }
      }
    }
  }
  @media screen and ${theme.laptop} {
    width: 840px;
    .news {
      .news_item {
        .news_item_section {
          .news_item_info {
            .news_item_detail {
              .news_item_title {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and ${theme.tablet} {
    width: 560px;
    .news {
      .news_item {
        border: 1px solid #eee;
        .news_title {
          font-size: 12px;
        }
        .news_subTitle {
          font-size: 10px;
        }
        .news_item_section {
          .news_item_info {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      }
    }
  }
  @media screen and ${theme.mobile} {
    width: 280px;
    h1 {
      margin-bottom: 20px;
    }
    .news {
      flex-direction: column;
      gap: 100px;
      .news_item {
        border: none;
        width: 100%;
        .news_title {
          font-size: 16px;
        }
        .news_subTitle {
          font-size: 12px;
        }
        .news_item_section {
          .news_item_info {
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 30px;
          }
        }
      }
    }
  }
`;

const Influencer = styled.div`
  width: 1400px;
  margin: 100px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  .influencer {
    display: flex;
    justify-content: space-between;
    .influencer_item {
      width: 18%;
      .influencer_img {
        width: 100%;
        height: 350px;
        margin-bottom: 10px;
      }
      .influencer_item_info {
        text-align: center;
        display: flex;
        cursor: pointer;
        .influencer_item_img {
          width: 70px;
        }
        .influencer_item_detail {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
          width: 100%;
          font-size: 12px;
          .influencer_item_title {
          }
          .influencer_item_origin_price {
            color: #999;
            text-decoration: line-through;
          }
          .influencer_item_price {
            b {
              color: red;
            }
          }
        }
      }
    }
  }
  @media screen and ${theme.laptop} {
    width: 840px;
    .influencer {
      .influencer_item {
        .influencer_img {
          height: 200px;
        }
        .influencer_item_info {
          .influencer_item_img {
            width: 60px;
            height: 100%;
          }
        }
      }
    }
  }
  @media screen and ${theme.tablet} {
    width: 560px;
    .influencer {
      flex-direction: column;
      .influencer_item {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        .influencer_img {
          height: 300px;
          width: 250px;
        }
        .influencer_item_info {
          .influencer_item_img {
            width: 200px;
            height: 200px;
          }
          .influencer_item_detail {
            text-align: center;
          }
        }
      }
    }
  @media screen and ${theme.mobile} {
    width: 280px;
    h1 {
      margin-bottom: 20px;
    }
    .influencer {
      .influencer_item {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 100px;
        .influencer_img {
          width: 100%;
          height: 100%;
        }
        .influencer_item_info {
          .influencer_item_img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
`;

const LookBook = styled.div`
  width: 1400px;
  margin: 100px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  .lookbook {
    display: flex;
    justify-content: space-between;
    .lookbook_item {
      width: 30%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
      }
      .lookbook_item_title {
        background-color: #fff;
        width: 80%;
        position: absolute;
        bottom: -30px;
        padding: 10px;
        h4 {
          font-size: 16px;
          font-weight: bold;
          text-align: center;
        }
        span {
          display: block;
          text-align: center;
          color: #999;
          font-size: 14px;
        }
      }
    }
  }
  @media screen and ${theme.laptop} {
    width: 840px;
    .lookbook {
      .lookbook_item {
        .lookbook_item_title {
          h4 {
            font-size: 14px;
          }
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media screen and ${theme.tablet} {
    width: 560px;
  }
  @media screen and ${theme.mobile} {
    width: 280px;
    h1 {
      margin-bottom: 20px;
    }
    .lookbook {
      flex-direction: column;
      .lookbook_item {
        width: 100%;
        margin-bottom: 100px;
      }
    }
  }
`;

const Main = () => {
  const navigate = useNavigate();
  const [bestItem, setBesteItem] = useState([]);
  const [slidePx, setSlidePx] = useState(0);
  const getBestItem = async () => {
    // let url = `http://localhost:3000/products`;
    let url = `https://my-json-server.typicode.com/sungdongyoon/whatitisnt/products`;
    let response = await fetch(url);
    let data = await response.json();
    setBesteItem(data);
  }
  useEffect(() => {
    getBestItem();
  }, [])
  const toPrev = () => {
    slidePx < 0 && setSlidePx(slidePx + 280);
  }
  const toNext = () => {
    slidePx > -2160 && setSlidePx(slidePx - 280);
  }
  return (
    <Container>
      <Banner>
        <img src='http://m.shop1.markgonzales.cafe24.com/images/MOBILE/M-main1.jpg'/>
        <img src='http://m.shop1.markgonzales.cafe24.com/images/MOBILE/M-main-2_---11.gif'/>
      </Banner>
      <Category>
        <Ul>
          <li onClick={() => navigate('/productAll')}>
            <img src='https://wiisnt.co.kr/web/product/extra/small/20230508/e6e0179496561247b40520060be53070.jpg'/>
            <span>BEST</span>
          </li>
          <li onClick={() => navigate('/productAll')}>
            <img src='https://wiisnt.co.kr/web/product/extra/big/20230406/a0eb7b0745802a0cd254c22cb5ba50e9.jpg'/>
            <span>NEW</span>
          </li>
          <li onClick={() => navigate('/productAll')}>
            <img src='https://wiisnt.co.kr/web/product/extra/big/20230609/f8a10f9e599f9212af11a1df3828d442.jpg'/>
            <span>TOP</span>
          </li>
          <li onClick={() => navigate('/productAll')}>
            <img src='https://wiisnt.co.kr/web/product/extra/small/20230414/d9d2ef133ddcd45cb0737f0e293b5242.jpg'/>
            <span>BOTTOM</span>
          </li>
          <li onClick={() => navigate('/productAll')}>
            <img src='https://wiisnt.co.kr/web/product/small/202306/c0d8375a496365c83c6517fbae8036b2.jpg'/>
            <span>WOMAN</span>
          </li>
          <li onClick={() => navigate('/productAll')}>
            <img src='https://wiisnt.co.kr/web/product/extra/small/20230413/3b97f3250ef4ec7f2a436a4c7095cb7f.jpg'/>
            <span>아울렛</span>
          </li>
        </Ul>
      </Category>
      <Phamplat>
        <div className='pham1 pham'>
          <img src={pham1}/>
          <div>
            <span>베스트 아이템</span>
            <span>지금 가장 인기있는 아이템</span>
          </div>
        </div>
        <div className='pham2 pham'>
          <img src={pham2}/>
          <div>
            <span>그래픽 티셔츠 뭐입지?</span>
            <span>취향따라 골라입는 티셔츠 추천</span>
          </div>
        </div>
        <div className='pham3 pham'>
          <img src={pham3}/>
          <div>
            <span>짐이 많은 당신을 위해</span>
            <span>인기상품 재입고</span>
          </div>
        </div>
      </Phamplat>
      <BestItem>
        <div className='slide_left' onClick={toPrev}>{"<"}</div>
        <div className='slide_right' onClick={toNext}>{">"}</div>
        <h1>BEST ITEM</h1>
          <div className='bestitem'>
            {bestItem.map((it) => (
              <div className='bestitem_item' style={{transform: `translateX(${slidePx}px)`}}>
                <img src={it.img}/>
                <div>
                  <span className='bestitem_title'>{it.title}</span>
                  <span className='bestitem_discount'>{it.discount}%</span>
                  <span className='bestitem_price'>{(it.price - ((it.price) * (it.discount)/100)).toLocaleString()}원</span>
                  <span className='bestitem_originPrice'>{(it.price).toLocaleString()}원</span>
                </div>
              </div>
            ))}
          </div>
      </BestItem>
      <News>
        <h1>WHAT'S NEWS</h1>
        <div className='news'>
          <div className='news_item'>
            <Link to='/productAll'>
              <img className='news_img' src='https://wiisnt.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/097b738af3dad89e6e9032d9e2749430.jpg'/>
            </Link>
            <h4 className='news_title'>EVERYDAY Graphic T-shirt!</h4>
            <span className='news_subTitle'>그래픽티 에디토리얼</span>
            {bestItem.filter((it) => it.id <= 2).map((it) => (
            <div className='news_item_section'>
              <div className='news_item_info' onClick={() => navigate(`/products/${it.id}`)}>
                <img src={it.img} className='news_item_img'/>
                <div className='news_item_detail'>
                  <span className='news_item_title'>{it.title}</span>
                  <span className='news_item_origin_price'>{(it.price).toLocaleString()}원</span>
                  <span className='news_item_price'>{(it.price - ((it.price) * (it.discount)/100)).toLocaleString()}원 <b>{it.discount}%</b></span>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className='news_item'>
            <Link to='/productAll'>
              <img className='news_img' src='https://wiisnt.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/a3134b6b57e74be38f023cd7e683f529.jpg'/>
            </Link>
            <h4 className='news_title'>Dreamy Summer Day</h4>
            <span className='news_subTitle'>와릿이즌 X 코랄리크 컬렉션</span>
            {bestItem.filter((it) => it.id >= 3 && it.id <= 5).map((it) => (
            <div className='news_item_section'>
              <div className='news_item_info' onClick={() => navigate(`/products/${it.id}`)}>
                <img src={it.img} className='news_item_img'/>
                <div className='news_item_detail'>
                  <span className='news_item_title'>{it.title}</span>
                  <span className='news_item_origin_price'>{(it.price).toLocaleString()}원</span>
                  <span className='news_item_price'>{(it.price - ((it.price) * (it.discount)/100)).toLocaleString()}원 <b>{it.discount}%</b></span>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className='news_item'>
            <Link to='/productAll'>
              <img className='news_img' src='https://wiisnt.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/29e153fdf828d624b726726db58e3a5e.jpg'/>
            </Link>
            <h4 className='news_title'>SUMMER BREEZE</h4>
            <span className='news_subTitle'>와릿이즌 스트라이프 컬렉션</span>
            {bestItem.filter((it) => it.id >= 6 && it.id <= 8).map((it) => (
            <div className='news_item_section'>
              <div className='news_item_info' onClick={() => navigate(`/products/${it.id}`)}>
                <img src={it.img} className='news_item_img'/>
                <div className='news_item_detail'>
                  <span className='news_item_title'>{it.title}</span>
                  <span className='news_item_origin_price'>{(it.price).toLocaleString()}원</span>
                  <span className='news_item_price'>{(it.price - ((it.price) * (it.discount)/100)).toLocaleString()}원 <b>{it.discount}%</b></span>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </News>
      <Influencer>
        <h1>인플루언서'S PICK</h1>
        <div className='influencer'>
          {bestItem.filter((it) => it.id >= 14).map((it) => (
          <div className='influencer_item'>
            <img src={it.thumb} className='influencer_img'/>
            <div className='influencer_item_info' onClick={() => navigate(`/products/${it.id}`)}>
              <img src={it.img} className='influencer_item_img'/>
              <div className='influencer_item_detail'>
                <span className='influencer_item_title'>{it.title}</span>
                <span className='influencer_item_origin_price'>{(it.price).toLocaleString()}원</span>
                <span className='influencer_item_price'>{(it.price - ((it.price) * (it.discount)/100)).toLocaleString()}원 <b>{it.discount}%</b></span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </Influencer>
      <LookBook>
        <h1>LOOKBOOK</h1>
        <div className='lookbook'>
          <div className='lookbook_item'>
            <img src='https://mblogthumb-phinf.pstatic.net/MjAyMzA1MzFfMjY1/MDAxNjg1NTA2MDc4Nzkw.xP69bSQejeKgKIM7xJIumjs5bOGJ0BvxYizXamy2l5Yg.nuwhKwnRLo-EgovmiowKM7eXTDdFlF_ce5IVO7wKKN4g.PNG.wlwlqo8282/image.png?type=w800'/>
            <div className='lookbook_item_title'>
              <h4>EVERYDAY Graphic T-shirt!</h4>
              <span>그래픽티 컬렉션</span>
            </div>
          </div>
          <div className='lookbook_item'>
            <img src='https://wiisnt.co.kr/images/MOBILE/230623_main_.jpg'/>
            <div className='lookbook_item_title'>
              <h4>Dreamy Summer Day</h4>
              <span>와릿이즌 X 코랄리크 컬렉션</span>
            </div>
          </div>
          <div className='lookbook_item'>
            <img src='https://wiisnt.co.kr/images/MOBILE/230609_main_.jpg'/>
            <div className='lookbook_item_title'>
              <h4>SUMMER BREEZE</h4>
              <span>와릿이즌 스트라이프 컬렉션</span>
            </div>
          </div>
        </div>
      </LookBook>
    </Container>
  )
}

export default Main;
