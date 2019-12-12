import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div 
        style={{ borderRadius: '5px', padding: '20px', background: '#686de0' }}>
        {isLoggedin ? (
          <div >
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="navbar-wrap">
            <Link to="/login">
              {' '}
              <button>Login</button>{' '}
            </Link>
            <br />
            <Link to="/signup">
              {' '}
              <button>Signup</button>{' '}
            </Link>
            <Link to="/coins">
              {' '}
              <button>CoinList</button>{' '}
            </Link>
            <Link to="/coins/updateHistory">
              {' '}
              <button>Update Hisotry</button>{' '}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
