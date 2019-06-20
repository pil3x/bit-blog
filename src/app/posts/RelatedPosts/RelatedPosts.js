import React from 'react';
import PostList from '../PostList/PostList';

const RelatedPosts = (props) => {
    return (
        <div className="related-holder">
            <h4>{props.relatedPosts.length} more posts from same author</h4>
            <PostList listOfPosts={props.relatedPosts} />
            {/* {props.relatedPosts.map((post, i) => {
                return (
                    <div className="related-post" key={i}>
                        <Link to={`/posts/${post.id}`}>
                            <h5>{post.title}</h5>
                        </Link>
                    </div>
                )
            })} */}
        </div>
    )
}

export default RelatedPosts;