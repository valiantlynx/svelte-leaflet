import React from 'react';
import Gun from 'gun/gun';
import SEA from 'gun/sea';
import LoginGun from './LoginGun';

function RegisterGun(props) {
  const gun = Gun({ peers: ['https://chat.valiantlynx.com/gun'] });
  const username = props.username;
  const password = props.password;

  const handleRegistration = () => {
    if (username === '' || password === '') {
      alert('Please enter a username and password');
      return;
    }

    gun.get('users').get(username).put({ username, password }, (ack) => {
      if (ack.err) {
        alert(ack.err);
      } else {
        const user = gun.user();
        user.create(username, password, (ack) => {
          if (ack.err) {
            alert(ack.err);
            console.error('Failed to create user:', ack.err);
          } else {
            console.log('User created successfully');
            props.history.push('/login');
          }
        });
      }
    });
  };

  return (
    handleRegistration()
  );
}

export default RegisterGun;
