// import styles from '../Avatar/';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

const useAvatar = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function UserAvatar() {
  const classes = useStyles();
  const avatar = useAvatar();

  return (

    <div>
      
      <div className={classes.root}>
        <Avatar alt="Avatar" src="https://yandex-images.naydex.net/oa9FE8357/d659598Yc/hg8IIRZT-h_BeUjXr-RHeYN-IlhOqzPFaf7Tpf6w_u5vOAf6j5_k02VyMtYzFdlT7KLFdwODs86hawzEUEK7GMMSEAg-L_Mj3ElB_rohJ3iPGx8JO-Z6xTXO0qWCvbPvU1lf1yba5JJUM1uTix3dW5Aebft6X14zNJbAabQz4nTGWyRwYzsCusW9cJt6bGctVoreAMaTvzwNHs-wciRm59-M0xZ3K4RC4CcvEzbEkMqULvXb1hNiL8QCdO2wG-4k5g8Z6CfjItNNsagnagAnRUqa6jimay_oAX5zsBZofgOXBJsS0xuYSlS_twtugLwmdAad38rjFh9A6riRqN_eYIoT1UDri3Yf7a0UX9p8l1nC6u6UJtsfYLmm1zTyDL6DY3QrKivXgGpoV4vHzlQwvpRCuZvK-3bv3KI4lUhHethuj4VslzfS14G9bIdy2Cf1DtoajGaT4_wRhic4grz6VwuUS84z18QOwDurJ0pgtKrUpikzVhsuV3BicAXY59pYdhsZ5J9nPu_ZhYg32jT7QS4Chhi2Azt06W5vqMbo1u__2Edqx9fkxhwb89NCHKgy7FqtyypzkidUCgTFIDMynMLDUXh_X55zeaUAh6aIa_3uhiZ0UqeTYMHqa9DmzP6LO5SPpmcz_D6MF9dbLnSw-vAKPSvixxpX3JpokRTv8ijKZ-GcL7tWQ229VCvCeCcN6lriWPIDZ_AN7meo1uzesz80o_obWwDWOGOP35KUtMYY3h2vGnsy75S6yO1Ud6IswntVHAdbZg8h-YALTny7iXIaCrjG80_wwWZf1Nr41nffxIt275P0YtA757umcIDeVDrJd8IHkp88_sjlWAP6hFJHpdQj23L_He3gD15YI02eimoMSiv_TAl-ryTueHIHEzhzaqfLiFLU82_LluwQEoQKJS9Wa0YDVFY0yRCbXvg-5xkUL4vCLw0ZgENGfCMBDpraBLJzZxRJBsPI8pAM" />
      </div>

      <div>
        <div className={avatar.root}>
          <input
            accept="image/*"
            className={avatar.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Загрузить
            </Button>
          </label>
        </div>
      </div>
        
    </div>
  );
}

export default UserAvatar;
