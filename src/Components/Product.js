import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin: 40px 50px;
  width: 320px;
  cursor: pointer;
`;

const Img = styled.img `
  width: 100%;
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
      <Img src={it.img}/>
      <Title>{it.title}</Title>
      <PriceInfo>
        <Discount>{it.discount}%</Discount>
        <DiscountPrice>{it.price - ((it.price) * ((it.discount)/100))}원</DiscountPrice>
        <Price>{it.price}원</Price>
      </PriceInfo>
      
    </Container>
  )
}

export default Product;
