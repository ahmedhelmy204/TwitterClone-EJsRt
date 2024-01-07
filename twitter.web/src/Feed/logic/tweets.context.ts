import React from "react";
import { Tweet } from "./tweets.types";

interface TweetsContextType {
    loadingState: String;
    tweets: Tweet[];
    addTweet: any;
}

export const TweetsContext= React.createContext<TweetsContextType | null>(null);