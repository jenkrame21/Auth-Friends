import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        },
        isLoading: false
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then((res) => {
                // console.log(res);
                localStorage.setItem("token", res.data.payload)
                // console.log(this.props);
                this.props.history.push("/protected");
            })
            .catch((err) => {
                console.log("ERROR LOGIN INCORRECT:", err.response.data.error);
            });
    };

    render() {
        const { isLoading } = this.state
        return(
            <div className="login">
                <form onSubmit={this.login}>
                    <h2>Login</h2>
                    <label>Username:
                        <input
                            className="login-input"
                            name="username"
                            type="text"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>Password:
                        <input
                            className="login-input"
                            name="password"
                            type="password"
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;