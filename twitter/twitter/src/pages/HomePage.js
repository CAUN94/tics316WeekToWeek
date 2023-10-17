// HomePage.js
import React,{useState,useEffect} from 'react'
import TweetForm from '../components/TweetForm'
import Tweet from '../components/Tweet'
import Trends from '../components/Trends'
import Following from '../components/Following'
import { generate, count } from "random-words";

function HomePage() {
    const [tweets,setTweets] = useState([]);
    const [texts,setTexts] = useState([]);
    const [text,setText] = useState('Nombre Usuario');
  
    function addTweet(newTeet,newTexts) {
      setTweets([newTeet,...tweets])
      setTexts([newTexts,...texts])
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            // Generate a random word
            const randomTweet = generate({ exactly: 15, join: " " });
            const randomText = generate({ exactly: 2, join: " " });

            // Add the random tweet to the list
            setTweets([randomTweet, ...tweets]);
            setTexts([randomText,...texts])
        }, 6000);

        return () => clearInterval(interval);
    }, [tweets]);
    return (
        <div className="row">
            <TweetForm onTweetSubmit={addTweet} name={text}/>
            <div class="col-md-6 ">
                <input
                className='form-control mb-2'
                type='text'
                placeholder='Nombre Usuario'
                value={text}
                onChange={(e) => setText(e.target.value)}
                >
                </input>
                {tweets.map((tweet,index) => (
                <Tweet key={index} content={tweet} name={texts[index]} />
                ))}
            </div>
            <div class="col-md-3">
                <Trends />
                <Following />
            </div>
        </div>
    );
}

export default HomePage;
