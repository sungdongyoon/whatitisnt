import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
  margin: 200px 0;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  img {
    width: 100%;
    height: 100%;
  }
  .title {
    font-weight: bold;
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .discount {
    color: red;
    font-weight: bold;
    margin-right: 10px;
  }
  .price {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }
  .originPrice {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
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
          <li>
            <img src='https://wiisnt.co.kr/web/product/extra/big/20230406/a0eb7b0745802a0cd254c22cb5ba50e9.jpg'/>
            <span>NEW</span>
          </li>
          <li>
            <img src='https://wiisnt.co.kr/web/product/extra/big/20230609/f8a10f9e599f9212af11a1df3828d442.jpg'/>
            <span>TOP</span>
          </li>
          <li>
            <img src='https://wiisnt.co.kr/web/product/extra/small/20230414/d9d2ef133ddcd45cb0737f0e293b5242.jpg'/>
            <span>BOTTOM</span>
          </li>
          <li>
            <img src='https://wiisnt.co.kr/web/product/small/202306/c0d8375a496365c83c6517fbae8036b2.jpg'/>
            <span>WOMAN</span>
          </li>
          <li>
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
        <Items>
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
        </Items>
      </BestItem>
    </Container>
  )
}

export default Main;
