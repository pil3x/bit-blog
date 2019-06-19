import React from 'react';
import { Link } from 'react-router-dom';
import { fetchAuthor } from '../../../services/authorService.js';
import { fetchPost, fetchRelatedPosts } from '../../../services/postServices';


class PostSingle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            author: {},
            relatedPosts: []
        }
    }

    loadPost() {
        const postId = this.props.match.params.id;

        fetchPost(postId)
            .then(post => {
                this.setState({ post })
                this.loadAuthorData(post.authorId)
                this.loadRelatedPosts(post.authorId);
            })
    }

    loadAuthorData(id) {
        fetchAuthor(id)
            .then(author => {
                this.setState({ author })
            })
    }

    loadRelatedPosts(id) {
        fetchRelatedPosts(id)
            .then(posts => {
                this.setState({ relatedPosts: posts })
            })
    }

    onClickBack = () => {
        this.props.history.goBack();

    }

    componentDidMount() {
        this.loadPost();
    }

    componentDidUpdate(prevProps) {
        const id = this.props.match.params.id
        if (prevProps.match.params.id !== id) {
            this.loadPost(id);
        }
    }

    render() {
        const { post, author } = this.state;
        return (
            <>
                <div className="row back-link">
                    <div className="col s12">
                        <div className="back-button" onClick={this.onClickBack}>
                            <span className="fas fa-chevron-left"></span>
                            <span>Back</span>
                        </div>
                    </div>
                </div>

                <div className="single-holder center-align">
                    <h2>{post.title}</h2>
                    <h4 className="author-name"><Link to={"/authors/" + post.authorId}>{author.name}</Link></h4>
                    <p>{post.body}</p>
                </div>
                <div>
                    <h4>{this.state.relatedPosts.length} more posts from same author</h4>
                    {this.state.relatedPosts.map((post, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/posts/${post.id}`}>
                                    <div>
                                        <h5>{post.title}</h5>
                                    </div>
                                </Link>
                            </div>

                        )
                    })}
                </div>
            </>

        )
    }
}

export default PostSingle;