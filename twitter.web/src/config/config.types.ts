import { ActionTypes as TweetsActionTypes } from "../Feed/logic/tweets.types";

export type AppActionTypes =
    | TweetsActionTypes

export interface AppAction {
    type: AppActionTypes;
}

export interface AppResultAction extends AppAction { }