import { ActionTypes, Action, State } from "./tweets.types";

let initialState : State = {
    tweets: []
}

export default function tweetsReducer(tweetsState: State = initialState , action: Action) {

    switch(action["type"]) {
        case ActionTypes.set_tweets:
            return {
                ...tweetsState,
                tweets: action["tweets"]
            };
        case ActionTypes.add_tweet:
            return {
                ...tweetsState,
                tweets: [...tweetsState.tweets, action['tweet']]
            };
        default:
            return tweetsState;
    }
}