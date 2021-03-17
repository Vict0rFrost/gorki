import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './avatar.module.css'

import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { editAvatar } from '../../../redux/actionCreators/userCreator';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function UserAvatar({ avatar }) {
  
  const { userId } = useParams();
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const classes = useStyles();
  
  const sendAvatar = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file", file)
    dispatch(editAvatar(file, userId))
  };

  return (

    <div className={styles.fotoBlock}>
      <div className={classes.root}>
        <Avatar alt="BLA" className={styles.avatar} src={`http://localhost:3001/images/${avatar}`} />
      </div>
      <div>
        <form action="#" method="POST" encType="multipart/form-data" className={styles.form}>
          <input className={`btn btn-primary ${styles.button}`}  type="file" id="file" name="filedata" accept=".jpg" placeholder="HELLOOOOOO" onChange={(event) => {
            const file = event.target.files[0];
            setFile(file)
          }} />
          <button type="button" className="btn btn-primary" onClick={(event) => sendAvatar(event)}>Обновить фотографию</button>
        </form>
      </div>
        
    </div>
  );
}

export default UserAvatar;
