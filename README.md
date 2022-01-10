## TCP
To start the TCP server, run `node tcp.js`

Connect to the server using the following command `telnet 127.0.0.1 8000`

## UDP
To start the UDP server, run `node udp.js`

As UDP is connectionless/stateless there is no need to connect to the server explicitly. Just send whatever you want using `echo "hayyy" | nc -w1 -u 127.0.0.1 7000`.
