import { Box } from '@mui/material';
import { useGameProvider } from '../contexts/word-context';

function GameBoard(): JSX.Element {
  const { gameState } = useGameProvider();

  return (
    <div className="game-board-container">
      <Box>
        {gameState.lastRounds.map(
          (round): JSX.Element => (
            <Box sx={{ display: 'flex' }}>
              {round.letters.map((letter) => (
                <Box>{letter.value}</Box>
              ))}
            </Box>
          ),
        )}
      </Box>
    </div>
  );
}

export default GameBoard;
