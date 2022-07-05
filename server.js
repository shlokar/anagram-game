const express = require('express')
const next = require('next')
const io = require('socket.io')(8080, {
  cors: {
    origin: ['http://localhost:3000']
  },
})

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})

io.on('connection', socket => {
  console.log(socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on("chat", (message) => {
    io.emit("chat", message)
  })
})



// const express = require('express')();
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// const { Server } = require("socket.io");
// const io = new Server(server, {
//   cors: {
//     origin: "*" //allowing cors from anywhere
//   }
// });

// // app.get("/", (req, res) => {
// //   res.send("Websocket Server")
// // })

// server.listen(3000, () => {
//   console.log('listening on port 3000');
// });