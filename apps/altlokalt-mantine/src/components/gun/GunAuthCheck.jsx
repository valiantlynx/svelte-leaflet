import React from 'react'
import Gun from 'gun/gun'

function GunAuthCheck() {
    const gun = Gun({ peers: ['https://chat.valiantlynx.com/gun'] });   
    
    gun.on('auth', () => {
        const user = gun.user();
        let currentUser = localStorage.getItem('currentUser');
        console.log('currentUser: ', currentUser)
      
        if (user.is) {
            currentUser = user.is.alias;
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('chat-form').style.display = 'flex';
            document.getElementById('chat-input').focus();
        }
    });
}

export default GunAuthCheck