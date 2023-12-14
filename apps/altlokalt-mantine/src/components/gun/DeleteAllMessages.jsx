import React from 'react'
import Gun from 'gun/gun'


function DeleteAllMessages() {
    const gun = Gun({ peers: ['https://chat.valiantlynx.com/gun'] });
    

    // Assuming the data is stored under the path 'data'
    // and each relay is stored under the path 'relays/relay1', 'relays/relay2', etc.

    // const gun = Gun();

    // // Get all the relays
    // gun.get('relays').map().on(function (relayData, relayId) {
    //   // Get the data from each relay
    //   gun.get('relays').get(relayId).get('data').once(function (data) {
    //     // Delete the data from the relay
    //     gun.get('relays').get(relayId).put({ data: null });
    //   });
    // });

    // // Alternatively, if you just want to delete the data from the current relay
    // // you can use the following code:
    // gun.get('data').put(null);




    if (alert('Are you sure you want to delete all messages? This action cannot be undone.')) {
        gun.get('messages').map().once((data, key) => {
            gun.get('messages').get(key).put(null, ack => {

                if (ack.err) {
                    console.error('Error deleting messages', ack.err);
                    alert('Error deleting messages');
                } else {
                    console.log(ack);
                    console.log("Message deleted successfully");
                    window.location.reload();

                }
                //console.log(ack);
            });
        });


    }


}

export default DeleteAllMessages