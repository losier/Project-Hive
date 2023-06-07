import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AddWorkDialog = ({ isOpen, onClose }) => {
  const [textFieldValue, setTextFieldValue] = React.useState("");

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // will add firebase stuff here to add the work to the database
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Your Work</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter your Github repository URL below to add your work to the
          Project Hive.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="url"
          label="Github Repository URL"
          type="url"
          fullWidth
          variant="standard"
          onChange={handleTextFieldChange}
          value={textFieldValue}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWorkDialog;
