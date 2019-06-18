import React from 'react';
import AuthorItem from '../AutorItem/AutorItem.js'

const AuthorsList = (props) => {
    return (
        <>
            <div className="row">

                {props.listOfAuthors.map((author, index) => {
                    return <AuthorItem key={index} author={author} />
                })}

            </div>
        </>
    )
}

export default AuthorsList;
