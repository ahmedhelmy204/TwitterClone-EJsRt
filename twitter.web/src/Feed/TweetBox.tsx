import { Avatar, Button } from '@mui/material';
import './TweetBox.css'

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form action="">
                <div className="tweetBox__input">
                    <Avatar src='https://thispersondoesnotexist.com/' />
                    <input placeholder="What's happening?" type='text' />
                </div>
                <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type='text' />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;