import React from 'react';
import authors from '../../shared/authors.js';
import Author from '../../entities/Author.js';
import AuthorsList from './AuthorsList/AuthorsList.js';
// import Main from '../components/Main/Main.js'


class Authors extends React.Component {
    constructor(props) {
        super(props);

        this.authors = this.loadAuthors();
    }

    loadAuthors() {
        return authors.map(author => {
            return new Author(author)
        });
    }

    render() {
        return (
            <>
                <h2 className="center-align">Authors ({this.authors.length})</h2>
                <AuthorsList listOfAuthors={this.authors} />
            </>
        )
    }
}

export default Authors;