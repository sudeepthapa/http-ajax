import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts'
import { Route, NavLink,Switch} from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';
class Blog extends Component {

    render () {
       
        return (
            <div className="Blog">
                <div>
                    <nav >
                        <ul>
                            <li><NavLink 
                                    to="/posts" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color:'#fa328f',
                                        borderBottom:'2px solid green'
                                    }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </div>
               
                <Switch>
                   
                    <Route path='/new-post' component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    
                </Switch>
               
               
            </div>
        );
    }
}

export default Blog;