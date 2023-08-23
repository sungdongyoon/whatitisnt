import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../style/theme';

const Container = styled.div`
  width: 320px;
  cursor: pointer;
  margin-bottom: 50px;
  @media screen and ${theme.mobile} {
    border: 1px solid #ccc;
    width: 100%;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Img = styled.div `
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and ${theme.laptop} {

  }
`;

const Title = styled.div`
  font-size: 14px;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Discount = styled.span`
  color: red;
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const DiscountPrice = styled.span`
  font-weight: bold;
  margin-right: 10px;
  font-size: 18px;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: bold;
  text-decoration: line-through;
  color: #999;
`;

const Product = ({it}) => {
  const navigate = useNavigate();
  const showItem = () => {
    navigate(`/products/${it.id}`)
  }
  return (
    <Container onClick={showItem}>
      <Img>
        <img src={it.img}/>
      </Img>
      <Title>{it.title}</Title>
      <PriceInfo>
        <Discount>{it.discount}%</Discount>
        <DiscountPrice>{(it.price - ((it.price) * ((it.discount)/100))).toLocaleString()}원</DiscountPrice>
        <Price>{(it.price).toLocaleString()}원</Price>
      </PriceInfo>
    </Container>
  )
}

export default Product;
