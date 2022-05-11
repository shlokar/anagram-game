import React, { useState } from 'react';
import Tutorial from './Tutorial.js';
import Stats from './Stats.js';
import Settings from './Settings.js';
import styles from '../styles/Header.module.css';
import { BiHelpCircle } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { FaRegChartBar } from 'react-icons/fa';
import { RiSettings3Line } from 'react-icons/ri';

const Header = () => {

  const [ tutorialOpen, setTutorialOpen ] = useState(false);
  const [ statsOpen, setStatsOpen ] = useState(false);
  const [ settingsOpen, setSettingsOpen ] = useState(false);

  return (
    <nav className={styles.header}>
      <div className={styles.iconContainer}>
        <BiMenu className={styles.icon} />
        <BiHelpCircle className={styles.icon} onClick={() => setTutorialOpen(true)}/>
        <Tutorial open={tutorialOpen} setOpen={setTutorialOpen}/>
      </div>
      <h1 className={styles.title}>
        <span className={styles.titleOne}>word</span>
        <span className={styles.titleTwo}>-a-</span>
        <span className={styles.titleThree}>gram</span>
      </h1>
      <div className={styles.iconContainer}>
        <FaRegChartBar className={styles.icon} onClick={() => setStatsOpen(true)}/>
        <Stats open={statsOpen} setOpen={setStatsOpen}/>
        <RiSettings3Line className={styles.icon} onClick={() => setSettingsOpen(true)}/>
        <Settings open={settingsOpen} setOpen={setSettingsOpen}/>
      </div>
    </nav>
  )
}
export default Header;