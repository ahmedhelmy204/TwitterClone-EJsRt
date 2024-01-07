import { Avatar } from '@mui/material';
import './Tweet.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import {Tweet} from '../logic/tweets.types';

interface PostProps {
    tweet: Tweet;
    selectPost:any; 
};

function Post(props: PostProps) {

    let tweet = props.tweet;

    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src='https://thispersondoesnotexist.com/' />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                        {props.tweet.displayName + " "}
                            <span className='post__headerSpecial'>
                                {props.tweet.verified && <VerifiedIcon className='post__badge' />}
                                @{props.tweet.username}
                            </span>
                        </h3>
                    </div>
                <div onClick={()=> props.selectPost({...tweet})} className="post__headerDescription">
                        <p>{props.tweet.message}</p>
                    </div>
                </div>
                <img src={props.tweet.image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    );
}

export default Post;