import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../../redux/actionCreators/cardsCreator';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


function CardComponent(props) {

  const dispatch = useDispatch()
  const userId = useSelector((state) => state.userSession?.userSession?._id);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const like = (cardId, userId) => {
    dispatch(addLike(cardId, userId))
  }

  return (

    <div>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar 
              className={classes.avatar}
              src={`http://localhost:3001/images/${props.avatar}`}
              aria-label="recipe" > 
            </Avatar>
          }
          title={props.author}
        />
        <CardMedia
          className={classes.media}
          image={`http://localhost:3001/images/${props.image}`}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={() => (like(props.id, userId))} >
            <FavoriteIcon />
          </IconButton>
          <p>{props.likes}</p>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </CardActions>
      </Card>

    </div>
  );
}

export default CardComponent;
