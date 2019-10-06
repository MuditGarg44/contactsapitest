import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleContacts from 'react-google-contacts';


class Login extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }

        const responseCallback = (response) => {
            console.log('from contacts ', response);
          }
        return (
            <div>
                <GoogleLogin
                    clientId="664704485628-otmp04eba38huilafao9ld6oacq0vth1.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <GoogleContacts
                    clientId="664704485628-otmp04eba38huilafao9ld6oacq0vth1.apps.googleusercontent.com"
                    buttonText="Import"
                    onSuccess={responseCallback}
                    onFailure={responseCallback}
                />
            </div>
        );
    }
}
export default Login;