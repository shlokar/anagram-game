import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import styles from '../styles/Settings.module.css';

const Settings = ({ open, setOpen }) => {

  return (

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Settings</DialogTitle>
      <Divider />
    </Dialog>

  );

}

export default Settings;