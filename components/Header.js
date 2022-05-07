import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <nav className={styles.header}>
      <h1 className={styles.title}>
        word-a-gram
      </h1>
    </nav>
  )
}
export default Header;