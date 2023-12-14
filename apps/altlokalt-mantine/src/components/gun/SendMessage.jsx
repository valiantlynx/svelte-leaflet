import React from 'react'
import Gun from 'gun/gun';

function SendMessage() {
    const gun = Gun(
        // { peers: ['http://localhost:8765/gun'] }
        { peers: ['https://chat.valiantlynx.com/gun'] }
    );

    const currentUser = localStorage.getItem('currentUser');

    const message = document.getElementById('chat-input').value.trim();
    const imageInput = document.getElementById('image-input');
    const images = imageInput.files;

    if (message === '' && images.length === 0) {
        return;
    }

    // Add this line to the sendMessage function
    processMessage(message); // Process the user's message and respond if necessary


    const time = new Date().getTime();
    const id = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)).toString(36)

    const data = { username: currentUser, message, time, id };
    const messageString = JSON.stringify({ action: 'add', data });

    if (images.length > 0) {
        const reader = new FileReader();
        reader.onload = function () {
            const imageString = reader.result.split(',')[1];
            data.image = imageString;
            gun.get('messages').set(data);
        };
        reader.readAsDataURL(images[0]);
    } else {
        gun.get('messages').set(data);
    }

    document.getElementById('chat-input').value = '';
    imageInput.value = '';

}

export default SendMessage