import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
`;

const Phamplat = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  .pham {
    width: 100%;
    height: 1200px;
    background-size: cover;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 40px;
    padding-right: 200px;
    font-size: 40px;
    font-weight: bold;
    span {
      margin-bottom: 20px;
    }
    span:last-child {
      font-size: 20px;
      font-weight: normal;
    }
  }
  .pham1 {
    background-image: url('http://m.shop1.markgonzales.cafe24.com/images/MOBILE/230707_01_.jpg');
  }
  .pham2 {
    background-image: url('http://m.shop1.markgonzales.cafe24.com/images/MOBILE/230703_03_1.jpg');
  }
  .pham3 {
    background-image: url('http://m.shop1.markgonzales.cafe24.com/images/MOBILE/230703_02_.jpg');
  }
`;

const Category = styled.div`
  width: 100%;
  height: 160px;
  background-color: #eee;
`;

const Ul = styled.div`
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
    margin: 0 80px;
    img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
    }
    span {
      margin-top: 10px;
    }
  }
`;

const BestItem = styled.div`
  width: 1200px;
  border-bottom: 2px solid #000;
  margin: 100px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  .bestitem {
    width: 100%;
    display: flex;
    .bestitem_item {
      display: flex;
      flex-direction: column;
      width: 20%;
      border: 1px solid red;
      img {
        width: 200px;
        height: 250px;
      }
      .bestitem_title {
        font-weight: bold;
        font-size: 17px;
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
`;

const News = styled.div`
  width: 1200px;
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
      h4 {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
      }
      span {
        display: block;
        font-size: 12px;
        text-align: center;
      }
      img {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
`;

const Influencer = styled.div`
  width: 1200px;
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
      img {
        width: 100%;
      }
    }
  }
`;

const LookBook = styled.div`
  width: 1200px;
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
`;

const Main = () => {
  const navigate = useNavigate();
  const [bestItem, setBesteItem] = useState([]);
  const getBestItem = async () => {
    // let url = `http://localhost:3005/products/`;
    let url = `https://my-json-server.typicode.com/sungdongyoon/whatitisnt/products`;
    let response = await fetch(url);
    let data = await response.json();
    setBesteItem(data);
  }
  useEffect(() => {
    getBestItem();
  }, [])
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
          <span>베스트 아이템</span>
          <span>지금 가장 인기있는 아이템</span>
        </div>
        <div className='pham2 pham'>
          <span>그래픽 티셔츠 뭐입지?</span>
          <span>취향따라 골라입는 티셔츠 추천</span>
        </div>
        <div className='pham3 pham'>
          <span>짐이 많은 당신을 위해</span>
          <span>인기상품 재입고</span>
        </div>
      </Phamplat>
      <BestItem>
        <h1>BEST ITEM</h1>
        <div className='bestitem'>
          {bestItem.map((it) => (
            <div className='bestitem_item'>
              <img src={it.img}/>
              <div>
                <span className='bestitem_title'>{it.title}</span>
                <span className='bestitem_discount'>{it.discount}</span>
                <span className='bestitem_price'>{it.price - ((it.price) * (it.discount)/100)}원</span>
                <span className='bestitem_originPrice'>{it.price}</span>
              </div>
            </div>
          ))}
          {/* <Item>
            <img src={bestItem[0].img}/>
            <div>
              <span className='title'>{bestItem[0].title}</span>
              <span className='discount'>{bestItem[0].discount}%</span>
              <span className='price'>{bestItem[0].price - ((bestItem[0].price) * ((bestItem[0].discount)/100))}원</span>
              <span className='originPrice'>{bestItem[0].price}원</span>
            </div>
          </Item>
          <Item>
            <img src={bestItem[3].img}/>
            <div>
              <span className='title'>{bestItem[3].title}</span>
              <span className='discount'>{bestItem[3].discount}%</span>
              <span className='price'>{bestItem[3].price - ((bestItem[3].price) * ((bestItem[3].discount)/100))}원</span>
              <span className='originPrice'>{bestItem[3].price}원</span>
            </div>
          </Item>
          <Item>
            <img src={bestItem[5].img}/>
            <div>
              <span className='title'>{bestItem[5].title}</span>
              <span className='discount'>{bestItem[5].discount}%</span>
              <span className='price'>{bestItem[5].price - ((bestItem[5].price) * ((bestItem[5].discount)/100))}원</span>
              <span className='originPrice'>{bestItem[5].price}원</span>
            </div>
          </Item>
          <Item>
            <img src={bestItem[7].img}/>
            <div>
              <span className='title'>{bestItem[7].title}</span>
              <span className='discount'>{bestItem[7].discount}%</span>
              <span className='price'>{bestItem[7].price - ((bestItem[7].price) * ((bestItem[7].discount)/100))}원</span>
              <span className='originPrice'>{bestItem[7].price}원</span>
            </div>
          </Item>
          <Item>
            <img src={bestItem[9].img}/>
            <div>
              <span className='title'>{bestItem[9].title}</span>
              <span className='discount'>{bestItem[9].discount}%</span>
              <span className='price'>{bestItem[9].price - ((bestItem[9].price) * ((bestItem[9].discount)/100))}원</span>
              <span className='originPrice'>{bestItem[9].price}원</span>
            </div>
          </Item> */}
        </div>
      </BestItem>
      <News>
        <h1>WHAT'S NEWS</h1>
        <div className='news'>
          <div className='news_item'>
            <Link to='/productAll'>
              <img src='https://wiisnt.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/097b738af3dad89e6e9032d9e2749430.jpg'/>
            </Link>
            <h4>EVERYDAY Graphic T-shirt!</h4>
            <span>그래픽티 에디토리얼</span>
          </div>
          <div className='news_item'>
            <Link to='/productAll'>
              <img src='https://wiisnt.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/a3134b6b57e74be38f023cd7e683f529.jpg'/>
            </Link>
            <h4>Dreamy Summer Day</h4>
            <span>와릿이즌 X 코랄리크 컬렉션</span>
          </div>
          <div className='news_item'>
            <Link to='/productAll'>
              <img src='https://wiisnt.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/29e153fdf828d624b726726db58e3a5e.jpg'/>
            </Link>
            <h4>SUMMER BREEZE</h4>
            <span>와릿이즌 스트라이프 컬렉션</span>
          </div>
        </div>
      </News>
      <Influencer>
        <h1>인플루언서'S PICK</h1>
        <div className='influencer'>
          <div className='influencer_item'>
            <img src='https://wiisnt.co.kr/web/product/tiny/202307/1c8bf0bca604ce038e08533cfe4f7b69.jpg'/>
          </div>
          <div className='influencer_item'>
            <img src='https://wiisnt.co.kr/web/product/tiny/202307/daaf799587a57e946bca014018003fdc.jpg'/>
          </div>
          <div className='influencer_item'>
            <img src='https://wiisnt.co.kr/web/product/tiny/202307/6007742a7ded5a31e5cb94335c901c3d.jpg'/>
          </div>
          <div className='influencer_item'>
            <img src='https://wiisnt.co.kr/web/product/tiny/202307/640e600c1fe5cd1ff9ae73dafe3ee84e.jpg'/>
          </div>
          <div className='influencer_item'>
            <img src='https://wiisnt.co.kr/web/product/tiny/202307/49785137df9defa30b38c57bb7e6cfc6.jpg'/>
          </div>
        </div>
      </Influencer>
      <LookBook>
        <h1>LOOKBOOK</h1>
        <div className='lookbook'>
          <div className='lookbook_item'>
            <img src='https://wiisnt.co.kr/images/MOBILE/main_447x566.jpg'/>
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
