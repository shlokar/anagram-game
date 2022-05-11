import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import styles from '../styles/Stats.module.css';

const Stats = ({ open, setOpen }) => {

  return (

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Statistics</DialogTitle>
      <Divider />
    </Dialog>

  );

}

export default Stats;