import styles from '../styles/Modal.module.css';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { motion } from "framer-motion";

const Modal = ({ score }) => {

  return (
    <motion.div className={styles.container} initial={{ opacity: 0, x: "5%", y: "-5%" }} animate={{ opacity: 1.6 }} transition={{ duration: 1.2 }}>
      <div className={styles.top}>
        <EmojiEventsOutlinedIcon className={styles.score_icon}/>
        <span className={styles.score}>{score}</span>
      </div>
      <div className={styles.bottom}>
        <button className={styles.button} onClick={() => window.location.reload(false)}>Play again</button>
        <button className={styles.button}>Back</button>
      </div>
    </motion.div>
  )

}

export default Modal;