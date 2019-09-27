import React from 'react';

const Main = ({
    addTweet,
    change,
    tweet,
    tweets,
    charCounter,
    addTweetByEnter
}) => {

    const showTweet = tweets.map((tweet, index) => {
        return (
        <div className="tweet" key={index}>
                <p>{tweet.tweet}</p>
                <span className="tweetTimeAdded">{tweet.tweetTime}</span>
            </div>
        )
    });

    return(
        <main>
            <div className="tweetForm">
                <span className='title'>
                What's on your mind?
                </span>
                <textarea className="textarea"
                    onChange={change}
                    onKeyPress={addTweetByEnter}
                    value={tweet}
                    maxLength='140'>
                </textarea>

                <div className="tweetSaving">
                    <span className='counter'> {charCounter}/140 </span>
                    <span className='saveButton'>
                        <button onClick={addTweet}>Save</button>
                    </span>
                </div>

                <div id='tweetsContainer'>
                    {showTweet}
                </div>
            </div>
        </main>
    )
}

export default Main;