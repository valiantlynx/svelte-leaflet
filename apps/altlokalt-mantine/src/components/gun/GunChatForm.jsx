import AddMessage from "./AddMessage";
import DeleteAllMessages from "./DeleteAllMessages"
import LogoutGun from "./LogoutGun";

function GunChatForm() {
    // make functions to delete all messages, send messages, log out, fill in the chat form
    function DeleteAllMessages() {
        return (
            <DeleteAllMessages />
        )
    }

    function SendMessages(message, imageInput) {
        <sendMessage message={message} imageInput={imageInput} />
    }

    function LogOut() {
        return (
            <LogoutGun />
        )
    }

    function FillChatForm() {
        return (
            <AddMessage/>
        )
    }

    return (

        //  add this to the div below to hide the chat form
        <div id="chat-form" style={{display: "none"}} >
            <h1>Gun Chat</h1>
           <AddMessage />
            <form>
                <input
                    type="text"
                    id="chat-input"
                    onKeyDown={
                        (e) => {
                            if (e.key === 'Enter') {
                                SendMessages(e.target.value);
                            }
                        }
                    }
                    placeholder="Type your message..." />
                <input type="file" id="image-input" multiple />
                <input className="button is-success" onClick={SendMessages() } type="button" id="send-button" value="Send" />
            </form>
            <button className=" button" onClick={LogOut()} id="logout-button">Log Out</button>
            <button onClick={DeleteAllMessages()}>Delete all messages</button>
        </div>
    )
}

export default GunChatForm