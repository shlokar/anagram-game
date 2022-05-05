import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// import IconButton from '@material-ui/core/IconButton'
// import CloseIcon from '@material-ui/icons/Close';

const Modal = ({ open }) => {

  return (

    <Dialog open={open}>
      <DialogTitle>Time Over!</DialogTitle>
      <DialogActions>
        <Button variant="text">Back to Home</Button>
        <Button variant="text">Play again</Button>
      </DialogActions>
    </Dialog>

  )

}

export default Modal;