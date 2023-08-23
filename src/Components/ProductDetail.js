import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ClipLoader } from 'react-spinners';
import theme from '../style/theme';

const Body = styled.body`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 500px;
  margin-top: 80px;
  gap: 50px;
  @media screen and ${theme.laptop} {
    flex-direction: column;
    align-items: center;
    gap: 0;
    margin-top: 0;
  }
  @media screen and ${theme.mobile} {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 1000px;
  display: flex;
  @media screen and ${theme.laptop} {
    width: 600px;
    height: 800px;
  }
  @media screen and ${theme.tablet} {
    width: 450px;
    height: 600px;
  }
  @media screen and ${theme.mobile} {
    width: 300px;
    height: 400px;
  }
`;

const ProductInfo = styled.div`
  border-top: 2px solid #000;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  width: 40%;
  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .newProduct,
    .pickProduct {
      font-size: 12px;
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px 15px;
    }
  }
  .origin-price {
    color: #ccc;
    font-size: 18px;
    text-decoration: line-through;
  }
  .price {
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 20px;
    b {
      color: red;
      margin-right: 10px;
    }
  }
  .benefitBox {
    background-color: #eee;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-weight: bold;
    b{
      color: red;
    }
    .go {
      font-size: 20px;
      color: red;
    }
  }
  .moreBtn {
    border: none;
    background-color: #fff;
    color: red;
  }
  @media screen and ${theme.laptop} {
    width: 100%;
  }
  @media screen and ${theme.tablet} {
    .title {
      font-size: 26px;
      .newProduct,
      .pickProduct {
        font-size: 10px;
      }
    }
    .origin-price {
      font-size: 14px;
    }
    .price {
      font-size: 16px;
    }
    .benefitBox {
      height: 60px;
      font-size: 12px;
      .go {
        font-size: 16px;
      }
    }
  }
  @media screen and ${theme.mobile} {
    .title {
      font-size: 20px;
    }
    .origin-price {
      font-size: 12px;
    }
    .price {
      font-size: 14px;
    }
    .benefitBox {
      height: 55px;
      font-size: 10px;
      .go {
        font-size: 14px;
      }
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  margin: 30px 0;
  img {
    width: 100px;
    margin-right: 20px;
    border: 1px solid #eee;
  }
`;

const Size = styled.div`
  margin-bottom: 30px;
  span {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }
  @media screen and ${theme.tablet} {
    span {
      font-size: 12px;
    }
  }
  @media screen and ${theme.mobile} {
    span {
      font-size: 10px;
    }
  }
`;

const SelectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding: 20px 0;
  .select_size {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4 {
      font-weight: bold;
      font-size: 16px;
    }
    span {
      color: #999;
    }
    .selected_size {
      width: 30px;
      display: inline-block;
    }
  }
  .itemClose {
    display: inline-block;
    font-weight: bold;
    color: #999;
    margin-left: 10px;
    cursor: pointer;
  }
  .item_price {
    width: 150px;
    text-align: right;
  }
  input {
    width: 50px;
    height: 30px;
    text-align: center;
    border: 1px solid #ccc;
    outline: none;
  }
  button {
    border: 1px solid #ccc;
    width: 30px;
    height: 30px;
    text-align: center;
  }
  @media screen and ${theme.tablet} {
    .select_size {
      h4 {
        font-size: 14px;
      }
      span {
        font-size: 14px;
      }
    }
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  border-top: 1px solid #999;
  padding: 20px 0;
  span:first-child {
    font-size: 22px;
  }
  span:last-child {
    font-size: 18px;
    font-weight: bold;
  }
  @media screen and ${theme.tablet} {
    span:first-child {
      font-size: 18px;
    }
    span:last-child {
      font-size: 16px;
    }
  }
  @media screen and ${theme.mobile} {
    span:first-child {
      font-size: 16px;
    }
  }
`;

const Buttons = styled.div`
  margin-top: 30px;
  button:nth-child(1) {
    background-color: #000;
    color: #fff;
    width: 45%;
    height: 60px;
    cursor: default;
  }
  button:nth-child(2) {
    border: 1px solid #ccc;
    background-color: #fff;
    width: 45%;
    height: 60px;
    cursor: default;
  }
  button:nth-child(3) {
    border: 1px solid #999;
    background-color: #999;
    width: 10%;
    height: 60px;
    cursor: default;
  }
  @media screen and ${theme.tablet} {
    margin-top: 20px;
    button:nth-child(1),
    button:nth-child(2),
    button:nth-child(3) {
      height: 50px;
      font-size: 14px;
    }
  }
  @media screen and ${theme.mobile} {
    button:nth-child(1),
    button:nth-child(2),
    button:nth-child(3) {
      height: 40px;
      font-size: 12px;
    }
  }
`;

const ProductDetailInfo = styled.div`
  margin: 50px 0;
  .product_detail,
  .product_ship,
  .product_membership,
  .product_madein {
    border-top: 1px solid #eee;
    padding: 10px 0;
  }
  .product_madein {
    border-bottom: 1px solid #eee;
  }
  p, ul {
    margin-top: 30px;
    color: #999;
  }
  @media screen and ${theme.tablet} {
    p, ul {
      font-size: 12px;
    }
  }
`;



const ProductDetail = () => {
  let {id} = useParams();
  const [sizeValue, setSizeValue] = useState("");
  const [isSize, setIsSize] = useState(false);
  const getSizeValue = (e) => {
    let sizeValue = e.target.innerText;
    setSizeValue(sizeValue);
    setIsSize(true);
  }
  const resetItem = () => {
    setIsSize(false);
    setItemCounter(0);
  }
  
  const [loading, setLoading] = useState(false);
  const [detailTrueFalse, setDetailTrueFalse] = useState(false);
  const [product, setProduct] = useState([]);
  const [itemCounter, setItemCounter] = useState(1);
  const getProduct = async () => {
    // let url = `http://localhost:3005/products/${id}`;
    let url = `https://my-json-server.typicode.com/sungdongyoon/whatitisnt/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  if(loading) {
    return (
      <div className='loader'>
        <ClipLoader color="#f00" loading={loading} size={300}/>
      </div>
    )
  }
  const discountPrice = product.price - ((product.price) * ((product.discount)/100));
  return (
    <Body>
      <Container>
        <Img src={product.img}/>
        <ProductInfo>
          <div className='title'>
            <span>{product.title}<br/>{product.new ? <span className='newProduct'>신상품</span> : ""}{product.choice ? <span className='pickProduct'>에디터's Pick</span> : ""}</span>
            <img src='https://wiisnt.co.kr/images/cm_icon_socials.gif'/>
          </div>
          <div className='origin-price'>{(product.price)?.toLocaleString()}원</div>
          <div className='price'><b>{product.discount}%</b>{discountPrice.toLocaleString()}원</div>
          <div className='benefitBox'>
            <span>공식 홈페이지 <b>회원혜택</b> 확인하기</span>
            <span className='go'>Go</span>
          </div>
          <ImgContainer>
            <img src={product.img}/>
            <img src={product.img}/>
            <img src={product.img}/>
            <img src={product.img}/>
          </ImgContainer>
          <Size>
            {product.size?.map((it) => (
              <span value={sizeValue} onClick={getSizeValue}>{it}</span>
            ))}
          </Size>
          {isSize && 
            <SelectItem>
              <div className='select_size'>
                <h4>{product.title}</h4>
                <div>
                  <span className='selected_size'>{sizeValue}</span>
                </div>
              </div>
              <div>
                <button onClick={() => itemCounter > 1 && setItemCounter(itemCounter - 1)}>-</button>
                <input className='item_count' value={itemCounter} type='text' min="1"/>
                <button onClick={() => setItemCounter(itemCounter + 1)}>+</button>
                <span className='itemClose' onClick={resetItem}>x</span>
              </div>
              <div className='item_price'>
                <span>{(discountPrice * itemCounter).toLocaleString()}</span>
              </div>
            </SelectItem>
          }
          <TotalPrice>
            <span>총 상품금액</span>
            <span>{(discountPrice * itemCounter).toLocaleString()}원 ({itemCounter}개)</span>
          </TotalPrice>
          <Buttons>
            <button>바로 구매하기</button>
            <button>장바구니 담기</button>
            <button>❤️</button>
          </Buttons>
          <ProductDetailInfo>
            <div className='product_detail'>
              <div>
                상세설명
                <button className='moreBtn' onClick={() => setDetailTrueFalse(!detailTrueFalse)}>
                  {detailTrueFalse ? "닫기" : "보기"}
                </button>
              </div>
            </div>
            <div className='product_ship'>
              <div>배송 / 반품</div>
              {detailTrueFalse && 
                <p>
                배송 방법 : 택배<br/>
                배송 지역 : 전국지역<br/>
                배송 비용 : 무료<br/>
                배송 기간 : 3일 ~ 7일<br/>
                배송 안내 : - 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.<br/>
                고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다.<br/> 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.<br/><br/>

                교환 및 반품이 가능한 경우<br/>
                - 상품을 공급 받으신 날로부터 7일이내 단, 가전제품의 경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.<br/>
                - 공급받으신 상품 및 용역의 내용이 표시.광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그사실을 알게 된 날로부터 30일이내<br/><br/>

                교환 및 반품이 불가능한 경우<br/>
                - 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손된 경우. 단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외<br/>
                - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우<br/>
                (예 : 가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터, 디지털 카메라 등의 불량화소에 따른 반품/교환은 제조사 기준에 따릅니다.)<br/>
                - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 단, 화장품등의 경우 시용제품을 제공한 경우에 한 합니다.<br/>
                - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가 현저히 감소한 경우<br/>
                - 복제가 가능한 상품등의 포장을 훼손한 경우<br/>
                (자세한 내용은 고객만족센터 1:1 E-MAIL상담을 이용해 주시기 바랍니다.)<br/><br/>

                비회원 반품비<br/><br/>

                - 기본 교환/반품<br/>
                전체 반품 : 5,000원<br/>
                부분 반품 : 2,500원<br/>
                교환 : 5,000원<br/><br/>

                - 제주, 도서산간 지역 교환/반품<br/>
                전체 반품 : 11,000원<br/>
                부분 반품 : 5,500원<br/>
                교환 : 11,000원<br/><br/>

                * 자사몰 회원이실 경우 무료 교환/반품<br/>
                </p>
              }
            </div>
            <div className='product_membership'>
              <div>멤버쉽</div>
              {detailTrueFalse &&
                <ul>
                  <li>등급별 할인, 적립, 월별쿠폰 제공</li>
                  <li>자사몰 회원구매 고객 대상 무료 배송, 무료 반품 서비스</li>
                  <li>생일 1만원 할인 쿠폰 증정 (생일 해당 월 전달까지 가입하신 고객만 가능)</li>
                </ul>
              }
            </div>
            <div className='product_madein'>
              <div>제조국</div>
              {detailTrueFalse &&<p>대한민국</p>}
            </div>
          </ProductDetailInfo>
        </ProductInfo>
      </Container>
    </Body>
    
  )
}

export default ProductDetail;
