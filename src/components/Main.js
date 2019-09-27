import React from 'react';

const Main = ({
    addComment,
    change,
    comment,
    commentList,
    charCounter,
    addCommentByEnter
}) => {

    const showComment = commentList.map((tweet, index) => {

        return (
        <div className="comment" key={index}>
                <p>{tweet.comment}</p>
                <span className="commentTimeAdded">{tweet.commentTime}</span>
            </div>
        )
    });

    return(
        <main>
            <div className="commentForm">
                <span className='title'>
                What's on your mind?
                </span>
                <textarea className="textarea"
                    onChange={change}
                    onKeyPress={addCommentByEnter}
                    value={comment}
                    maxLength='140'>
                </textarea>

                <div className="commentSaving">
                    <span className='counter'> {charCounter}/140 </span>
                    <span className='saveButton'>
                        <button onClick={addComment}>Save</button>
                    </span>
                </div>

                <div id='commentsContainer'>
                    {showComment}
                </div>
            </div>
        </main>
    )
}

export default Main;