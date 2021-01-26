import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FriendForm from './FriendForm';

class Friends extends React.Component {
    state = {
        friends: []
    }
    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
            .get('/friends')
            .then((res) => {
                // console.log("Get Friends data: ", res.data);
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    };

    render() {
        return (
            <Router>
                <div>
                    <h1>Cast Members of "Friends"</h1>
                    <Link to="/friendform">Add a Friend</Link>
                    <Switch>
                        <Route path="/friendform" component={FriendForm} />
                    </Switch>
                    <div>
                        <div className="friend-div">
                            {this.state.friends.map(friend => (
                                <div className="individual-friend">
                                    <p>Name: {friend.name}</p>
                                    <p>ID: {friend.id}</p>
                                    <p>Age: {friend.age}</p>
                                    <p>Email: {friend.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Friends;