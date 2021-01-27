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
                console.log("Error Getting Friends:", err.response.data.error);
            })
    };

    removeFriend = (id) => {
        axiosWithAuth()
            .delete(`/friends/${id}`)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log("Error Deleting Friend:", err.response.data.error);
                });
    };

    render() {
        return (
            <Router>
                <div>
                    <h1>Cast Members of "Friends"</h1>
                    <Link to="/friendform"><button>Add a Friend</button></Link>
                    <Switch>
                        <Route path="/friendform" component={FriendForm} />
                    </Switch>
                    <div>
                        <div className="friend-div">
                            {this.state.friends.map(friend => (
                                <div className="individual-friend" key={friend.id}>
                                    <h2>{friend.name}</h2>
                                    <p>ID: {friend.id}</p>
                                    <p>Age: {friend.age}</p>
                                    <p>Email: {friend.email}</p>
                                    <button className="removeBtn" onSubmit={this.removeFriend}>Remove Friend</button>
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