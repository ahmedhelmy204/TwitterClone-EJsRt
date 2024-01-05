import { useEffect, useState } from 'react';
import Post from '../Tweet/Post';
import TweetBox from '../Tweet/TweetBox';
import {Tweet} from './types';
import axios from 'axios';
import './TweetList.css'

const TweetList = () => {

    const [tweets, setTweets] = useState([]);

    useEffect(() =>{
        const loadTweetList = async ()=> {
           await loadTweets();
        };

        loadTweetList();
    }, []);

    const loadTweets = async () => {
        let response =  await axios.get('http://localhost:8080/api/tweets');
        setTweets(response.data.content);
    }

    return (
        <>
            <TweetBox refreshTweetList={loadTweets}/>

            {tweets.map((tweet:Tweet, index) => (
                tweet && <Post key={index} {...tweet} />
            ))}
        </>
    );
}

export default TweetList;