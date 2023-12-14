import React from 'react'
import ProcessMessage from './ProcessMessage';
import DeleteMessage from './DeleteMessage';

function AddMessage(props) {
    const currentUser = localStorage.getItem('currentUser');
    const data = props.data;
    console.log(data);

    try {
        const { username, message, time, id, image } = data;

        if (username && (message || image) && time) {
            const messageElement = document.createElement('div');
            const contentElement = document.createElement('div');
            messageElement.classList.add('message');
            contentElement.classList.add('content-message');
            contentElement.setAttribute('id', id); // Add id attribute
            if (username === currentUser || username === 'bot') {
                contentElement.classList.add('own-message');
                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete-button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    <DeleteMessage id={id} username={username} />
                });

                contentElement.appendChild(deleteButton);
            }

            const usernameElement = document.createElement('span');
            usernameElement.classList.add('username');
            usernameElement.textContent = username;

            const timeElement = document.createElement('span');
            timeElement.classList.add('time');
            timeElement.textContent = new Date(time).toLocaleTimeString();

            const textElement = document.createElement('span');
            textElement.classList.add('text');
            textElement.textContent = message;

            const imageElement = document.createElement('img');
            imageElement.classList.add('image');
            imageElement.src = `data:image/png;base64,${image}`;

            const profileImageElement = document.createElement('img');
            profileImageElement.classList.add('profile-image');
            profileImageElement.src = `https://avatars.dicebear.com/api/human/${username}.svg`;

            messageElement.appendChild(profileImageElement);
            messageElement.appendChild(usernameElement);
            messageElement.appendChild(timeElement);

            messageElement.appendChild(contentElement);
            if (message) {
                contentElement.appendChild(textElement);
            }
            if (image) {
                contentElement.appendChild(imageElement);
            }
            // Add this line to the addMessage function
            if (username !== 'searchTerm') {
                <ProcessMessage data={data} />
            } // Process the incoming message and respond if necessary

            document.getElementById('chat').appendChild(messageElement);
            document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
        }
    } catch (error) {
        return;
    }



    return (
        <div id="chat"></div>
    )
}

export default AddMessage