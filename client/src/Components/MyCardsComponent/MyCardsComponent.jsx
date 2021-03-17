import styles from '../MyCardsComponent/MyCardsComponent.module.css';

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Card from '../Card/Card';
import { myCards } from '../../redux/actionCreators/cardsCreator';

function MyCardsComponent() {
  
  const { userId } = useParams();
  const cards = useSelector((store) => store.info.myCards)
  const userAvatar = useSelector((store) => store.userSession.userSession.avatar)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(myCards(userId))
  }, [dispatch, userId])

  return (

    <div>
      <h1>Мои горки</h1>

      <ul className={styles.list}>
        {cards.map( (el) => (
          <li key={ el._id }>
            <Card 
              adress={ el.adress } 
              image={ el.image } 
              author={ el.author.login } 
              likes={ el.likes.length }
              avatar={ userAvatar } 
            />
          </li>
        ))}
      </ul>

    </div>

  );
}

export default MyCardsComponent;
