import React from 'react';
import { Link } from 'react-router-dom';
import { fetchPost } from '../../../services/postServices';


class PostSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        }
    }

    loadPost() {
        const postId = this.props.match.params.id;
        fetchPost(postId)
            .then(post => {
                return this.setState({ post: post })
            })
    }

    componentDidMount() {
        this.loadPost();
    }

    render() {
        return (
            <div className="center-align">
                <h2>{this.state.post.title}</h2>
                <Link to="/authors">Author Name</Link>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}

export default PostSingle;