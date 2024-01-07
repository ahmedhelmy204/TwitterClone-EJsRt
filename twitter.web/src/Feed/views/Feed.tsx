import { useState } from 'react';

import TweetList from '../components/TweetList';
import Post from '../components/Tweet';

import {Tweet} from '../logic/tweets.types';

import './Feed.css';
import useTweets from '../logic/useTweets.hook';
import { TweetsContext } from '../logic/tweets.context';

function Feed() {

    const [selectedPost, setSelectedPost] = useState<Tweet>();
    const {tweetsState, loadingState, addTweet} = useTweets();

    return (
        <TweetsContext.Provider value={{tweets: tweetsState.tweets, loadingState, addTweet}}>
            <div className="feed">
                <div className="feed__header">
                    <h2>Home</h2>
                </div>

                {selectedPost ? (
                    <Post tweet={selectedPost} selectPost={setSelectedPost} /> 
                ) : (
                    <TweetList selectPost={setSelectedPost} /> 
                )}
            </div>
        </TweetsContext.Provider>
    );
}

export default Feed;