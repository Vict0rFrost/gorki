import React from 'react';
import styles from './cardList.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCards } from '../../redux/actionCreators/cardsCreator';

import CardComponent from '../Card/Card';

function CardList() {

  const dispatch = useDispatch()
  const cards = useSelector((state) => state.info.allCards);
  
  useEffect(() => {
    dispatch(getAllCards())
  }, [dispatch, cards])
  

  return (

    <div>

      <ul className={styles.list}>
        {cards?.map((el) => (
          
          <li className={styles.card} key={el._id}>
            <CardComponent
              id={ el?._id } 
              adress={ el?.adress } 
              image={ el?.image } 
              author={ el?.author?.login } 
              likes={ el?.likes?.length }
              avatar={ el?.author?.avatar } 
            />
          </li>
        ))}
      </ul>

    </div>
  );
}

export default CardList;
