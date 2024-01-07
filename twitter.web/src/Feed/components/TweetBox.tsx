import { Avatar, Button } from '@mui/material';
import './TweetBox.css'
import { useState } from 'react';
import { Tweet } from '../logic/tweets.types';

interface TweetBoxProps {
    addTweet:any
}

function TweetBox(props: TweetBoxProps) {

    const [message, setMessage] = useState('');

    const handleOnSubmit = async (e: any) => {

        e.preventDefault();

        let tweet : Tweet = {
            displayName: "Ahmed Helmy",
            username: "helmy204",
            verified: true,
            message: message,
            image:""
        }

        await props.addTweet(tweet);

        setMessage('');
    }

    return (
        <div className='tweetBox'>
            <form onSubmit={handleOnSubmit}>
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