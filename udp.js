const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    socket.close();
});

socket.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.on('listening', () => {
    const address = socket.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

socket.bind(7000);
