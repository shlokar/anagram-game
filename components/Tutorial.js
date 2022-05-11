import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Tutorial = ({ open, setOpen }) => {

  return (

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>How to Play</DialogTitle>
    </Dialog>

  );

}

export default Tutorial;