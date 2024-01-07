import { AppAction, AppResultAction } from "../../config/config.types";

export enum ActionTypes {
    set_tweets = 'TWEETS__SET_TWEET',
	add_tweet = 'TWEETS__ADD_TWEET'
}

export interface SetTweetsAppResultAction extends AppResultAction {
	type: ActionTypes.set_tweets;
	tweets: Tweet[];
}

export interface AddTweetAppAction extends AppAction {
	type: ActionTypes.add_tweet;
	tweet: Tweet;
}

export type Action = 
    // AppAction
    SetTweetsAppResultAction 
    | AddTweetAppAction;

	// AppAction
    // & SetTweetsAppResultAction
	// & AddTweetAppAction

export interface State {
	tweets: Tweet[];
};	


export interface Tweet {
    displayName: string;
    username: string;
    verified: boolean;
    // timestamp;
    message: string;
    image: string;
    // avatar;
}