
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Message from '../Message'
import ChatList from '../ChatList'

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
  field: { 
    width: '100%'
  }, 
  chatContainer: {
    width: '100%',
    minHeight: '400px'
  },
  mainCaption: {
    fontWeight: 900, 
    fontSize: '2.7em', 
    lineHeight: '1em', 
    margin: '0 0 1em 0'
  }, 
  container: {
    padding: '1em 0 0 0'
  }, 
  chatListCaption: {
    fontWeight: '900', 
    color: '#b8b8b8'
  }
})

function App(props) {

  const classes = useStyles()

  const [messageList, setMessageList] = useState([])
  const [authorList, setAuthorList] = useState([])

  const [messageFied, setMessageField] = useState('')
  const [authorField, setAuthorField] = useState('')

  const inputRef = useRef()

  useEffect(() => {

    const obj = {
      name: 'Robot', 
      message: 'Hello i am a robot', 
      time:  new Date().toLocaleDateString() + ' in ' + new Date().toLocaleTimeString(),
      class: 'messageRobot'
    };

    if(authorList.length) {
      setTimeout(() => setMessageList((oldArray) => [...oldArray, obj]), 1500)
    }

    inputRef.current.focus();

  }, [authorList])

  const getDataForm = (e) => {
    e.preventDefault()

    const obj = {
      name: authorField, 
      message: messageFied, 
      time: new Date().toLocaleDateString() + ' in ' + new Date().toLocaleTimeString(),
      class: 'messageUser'
    }

    if(authorField.length > 0 && messageFied.length > 0) {
      setMessageList((oldArray) => [...oldArray, obj])
      setAuthorList((oldArray) => [...oldArray, authorField])

      setAuthorField('')
      setMessageField('')

    }

    inputRef.current.focus();
  }

  return (
    <Container
      maxWidth='md'
      className={classes.container}
    >

  <Grid container spacing={3}>
    <Grid item xs={4}>
      <List className={classes.root}>
        <Typography className={classes.chatListCaption} component="h2" gutterBottom>
          Список чатов
        </Typography>
        {props.chats.map(el => <ChatList key={el.id} chats={el} />)}
      </List>
    </Grid>

    <Grid item xs={8}>
      <Typography className={classes.mainCaption} component="h1" gutterBottom>
        Введите любое сообщение, робот вам ответит в течение 2 секунд
      </Typography>
      <div className={classes.chatContainer}>

          { messageList.map((el, index) => {
            return <Message message={el} key={index} />
          }) }

      </div>
      <form className="form-send" onSubmit={ getDataForm }>
        <Box component="div" m={2}>
          <TextField 
            onInput={(e) => setAuthorField(e.target.value)}
            id="outlined-basic" 
            label="Имя" 
            placeholder="Укажите ваше"
            variant="outlined" 
            value={authorField}
            className={classes.field}
            inputRef={inputRef}
            />
        </Box>
        
        <Box component="div" m={2}>
          <TextField
            onInput={(e) => setMessageField(e.target.value)}
            id="outlined-multiline-static"
            label="Сообщение"
            placeholder="Введите ваше собщение"
            multiline
            rows={4}
            variant="outlined"
            value={messageFied}
            className={classes.field}
          />
        </Box>
        <Box component="div" m={2}>
        <Button 
          type="submit"
          variant="contained" 
          color="primary"
          size="large" 
        >
          Отправить
        </Button>
        </Box>
      </form>
    </Grid>
    </Grid>
    </Container>
  );

}

export default App;
