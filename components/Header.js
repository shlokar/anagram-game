import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <h1 className={styles.title}>
        <span className={styles.titleOne}>word</span>
        <span className={styles.titleTwo}>-a-</span>
        <span className={styles.titleThree}>gram</span>
      </h1>
    </nav>
  )
}
export default Header;