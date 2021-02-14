import styles from '../Profile/profile.module.css';
import UserAvatar from '../Profile/Avatar/Avatar';

function Profile() {

  return (

    <div className={styles.profile}>
      <h2>Логин</h2>
      <UserAvatar />

      {/* Переключатель списков добавленные горки / лайкнутые горки */}
      {/* Здесь будет компонент со списком добавленных пользователем горок */}
      {/* Компонент добавления новой горки */}
      
    </div>
  );
}

export default Profile;
