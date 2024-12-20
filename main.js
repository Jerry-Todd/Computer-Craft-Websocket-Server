const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
    console.log('Client connected!');

    // Send a message to the client
    function Send(message) {
        ws.send(JSON.stringify({ message }));
    }
    
    Send('Hello, client!');

    // Handle incoming messages from the client
    ws.on('message', (data) => {
        data = data.toString()
        console.log('Received:', data);
    });

    // Handle client disconnection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:3000');