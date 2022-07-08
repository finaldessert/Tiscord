import React from "react";

class CreateUser extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(title) {
        return e => this.setState({[title]: e.currentTarget.value});
    }

    render(){
        return (
            <div id="login-form">
                <form onSubmit={this.handleSubmit} id='actual-register-form'>
                    <h1>Create an account</h1>
                    <h5>USERNAME
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </h5>
                    <h5>EMAIL                 
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </h5>    
                    <h5>PASSWORD
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </h5>
                    <h5>DATE OF BIRTH
                        <input type="date" />
                    </h5>
                    <div id='terms-container'>
                        <input type="checkbox" id='terms-checkbox'/>
                        I have read and agreed to Tiscord's Terms of Services and Privacy Policy by Benny Lim
                    </div>
                    <input type="submit" value='Continue'/>        
                </form>
            </div>
        );
    }
}


export default CreateUser;