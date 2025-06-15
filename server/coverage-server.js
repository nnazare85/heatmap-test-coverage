const WebSocket = require('ws');
const fs = require('fs');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Overlay client connected.');
  fs.watch('./coverage.json', () => {
    const raw = fs.readFileSync('./coverage.json', 'utf-8');
    const data = JSON.parse(raw);
    ws.send(JSON.stringify(data));
  });
});
