import { Box } from '@mui/material';
import DifficultyButton from '../difficulty-button/difficulty-button';
import './../../styles.css';
import './difficulty-selector.css';

function DifficultySelector(): JSX.Element {
  return (
    <Box className="header-container">
      <Box sx={{ fontSize: '1.3rem' }}>Current Word size</Box>
      <Box className="difficulty-buttons-container ">
        <DifficultyButton name={4}></DifficultyButton>
        <DifficultyButton name={5}></DifficultyButton>
        <DifficultyButton name={6}></DifficultyButton>
        <DifficultyButton name={7}></DifficultyButton>
      </Box>
    </Box>
  );
}

export default DifficultySelector;
