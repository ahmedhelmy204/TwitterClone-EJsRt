import { Avatar, Button } from '@mui/material';
import './TweetBox.css'
import { useState } from 'react';
import axios from 'axios';

interface TweetBoxProps {
    refreshTweetList:any
}

function TweetBox(props: TweetBoxProps) {

    const [message, setMessage] = useState('');

    const postTweet = async (e: any) => {
        e.preventDefault();

        await axios.post('http://localhost:8080/api/tweets', {
            "displayName":"Ahmed Helmy",
            "username": "helmy204",
            "verified": true,
            "message": message,
            "image":"",
            "postDate":"2023-12-15"
        });

        setMessage('');
        props.refreshTweetList();
    };

    return (
        <div className='tweetBox'>
            <form onSubmit={postTweet}>
                <div className="tweetBox__input">
                    <Avatar src='https://thispersondoesnotexist.com/' />
                    <input 
                        onChange={(e) => setMessage(e.target.value)}
                        value={message} 
                        placeholder="What's happening?" 
                        type='text' 
                    />
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type='text' />
                <Button className='tweetBox__tweetButton' type='submit'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;