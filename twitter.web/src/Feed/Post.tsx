import { Avatar } from '@mui/material';
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

interface PostProps {
    displayName: string;
    username: string;
    verified: boolean;
    // timestamp;
    text: string;
    image: string;
    // avatar;
}

function Post(props: PostProps) {
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar src='https://thispersondoesnotexist.com/' />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                        {props.displayName + " "}
                            <span className='post__headerSpecial'>
                                {props.verified && <VerifiedIcon className='post__badge' />}
                                @{props.username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{props.text}</p>
                    </div>
                </div>
                <img src={props.image} alt="" />
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