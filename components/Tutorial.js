import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import styles from '../styles/Tutorial.module.css';

const Tutorial = ({ open, setOpen }) => {

  return (

    <Dialog className={styles.dialog} maxWidth="sm" fullWidth open={open} onClose={() => setOpen(false)}>
      <DialogTitle className={styles.dialogTitle}>How to Play</DialogTitle>
      <Divider />

    </Dialog>

  );

}

export default Tutorial;