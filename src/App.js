import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FileMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() =>{
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({
          id : doc.id, message : doc.data()
        })))
      }
    );
  }, []);

  useEffect(() => {
    //const name = prompt('Please enter your name');
    setUsername(prompt('Please enter your name'));

  }, [])

  console.log(input);
  console.log(messages);

  const sendMessage =(event) => {
    event.preventDefault();

    console.log(username);

    db.collection('messages').add({
      message: input,
      username: username, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2019/10/Messenger_Logo_Color_RGB.png?w=100&h=100'/>
      <h1>Facebook Messenger</h1>
      <h2>Welcome {username}</h2> 
      <form className="app__form">

        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a Messages..." value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app__iconButton"
            disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>

      </form>

      <FileMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }

      </FileMove>
    </div>
  );
}

export default App;
