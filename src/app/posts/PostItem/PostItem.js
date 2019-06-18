import React from 'react';
import { Link } from "react-router-dom";


const PostItem = (props) => {
    const postID = props.post.id;
    // console.log(postID);
    return (
        <Link to={"/posts/" + postID}>
            <div className="section">
                <h5>{props.post.title}</h5>
                <p>{props.post.body}</p>
            </div>
            <div className="divider"></div>
        </Link>
    )
}

export default PostItem;