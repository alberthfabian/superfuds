/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../redux/actions';
import Card from '../Card';
import CarouselLeft from '../CarouselLeft';
import CarouselRight from '../CarouselRight';
import { CarouselDiv, CarouselFrame } from './style';

let leftRight = 0; 
const Carousel = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const [ count, setCount ] = useState([]);
  let carouselStart = [];

  useEffect(() => {
    if (data?.length === 0) {
      dispatch(fetchProduct());
      setCount([]);
    }
  },[data, dispatch]);

  useEffect(() => {
    carouselStart = [];
    if(count.length === 0) {
      for(let i=0+leftRight; i<5+leftRight; i++) {
        carouselStart.push(data[i]);
      }
      setCount(carouselStart);
    }
  },[count, data]);

  const update = (e) => {
    carouselStart = [];
    setCount([]);
    if (leftRight === data.length-5) {
      leftRight = 0;
    }
    leftRight = leftRight + e;
    for(let i=0+leftRight; i<5+leftRight; i++) {
      carouselStart.push(data[i]);
    }
    setCount(carouselStart);
  };

  return (
    <CarouselDiv>
      <CarouselLeft 
        type='button'
        onClick={() => update(1)}
      />
      <CarouselFrame>
        {count?.length && 
          count[0]?.id === undefined ? 
            data?.map(product => (
              <Card 
                key={product?.id} 
                id={product?.id}
                title={product?.title}
                price_real={product?.price_real}
                net_content={product?.net_content}
                supplier={product?.supplier}
                image={product?.image}
                units_sf={product?.units_sf}
              />
            ))
          :
          count?.map(product => (
            <Card 
              key={product?.id+50} 
              id={product?.id}
              title={product?.title}
              price_real={product?.price_real}
              net_content={product?.net_content}
              supplier={product?.supplier}
              image={product?.image}
              units_sf={product?.units_sf}
            />
          ))
        }
      </CarouselFrame>
      <CarouselRight 
        type='button'
        onClick={() => update(1)}
      />
    </CarouselDiv>
  );
};

export default Carousel;
