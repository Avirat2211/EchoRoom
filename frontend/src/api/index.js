var socket = new WebSocket('ws://localhost:9000/ws')
let connect=(cb)=>{
    console.log("Connecting")
    socket.onopen=()=>{
        console.log("Successfully Connected")
    }
    socket.onmessage=(msg)=>{
        console.log("Message from websocket: ",msg)
        cb(msg);
    }
    socket.onclose=(e)=>{
        console.log("Socket closed connection: ",e)
    }
    socket.onerror=(e)=>{
        console.log("Socket Error: ",e);        
    }
}

let sendMsg=(msg)=>{
    console.log("Sending message: ",msg);
    socket.send(msg)
}


export {connect,sendMsg}