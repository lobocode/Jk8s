import React from 'react';
import ReactDOM from 'react-dom';
import './login.css';

function App() {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn">LOGIN</button>
      </form>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
