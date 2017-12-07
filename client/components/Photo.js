import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({

    render() {
        const { i, post, comments } = this.props;
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} />
                    </Link>
                
                    <CSSTransitionGroup transitionName="likes-heart"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <span className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>
                    
                    <figcaption>
                        <p>{post.caption}</p>
                        <div className="control-buttons">
                            <button className="likes">&hearts; {post.likes}</button>
                            <Link className="button" to={`/view/${post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-bubble"></span>
                                    {comments[post.code] ? comments[post.code].length : 0}
                                </span>
                            </Link>
                        </div>
                    </figcaption>
                </div>
            </figure>

        )
    }
});

export default Photo;