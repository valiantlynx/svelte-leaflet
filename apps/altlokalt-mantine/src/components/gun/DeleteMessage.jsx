import React from 'react'
import Gun from 'gun/gun';
import RemoveMessage from './RemoveMessage';

function DeleteMessage(props) {
    const gun = Gun(
        // { peers: ['http://localhost:8765/gun'] }
        { peers: ['https://chat.valiantlynx.com/gun'] }
    );

    const currentUser = localStorage.getItem('currentUser');
    const id = props.id;
    const username = props.username;


    //console.log("id", id)
    //console.log("username", username)

    if (username === currentUser || username === 'bot') {

        gun.get('messages').map().once((data, key) => {
            if (data && data.id === id) {
                //console.log("loop data", data)
                //console.log("loop key", key)
                gun.get('messages').get(key).put(null, ack => {
                    if (ack.err) {
                        console.log("Error deleting message", ack.err);
                    } else {

                        const messageString = JSON.stringify({ action: 'delete', data: id });
                        console.log(ack);
                        console.log("Message deleted successfully");
                        <RemoveMessage key={id} />
                    }
                    //console.log(ack);
                });

            } else {
                return;
                console.log("Message already deleted");
            }

            // Scroll to the searchTermtom of the chat
            document.getElementById('chat').scrollTop = document.getElementById('chat').scrollHeight;
        });
    } else {
        alert('You can only delete your own messages');
    }

    return (
        <div>DeleteMessage</div>
    )
}

export default DeleteMessage