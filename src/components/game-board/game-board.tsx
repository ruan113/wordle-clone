import { Box } from '@mui/material';
import { GameState, useGameProvider } from '../../contexts/game-context';
import './../styles.css';
import './game-board.css';

function GameBoard(): JSX.Element {
  const { gameState } = useGameProvider();

  return (
    <>
      {/* {`currentWord: ${gameState.currentWord}`} */}
      <div className="game-board-container h-center">
        <Box>
          {gameState.boardSpaces.map(
            (round, y): JSX.Element => (
              <div className="d-flex">
                {round.letters.map((letter, x) => (
                  <div className={getSquareClasses({ gameState, x, y })}>
                    {letter.toUpperCase()}
                  </div>
                ))}
              </div>
            ),
          )}
        </Box>
      </div>
    </>
  );
}

type GetSquareClassesProps = {
  gameState: GameState;
  x: number;
  y: number;
};

function getSquareClasses({ gameState, x, y }: GetSquareClassesProps): string {
  const square = gameState.boardSpaces[y].letters[x];

  const isFromASpaceThatWasntUsedYet =
    y > Number(gameState.currentBoardSpaceIndexBeingUsed);
  const isFromCurrentSpaceBeingUsed =
    y === Number(gameState.currentBoardSpaceIndexBeingUsed);
  const isBlank = square === '';

  if (isFromASpaceThatWasntUsedYet || isBlank) return 'square';

  if (isFromCurrentSpaceBeingUsed) {
    if (isBlank) return 'square';
    return 'filled square';
  }

  if (square === gameState.currentWord[x])
    return 'square filled correct-letter';
  if (gameState.currentWord.includes(square)) {
    return 'square filled correct-letter-but-wrong-position';
  } else {
    return 'square filled wrong-letter';
  }
}

export default GameBoard;
