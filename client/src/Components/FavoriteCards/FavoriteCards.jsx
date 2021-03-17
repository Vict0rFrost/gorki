import styles from '../FavoriteCards/FavoriteCards.module.css';

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Card from '../Card/Card';
import { favoriteCards } from '../../redux/actionCreators/cardsCreator';

function FavoriteCardsComponent() {
  
  const { userId } = useParams();
  const cards = useSelector((store) => store.info.favoriteCards)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(favoriteCards(userId))
  }, [dispatch, userId])

  return (

    <div>
      <h1>Мне понравились</h1>

      <ul className={styles.list}>
        {cards && cards.map( (el) => (
          <li key={el._id}>
            <Card
               adress={ el?.adress } 
               image={ el?.image } 
               author={ el?.author.login } 
               likes={ el?.likes.length }
               avatar={ el?.author.avatar } 
            />
          </li>
        ))}
      </ul>
    </div>

  );
}

export default FavoriteCardsComponent;
