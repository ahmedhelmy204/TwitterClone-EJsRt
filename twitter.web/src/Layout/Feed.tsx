import './Feed.css'
import TweetList from '../Tweet/TweetList';

function Feed() {

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetList />
            
        </div>
    );
}

export default Feed;