import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Stats = ({ open, setOpen }) => {

  return (

    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Stats</DialogTitle>
    </Dialog>

  );

}

export default Stats;