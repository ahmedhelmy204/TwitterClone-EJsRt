import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Tweet} from './types/tweet';

function Feed() {

    useEffect(() =>{
        const loadTweetList = async ()=> {
           await loadTweets();
        }
    }, []);

    const loadTweets = async () => {
        let response =  await axios.get('http://localhost:8080/api/tweets');
        setTweets(response.data.content);
    }

    const [tweets, setTweets] = useState([]);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox refreshTweetList={loadTweets}/>

            {tweets.map((tweet:Tweet, index) => (
                tweet && <Post key={index} {...tweet} />
            ))}
            
            
        </div>
    );
}

export default Feed;