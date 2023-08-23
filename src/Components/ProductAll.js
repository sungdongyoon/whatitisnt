import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './Product';
import Footer from './Footer';
import theme from '../style/theme';


const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  .Container {
    margin-top: 200px;
  }
`;

const Aside = styled.div`
  position: fixed;
  left: 10%;
  width: 250px;
  .asideNew {
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    font-weight: bold;
    color: #068FFF;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
      width: 100%;
      font-size: 12px;
      margin: 5px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      .asideOutlet {
        color: red;
        font-weight: bold;
      }
    }
  }
  @media screen and ${theme.onlyAside} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 50px;
    left: 50%;
    transform: translateX(-50%);
    top: 130px;
    background-color: #333;
    color: #fff;
    border-radius: 10px;
    .asideNew {
      width: 10%;
      margin: 0;
      padding: 0;
      border-bottom: none;
      .plus {
        display: none;
      }
    }
    ul {
      display: flex;
      align-items: center;
      width: 80%;
      margin: 0;
      li {
        justify-content: center;
        margin: 0;
        padding: 0;
        border-bottom: none;
        .plus {
          display: none;
        }
      }
    }
  }
  @media screen and ${theme.laptop} {
    .asideNew {
      font-size: 10px;
    }
    ul {
      li {
        span {
          font-size: 10px;
        }
      }
    }
  }
  @media screen and ${theme.tablet} {
    .asideNew {
      font-size: 10px;
    }
    ul {
      li {
        span {
          font-size: 8px;
        }
      }
    }
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  h5 {
    font-weight: bold;
  }
  span {
    font-size: 12px;
  }
  input {
    width: 300px;
    border: none;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
    outline: none;
  }
  label {
    margin-left: 10px;
  }
  @media screen and ${theme.mobile} {
    h5 {
      font-size: 18px;
    }
    span {
      font-size: 10px;
    }
    input {
      width: 200px;
      font-size: 12px;
    }
    label {
      font-size: 12px;
    }
  }
`;


const ProductAll = () => {
  const pageWidth = window.innerWidth;
  const newItem = ["BEST", "반소매 티셔츠", "상의", "아우터", "하의", "우먼", "모자", "가방", "신발", "라이프", "악세사리"];
  const [productList, setProductList] = useState([]);
  const [itemName, setItemName] = useState('');
  const getItemName = (e) => {
    setItemName(e.target.value.toLowerCase());
    console.log(itemName);
  }
  const [mdValue, setMdValue] = useState(3);
  

  const filteredItem = productList.filter((it) => it.title.toLowerCase().includes(itemName));
  const getProduct = async () => {
    // let url = `http://localhost:3000/products/`;
    let url = `https://my-json-server.typicode.com/sungdongyoon/whatitisnt/products/`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    getProduct();
    if(pageWidth >= 1400) {
      setMdValue(3);
    }
    if(pageWidth < 1400 & pageWidth >= 1024) {
      setMdValue(4);
    }
    if(pageWidth < 1024) {
      setMdValue(6);
    }
    console.log("?", pageWidth, mdValue);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [windowSize])
  return (
    <Wrap>
      <Container className='Container'>
        <Aside>
          <div className='asideNew'>
            <span>🔥23SS NEW ARRIVAL</span>
            <span className='plus'>➕</span>
          </div>
          <ul>
            {newItem.map((it) => (
              <li>
                <span>{it}</span>
                <span className='plus'>➕</span>
              </li>
            ))}
            <li>
              <span className='asideOutlet'>OUTLET</span>
              <span className='plus'>➕</span>
            </li>
          </ul>
        </Aside>  
        <Title>
          <div>
            <h5>베스트 아이템</h5>
            <span>등록제품 : {productList.length}개</span>
          </div>
          <div>
            <input type='text' placeholder='제품 검색' onChange={getItemName}/>
            <label>🍳</label>
          </div>
        </Title>
        <Row>
          {filteredItem.map((it) => (
            <Col md={mdValue} sm={12} key={it.id}>
              <Product it={it}/>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrap>
  )
}

export default ProductAll;
