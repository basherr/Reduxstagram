import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        const posts = this.props.posts;
        return (
            <div className="photo-grid">
                {posts.map((post, i) => <Photo key={i} i={i} post={post} {...this.props}/>)}
            </div>
        )
    }
});

export default PhotoGrid;