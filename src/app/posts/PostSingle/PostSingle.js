import React from 'react';

const PostSingle = (props) => {
    return (
        <h2>{props.match.params.id}</h2>
    )
}

export default PostSingle;