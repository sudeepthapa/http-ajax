import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts'

class Blog extends Component {

    render () {
       
        return (
            <div className="Blog">
                <div>
                    <nav >
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </div>
               <Posts />
            </div>
        );
    }
}

export default Blog;