import React from 'react';
import styles from './cardForm.module.css';
import Button from '@material-ui/core/Button';
// import NearMeIcon from '@material-ui/icons/NearMe';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard } from '../../redux/actionCreators/cardsCreator';

export default function CardForm({ active, setActive }) {

  const [image, setImage] = useState('defaultCard.jpg')
  const [file, setFile] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  
  const dispatch = useDispatch();
  const userSession = useSelector((store) => store.userSession.userSession);

  const userId = userSession?._id
  
  const sendCard = async (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file", file)
    await geoLocation()
    dispatch(addNewCard( file, userId, latitude, longitude ))
  }

  const geoLocation = async () => {
    const successCallback = (position) => {
      setLatitude(position?.coords?.latitude);
      setLongitude(position?.coords?.longitude);
      console.log(latitude, longitude);
    }
    const errorCallback = (error) => {
      console.log(error);
    }
    navigator.geolocation.getCurrentPosition( successCallback, errorCallback )
  }

  return (

    <div className={ active? styles.menu : styles.menu_active } onClick={() => setActive(false)}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <h3>Добавить горку</h3>

          <form className={styles.form} noValidate autoComplete="off">
            <div>
              <img src={ `http://localhost:3001/images/${image}` } alt="img" className={styles.image} />
            </div>
            <input className={`btn btn-primary ${styles.button}`}  type="file" id="file" name="filedata" accept=".jpg" placeholder="HELLO" onChange={(event) => {
              const file = event.target.files[0];
              setFile(file)
            }} />
            
            <button type="button" className="btn btn-primary" onClick={(event) => sendCard(event)}>Обновить фотографию</button>
            
            {/* <div>
              <NearMeIcon className={styles.geo} onClick={() => { geoLocation() }} />
            </div> */}

            <Button 
            variant="contained" 
            color="primary" 
            component="span" 
            onClick={(event) => sendCard(event)}
            >
              Опубликовать
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
}
