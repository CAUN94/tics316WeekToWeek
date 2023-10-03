// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react'
import Navbar from './components/NavBar'
import TweetForm from './components/TweetForm'
import Tweet from './components/Tweet'
import Trends from './components/Trends'
import Following from './components/Following'

function App() {
  const [tweets,setTweets] = useState([]);

  function addTweet(newTeet) {
    setTweets([newTeet,...tweets])
  }

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <TweetForm onTweetSubmit={addTweet}/>
            <div class="col-md-6 ">
            {tweets.map((tweet,index) => (
              <Tweet key={index} content={tweet} />
            ))}
          </div>
          <div class="col-md-3">
            <Trends />
            <Following />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
