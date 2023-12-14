import React from 'react'

function RemoveMessage(props) {

    const key = props.key;
    

        try {
          console.log("key", key);
          const messageElement = document.getElementById(key);
          if (messageElement) {
            console.log(" to be removed messageElem", messageElement)
            messageElement.remove();
          }
        } catch (error) {
          console.log("error removing message", error)
        }

      
  return (
    <div>RemoveMessage</div>
  )
}

export default RemoveMessage