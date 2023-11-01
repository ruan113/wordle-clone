import { Box } from '@mui/material';
import './../styles.css';
import DifficultyButton from './difficulty-button';
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
