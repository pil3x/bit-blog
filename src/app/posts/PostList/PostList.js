import React from 'react';
import PostItem from '../PostItem/PostItem';


const PostList = (props) => {
    return (
        <div className="row">
            {props.listOfPosts.map((post, index) => {
                return <PostItem key={index} post={post} />
            })}

        </div>

    )

}

export default PostList;