import styles from '../Main/main.module.css';
import CardList from '../CardList/CardList';
import FloatingActionButtons from '../AddButton/AddButton';
import CardForm from '../CardForm/CardForm';
import { useState } from 'react';

function Main() {
  const [formActive, setFormActive] = useState(false)

  return (
    
    <div className={styles.content}>
      <FloatingActionButtons active={formActive} setActive={setFormActive}/>
      <CardList />
      <CardForm active={formActive} setActive={setFormActive} />
    </div>

  );
}

export default Main;
