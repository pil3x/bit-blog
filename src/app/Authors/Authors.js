import React from 'react';
import authors from '../../shared/authors.js';
import Author from '../../entities/Author.js';
import Main from '../components/Main/Main.js'


class Authors extends React.Component {
    constructor(props) {
        super(props);

    }

    loadAuthors() {
        const allAuthors = authors;

        return allAuthors.map(author => {
            return new Author(author)
        });
    }

    render() {
        return (
            <>
                <h2 className="center-align">Authors</h2>
                <Main listOfAuthors={this.loadAuthors()} />
            </>
        )
    }
}

export default Authors;