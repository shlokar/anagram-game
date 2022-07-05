import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import LobbyModalOne from '../components/LobbyModalOne.js';
import LobbyModalTwo from '../components/LobbyModalTwo.js';
import styles from '../styles/Multi_Player.module.css';
// import { motion } from "framer-motion";

export default function Multi_Player_Lobby() {

  const [modalView, setModalView] = useState('one');
  const [username, setUsername] = useState('');

  return (
    <div className={styles.container}>
      <Header />
      {/* <LobbyModalOne/> */}
      <LobbyModalTwo username={username} setUsername={setUsername}/>
      <svg className={styles.gradient}>
        <linearGradient id="gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#405DE6"/>
          <stop offset="20%" stopColor="#5851DB"/>
          <stop offset="40%" stopColor="#833AB4"/>
          <stop offset="60%" stopColor="#C13584"/>
          <stop offset="80%" stopColor="#E1306C"/>
          <stop offset="100%" stopColor="#FD1D1D"/>
        </linearGradient>
      </svg>
    </div>
  );

}