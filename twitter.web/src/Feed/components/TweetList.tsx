import Post from './Tweet';
import TweetBox from './TweetBox';
import {Tweet} from '../logic/tweets.types';
import './TweetList.css'
import { LoadingStatus } from '../../helpers/LoadingStatus';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useContext } from 'react';
import { TweetsContext } from '../logic/tweets.context';

const TweetList = ({selectPost}:any) => {

    const tweetsContextType = useContext(TweetsContext);    
    
    if(tweetsContextType!.loadingState !== new LoadingStatus().loaded)
        return <LoadingIndicator loadingState={tweetsContextType!.loadingState} />

    return (
        <>
            <TweetBox addTweet={tweetsContextType!.addTweet} />

            {tweetsContextType!.tweets.map((tweet:Tweet) => (
                tweet && <Post key={tweet.message} tweet={tweet} selectPost={selectPost} />
            ))}
        </>
    );
}

export default TweetList;