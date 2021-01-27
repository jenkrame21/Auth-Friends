import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class FriendForm extends React.Component {

    state = {
        name: '',
        id: '',
        age: '',
        email: ''
    };

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('/friends', this.state)
                .then((res) => {
                    console.log("Submit Friend Form Worked", res.data);
                    this.setState({
                        ...this.state,
                        friends: res.data
                    })
                })
                .catch((err) => {
                    console.log("ERROR POSTING NEW FRIEND:", err.message);
                });
    };

    render() {
        return (
            <div className="add-friend-form">
                <form onSubmit={this.handleSubmit}>
                    <label>Name: 
                        <input
                        className="friendForm-input"
                        id="name"
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>ID: 
                        <input
                        className="friendForm-input"
                        id="id"
                        name="id"
                        type="number"
                        value={this.state.id}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>Age: 
                        <input
                        className="friendForm-input"
                        id="age"
                        name="age"
                        type="number"
                        value={this.state.age}
                        onChange={this.handleChange}
                        />
                    </label>
                    <label>Email: 
                        <input
                        className="friendForm-input"
                        id="email"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                    </label>
                    <button>Submit Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;