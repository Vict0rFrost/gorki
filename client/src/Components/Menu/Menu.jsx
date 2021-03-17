import styles from '../Menu/menu.module.css';
import { Link } from 'react-router-dom';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import { logoutUser } from "../../redux/actionCreators/authCreator";
import { useDispatch, useSelector } from 'react-redux'

function Menu({ active, setActive }) {
  const dispatch = useDispatch()
  const userSession = useSelector((store) => store.userSession.userSession);

  return (
    <div className={ active ? styles.menu : styles.menu_active } onClick={() => setActive(false)}>
      <AcUnitIcon style={{ fontSize: 80, color: 'white' }}/>
      <Link to="/" className={styles.menuLink}>Главная</Link>
      <Link to="/map" className={styles.menuLink}>Карта</Link>
      {userSession && userSession ? (
        <>
          <Link to={`/profile/${userSession._id}`} className={styles.menuLink}>Профиль</Link>
          <Link to="/" className={styles.menuLink} onClick={() => dispatch(logoutUser())}>Выход</Link>
        </>
      ) :
        <>
          <Link to="/signin" className={styles.menuLink}>Вход</Link>
          <Link to="/signup" className={styles.menuLink}>Регистрация</Link>
        </>
      }
    </div>
  );
}

export default Menu;
