import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { GameDifficulty, useGameProvider } from '../../contexts/game-context';
import './difficulty-button.css';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function DifficultyButton(props: { name: GameDifficulty }): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const { gameState, changeDifficulty } = useGameProvider();

  return (
    <>
      <Button
        id={props.name.toString()}
        variant="outlined"
        className={`difficulty-button ${
          gameState?.currentDifficulty === props.name ? 'selected' : ''
        }`}
        onClick={handleOpen}
        sx={{ margin: '10px', fontSize: '1.3rem' }}
      >
        {props.name}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            This will reset the current game.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button color="error" variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              color="primary"
              variant="outlined"
              sx={{ marginLeft: '20px' }}
              onClick={(): void => {
                changeDifficulty(props.name);
                handleClose();
              }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default DifficultyButton;
