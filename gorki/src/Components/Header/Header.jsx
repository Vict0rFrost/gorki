import styles from '../Header/header.module.css';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
  return (

    <AppBar position="static">
      <Toolbar className={styles.header}>
        <IconButton edge="start" className={makeStyles.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={makeStyles.title}>
          <Link to="/">
            Gorki
          </Link>
        </Typography>
        <div>
          <Button color="inherit"><Link to="/signin">Войти</Link></Button>
          <Button color="inherit"><Link to="/signup">Регистрация</Link></Button>
        </div>
      </Toolbar>
    </AppBar>

  );
}

export default Header;
