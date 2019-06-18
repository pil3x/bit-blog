import React from 'react';

const AuthorItem = (props) => {
    return (
        <>
            <div className="section">
                <h5>{props.author.name}</h5>
            </div>
            <div className="divider"></div>
        </>
    )
}

export default AuthorItem;