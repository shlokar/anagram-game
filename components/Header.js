import styles from '../styles/Header.module.css';
import { BiHelpCircle } from 'react-icons/bi';
import { BiMenu } from 'react-icons/bi';
import { FaRegChartBar } from 'react-icons/fa';
import { RiSettings3Line } from 'react-icons/ri';

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.iconContainer}>
        <BiMenu className={styles.icon}/>
        <BiHelpCircle className={styles.icon}/>
      </div>
      <h1 className={styles.title}>
        <span className={styles.titleOne}>word</span>
        <span className={styles.titleTwo}>-a-</span>
        <span className={styles.titleThree}>gram</span>
      </h1>
      <div className={styles.iconContainer}>
        <FaRegChartBar className={styles.icon}/>
        <RiSettings3Line className={styles.icon}/>
      </div>
    </nav>
  )
}
export default Header;