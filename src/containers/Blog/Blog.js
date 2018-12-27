import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../containers/Blog/Posts/Posts'
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';
// import NewPost from '../Blog/NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent'
const AsyncNewPost=asyncComponent(()=>{
    return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {

    state={
        auth:true
    }
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
                   
                    {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} />:null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>You are Not Logged In</h1>} />
                    {/* <Route path="/" component={Posts}/> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    
                </Switch>
               
               
            </div>
        );
    }
}

export default Blog;