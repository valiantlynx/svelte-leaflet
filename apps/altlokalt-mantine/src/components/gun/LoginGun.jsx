import React from 'react'
import Gun from 'gun/gun';
import AddMessage from './AddMessage';

function LoginGun(props) {

  const gun = Gun(
    // { peers: ['http://localhost:8765/gun'] }
    { peers: ['https://chat.valiantlynx.com/gun'] }
  );
  let currentUser = null;
  const username = props.username;
  const password = props.password;

  const user = gun.user();
  user.auth(username, password, (ack) => {
    if (ack.err) {
      console.log("login username:", username, "login pass:", password)
      console.log('Login failed:', ack.err);
      alert('Something went wrong. Please try again. are you sure you have an account?');
    } else {
      console.log('User authenticated');
      gun.get('users').get(username).once((data, key) => {
        if (data && data.password === password) {
          currentUser = username;
          document.getElementById('login-form').style.display = 'none';
          document.getElementById('chat-form').style.display = 'flex';
          document.getElementById('chat-input').focus();

          // Cache the logged-in user
          localStorage.setItem('currentUser', currentUser);
          localStorage.setItem('currentPassword', password);

          // Load chat history
          gun.get('messages').map().once((data, key) => {
            <AddMessage data={data} />
            // Scroll to the searchTermtom of the chat
            document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
          });
        } else {
          alert('Incorrect username or password');
        }
      });
    }

  });

  document.getElementById('register-button').addEventListener('click', registerUser);
      
        
  document.getElementById('login-button').addEventListener('click', (event) => {
    event.preventDefault();
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();

    if (username === '' || password === '') {
      alert('Please enter a username and password');
      return;
    }

    loginUser(username, password);
  });


  return (
    <div id="login-form">
      <h1>Gun Chat</h1>
      <form>
        <input type="text" id="username-input" placeholder="Username" />
        <input type="password" id="password-input" placeholder="Password" />
        <input type="submit" id="login-button" value="Log In" />
      </form>
      <button className=" button" id="register-button">Register</button>
    </div>
  )
}

export default LoginGun