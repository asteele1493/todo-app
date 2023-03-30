import React from 'react';
import jwt_decode from 'jwt-decode';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const testUsers = {
  Administrator: {
    password: 'admin',
    name: 'Administrator',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW5pc3RyYXRvciIsInJvbGUiOiJhZG1pbiIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJywncmVhZCcsJ3VwZGF0ZScsJ2RlbGV0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.pAZXAlTmC8fPELk2xHEaP1mUhR8egg9TH5rCyqZhZkQ'
  },
  Editor: {
    password: 'editor',
    name: 'Editor',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRWRpdG9yIiwicm9sZSI6ImVkaXRvciIsImNhcGFiaWxpdGllcyI6IlsncmVhZCcsJ3VwZGF0ZSddIiwiaWF0IjoxNTE2MjM5MDIyfQ.3aDn3e2pf_J_1rZig8wj9RiT47Ae2Lw-AM-Nw4Tmy_s'
  },
  Writer: {
    password: 'writer',
    name: 'Writer',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwicm9sZSI6IndyaXRlciIsImNhcGFiaWxpdGllcyI6IlsnY3JlYXRlJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.dmKh8m18mgQCCJp2xoh73HSOWprdwID32hZsXogLZ68'
  },
  User: {
    password: 'user',
    name: 'User',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVXNlciIsInJvbGUiOiJ1c2VyIiwiY2FwYWJpbGl0aWVzIjoiWydyZWFkJ10iLCJpYXQiOjE1MTYyMzkwMjJ9.WXYvIKLdPz_Mm0XDYSOJo298ftuBqqjTzbRvCpxa9Go'
  },
};

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: null,
      user: { capabilities: [] },
      login: this.login,
      logout: this.logout,
      can: this.can
    };
  }

  login = async ( username, password ) => {


    let url = process.env.REACT_APP_API;

    const axiosReq = {
      baseUrl: url,
      url: '/signin',
      method: 'post',
      auth: {
        username, password
      }
    }

    let response = await axios(axiosReq);
    const { token } = response.data;

    if( token ) {
       try {
         this.validateToken(token);
       } catch(e) {
         this.setLoginState( false, null, {}, e.message );
       }
    } else {
       this.setLoginState( false, null, {}, { message: "Invalid User"} );
    }

  }

  validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      this.setLoginState( true, token, validUser );
    } catch(e) {
      this.setLoginState( false, null, {}, e.message );
    }
  }

  setLoginState = (loggedIn, token, user, error) => {
    this.setState( {loggedIn, token, user, error } );
    localStorage.setItem( 'auth', token );
  }

  logout = () => {
      this.setLoginState( false, null, {} );
  }

  can = (capability) => {
    return this?.state?.user?.capabilities?.includes(capability);
  }

  componentDidMount() {
    const token = localStorage.getItem('auth');
    this.validateToken(token);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }

}

export default LoginProvider;