import { ActionTypes, AddTweetAppAction, SetTweetsAppResultAction, Tweet } from "./tweets.types";

export const setTweetsAction = (tweets: Tweet[]): SetTweetsAppResultAction => ({
    type: ActionTypes.set_tweets,
    tweets
});

export const addTweetAction = (tweet: Tweet): AddTweetAppAction => ({
    type: ActionTypes.add_tweet,
    tweet
});