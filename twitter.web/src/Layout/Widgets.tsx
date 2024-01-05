import './Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={'1733109436791632163'} />

                <TwitterTimelineEmbed sourceType='profile' screenName='helmy204' options={{height:400}} />

                <TwitterShareButton url={"https://www.facebook.com/helmy204"} options={{ text: "#react is awesome", via: "helmy204"}} />
            </div>
        </div>
    );
}

export default Widgets;