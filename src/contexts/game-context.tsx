import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ALL_WORDS } from '../words';

export type GameDifficulty = 4 | 5 | 6 | 7;

type BoardSpace = {
  letters: string[];
};

export type GameState = {
  currentWord: string;
  currentBoardSpaceIndexBeingUsed: number;
  boardSpaces: BoardSpace[];
  currentDifficulty: GameDifficulty;
};

interface GameProviderProps {
  children: ReactNode;
}

interface GameContextData {
  gameState: GameState;
  initializeNewGame: () => void;
  changeDifficulty: (newDifficulty: GameDifficulty) => void;
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  submitAttempt: () => void;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

const useGameProvider = (): GameContextData => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within an GameProvider');
  }
  return context;
};

const GameProvider = ({ children }: GameProviderProps): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>(getGameInitialState(5));

  useEffect(() => {
    initializeNewGame();
  }, []);

  const initializeNewGame = (difficulty: GameDifficulty = 5): void => {
    const newState = getGameInitialState(difficulty);
    const filteredWords = ALL_WORDS.filter(
      (word) => word.length === difficulty,
    );
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    newState.currentWord = filteredWords[randomIndex];
    setGameState(newState);
  };

  const changeDifficulty = (newDifficulty: GameDifficulty): void =>
    initializeNewGame(newDifficulty);

  const addLetter = (letter: string): void => {
    const newState = { ...gameState };

    const currentSpaceWithoutBlankSpaces = newState.boardSpaces[
      newState.currentBoardSpaceIndexBeingUsed
    ].letters.filter((it) => it !== '');
    if (currentSpaceWithoutBlankSpaces.length >= newState.currentDifficulty)
      return;

    newState.boardSpaces[newState.currentBoardSpaceIndexBeingUsed].letters[
      currentSpaceWithoutBlankSpaces.length
    ] = letter;
    setGameState(newState);
  };

  const removeLetter = (): void => {
    const newState = { ...gameState };

    const currentSpaceWithoutBlankSpaces = newState.boardSpaces[
      newState.currentBoardSpaceIndexBeingUsed
    ].letters.filter((it) => it !== '');
    if (currentSpaceWithoutBlankSpaces.length <= 0) return;

    newState.boardSpaces[newState.currentBoardSpaceIndexBeingUsed].letters[
      currentSpaceWithoutBlankSpaces.length - 1
    ] = '';
    setGameState(newState);
  };

  const submitAttempt = (): void => {
    const newState = { ...gameState };
    if (newState.currentBoardSpaceIndexBeingUsed + 1 > 6) return;
    newState.currentBoardSpaceIndexBeingUsed += 1;
    setGameState(newState);
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        initializeNewGame,
        changeDifficulty,
        addLetter,
        removeLetter,
        submitAttempt,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, useGameProvider };

function getGameInitialState(difficulty: GameDifficulty): GameState {
  return {
    currentWord: '',
    currentDifficulty: difficulty,
    currentBoardSpaceIndexBeingUsed: 0,
    boardSpaces: Array(6)
      .fill(1)
      .map((_) => ({ letters: Array(difficulty).fill('') })),
  };
}
