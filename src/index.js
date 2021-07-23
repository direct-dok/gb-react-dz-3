import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const chats = [
  {id: 1, name: 'Alex', avatar: './img/avatar/1.jpg', message: 'Even though Israel is a small country it is always in the news.'},
  {id: 2, name: 'Noah', avatar: './img/avatar/2.jpg', message: 'The news continues to report on Jews moving to Israel, on the technology invented there, but also on conflict, wars and tensions with surrounding people.'},
  {id: 3, name: 'Liam', avatar: './img/avatar/3.jpg', message: 'Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years ago a man, who is now very well known'},
  {id: 4, name: 'Mason', avatar: './img/avatar/4.jpg', message: 'This ancient man is Abraham (also known as Abram).'},
  {id: 5, name: 'Jacob', avatar: './img/avatar/5.jpg', message: 'We can take his story seriously because the places and cities he visited are mentioned in other old writings.'},
  {id: 6, name: 'William', avatar: './img/avatar/6.jpg', message: 'I will make you into a great nation, and I will bless you'},
  {id: 7, name: 'Amelia', avatar: './img/avatar/7.jpg', message: 'I will make your name great, and you will be a blessing'},
  {id: 8, name: 'Emily', avatar: './img/avatar/8.jpg', message: 'Most of us wonder if there is a God and if He really is the God of the Bible.'},
  {id: 9, name: 'Lily', avatar: './img/avatar/9.jpg', message: 'The earliest copy of Genesis found in the Dead Sea Scrolls is dated 200-100 B.C.'},
  {id: 10, name: 'Sophie', avatar: './img/avatar/10.jpg', message: 'Surprisingly Abraham really did nothing important in his life.'},
]

ReactDOM.render(
  <React.StrictMode>
    <App chats={chats} />
  </React.StrictMode>,
  document.getElementById('root')
);


