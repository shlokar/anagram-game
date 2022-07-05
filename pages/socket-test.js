import Head from 'next/head'
import {useEffect, useState} from 'react';
import io from 'socket.io-client'

let socket = false;

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if(!socket){
        socket = io("http://localhost:8080");
    }
}, [])

  useEffect(() => {
    socket.on("chat", (msg) => {
        setMessages([...messages, msg])
    })
  }, [messages]);

  const sendMessage = () => {
    socket.emit("chat", input);
    setInput("");
  }

  return (
    <div>
      <Head>
        <title>Socket.io + Next.js Chat Example</title>
      </Head>
      <h1>Socket.io + Next.js chat example</h1>
      <input placeholder="message" onChange={e => setInput(e.target.value)} value={input}/><button onClick={sendMessage}>send</button>
      <div id="messages">{messages.map(msg => <div className="message">{msg}</div>)}</div>
    </div>
  )
}
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { io } from 'socket.io-client';

// // const socket = io('http://localhost:3000');
// let socket = false;

// export default function Socket_Test() {

//   useEffect(() => {
//     if (!socket){
//         socket = io('http://localhost:8080');
//     }
//     console.log(socket.id);
//   }, [])
//   // const socket = io('http://localhost:3000');
//   console.log(socket.id);

//   return (
//     <>
//       <input></input>
//     </>
//   )
// }