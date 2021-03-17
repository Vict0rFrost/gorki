import styles from '../Profile/profile.module.css';
import UserAvatar from '../Profile/Avatar/Avatar';
import FavoriteCardsComponent from '../FavoriteCards/FavoriteCards';
import MyCardsComponent from '../MyCardsComponent/MyCardsComponent';

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getUser } from '../../redux/actionCreators/userCreator';

function Profile() {
  const { userId } = useParams();
  const dispatch = useDispatch();  
  const user = useSelector((store) => store.user.user)

  useEffect(() => {
    dispatch(getUser(userId))
  }, [dispatch, userId])

  return (

    <div className={styles.profile}>
      <div>
        <div className={styles.userInfo}>
          <h1>{user?.login}</h1>
          <h2>{user?.email}</h2>
        </div>
        <div>
          <UserAvatar avatar={user?.avatar}/>
        </div>
      </div>

      <div className={styles.comp}>
        <MyCardsComponent />
      </div>

      <div className={styles.comp}>
        <FavoriteCardsComponent />
      </div>
      
    </div>
  );
}

export default Profile;
