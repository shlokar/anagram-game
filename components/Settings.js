import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import styles from '../styles/Settings.module.css';

const Settings = ({ open, setOpen }) => {

  return (

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Settings</DialogTitle>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary="Set Timer" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zen Mode" />
        </ListItem>
      </List>
      {/* <div>
        <span>Timer</span>
      </div> */}
    </Dialog>

  );

}

export default Settings;