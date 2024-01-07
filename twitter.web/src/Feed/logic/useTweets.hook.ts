import axios from 'axios';
import { useEffect, useState, useReducer } from 'react';
import { LoadingStatus } from '../../helpers/LoadingStatus';
import { Action, State, Tweet, ActionTypes} from './tweets.types';
import tweetsReducer  from './tweets.reducer';
import { addTweetAction, setTweetsAction } from './tweets.actions';

const tweetsInitialState : State = {
    tweets: []
}

const useTweets = () => {
    const [tweetsState, dispatch] = useReducer(tweetsReducer, tweetsInitialState);
    const [loadingState, setLoadingState] = useState(new LoadingStatus().isLoading);

    useEffect(() =>{
        const getTweets = async () => {
            setLoadingState(new LoadingStatus().isLoading);
            try {
                let response =  await axios.get('http://localhost:8080/api/tweets');
                dispatch(setTweetsAction(response.data.content));
                setLoadingState(new LoadingStatus().loaded);
            } catch {
                setLoadingState(new LoadingStatus().hasError);
            }
        };

        getTweets();
    }, []);

    const postTweet = async (tweet: Tweet) => {

        await axios.post('http://localhost:8080/api/tweets', {
            "displayName":tweet.displayName,
            "username": tweet.username,
            "verified": tweet.verified,
            "message": tweet.message,
            "image": tweet.image,
            "postDate":"2023-12-15"
        });
    };

    const addTweet = async (tweet: Tweet) => {
        await postTweet(tweet);
        dispatch(addTweetAction(tweet));
    };

    return {
        tweetsState, 
        addTweet,
        loadingState,
    };
};

export default useTweets;