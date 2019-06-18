import React from 'react';


const PostItem = (props) => {

    return (
        <>
            <div className="section">
                <h5>{props.post.title}</h5>
                <p>{props.post.body}</p>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default PostItem;