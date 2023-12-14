// Description: This file contains the LogoutGun function which is used to log out of GunDB. This function is called from the Logout component.

import Gun from 'gun/gun';


function LogoutGun() {
    const gun = Gun({ peers: ['https://chat.valiantlynx.com/gun'] });
    const currentUser = localStorage.getItem('currentUser');

    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentPassword');
    gun.user().leave();
    document.getElementById('chat').innerHTML = '';
    document.getElementById('chat-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('username-input').value = '';
    document.getElementById('password-input').value = '';
    document.getElementById('username-input').focus();
}

export default LogoutGun