import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  }
}));

function ChatList(props) {
  const classes = useStyles()

  return (
    <>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={props.chats.name} src={props.chats.avatar} />
      </ListItemAvatar>
      <ListItemText
          primary={props.chats.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.chats.message}
              </Typography>
              
            </React.Fragment>
          }
      />
      
      
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  )

}

export default ChatList;
