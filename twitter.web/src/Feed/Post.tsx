import { Avatar } from '@mui/material';
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

interface PostProps {
    // displayName;
    // username;
    // verified;
    // timestamp;
    // text;
    // image;
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
                            Ahmed Helmy {" "}
                            <span className='post__headerSpecial'>
                                <VerifiedIcon className='post__badge' />
                                @helmy204
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter Clone with React!!!</p>
                    </div>
                </div>
                <img src="https://media.giphy.com/media/26tk0jALFpsXmAF8c/giphy.gif" alt="" />
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