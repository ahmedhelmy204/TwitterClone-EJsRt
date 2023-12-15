import './Feed.css'
import TweetBox from './TweetBox';
import Post from './Post';
import { useState } from 'react';

function Feed() {

    let tweetsList = [
        {
            displayName: 'Ahmed Helmy',
            username: 'helmy204',
            verified: true,
            text: 'I challenge you to build a Twitter Clone with React!!!',
            image: 'https://media.giphy.com/media/26tk0jALFpsXmAF8c/giphy.gif'
        },
        {
            displayName: 'Hala Khallaf',
            username: 'halakhallaf',
            verified: false,
            text: 'I can tweet now',
            image:''
        },
        {
            displayName: 'Omar Salama',
            username: 'omarsalama',
            verified: false,
            text: 'YOOO its working!',
            image:''
        }
    ];

    const [tweets, setTweets] = useState([]);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {tweetsList.map((tweet, index) => (
                <Post key={index} {...tweet} />
            ))}
            
            
        </div>
    );
}

export default Feed;