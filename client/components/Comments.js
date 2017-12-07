import React from 'react';

const Comments = React.createClass({

    renderComments(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.onRemove.bind(this, i)}>&times;</button>
                </p>
            </div>
        )
    },
    onSubmit(e) {
        e.preventDefault();
        const postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
        this.refs.author.focus();
    },
    onRemove(i) {
        const postId = this.props.params.postId;
        this.props.removeComment(postId, i);
    },
    render() {
        return(
            <div className="comments">
                {this.props.postComments.map(this.renderComments)}
                <form ref="commentForm" onSubmit={this.onSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
})
export default Comments;