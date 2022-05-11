import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Settings = ({ open, setOpen }) => {

  return (

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Settings</DialogTitle>
    </Dialog>

  );

}

export default Settings;