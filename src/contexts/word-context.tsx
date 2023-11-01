import { ReactNode, createContext, useContext, useState } from 'react';
import { ALL_WORDS } from '../words';

export type GameDifficulty = 4 | 5 | 6 | 7;

type RoundState = {
  letters: RoundLetterState[];
};

type RoundLetterState = {
  value: string;
  state: 'Wrong' | 'CorrectButInTheWrongPlace' | 'Correct';
};

type GameState = {
  currentWord: string;
  lastRounds: RoundState[];
  currentDifficulty: GameDifficulty;
  loading: boolean;
};

interface GameProviderProps {
  children: ReactNode;
}

interface GameContextData {
  gameState: GameState;
  initializeNewGame: () => Promise<void>;
  changeDifficulty: (newDifficulty: GameDifficulty) => Promise<void>;
}

const GameContext = createContext<GameContextData>({} as GameContextData);

const useGameProvider = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within an GameProvider');
  }
  return context;
};

const GameProvider = ({ children }: GameProviderProps): JSX.Element => {
  const [gameState, setGameState] = useState<GameState>({
    currentWord: '',
    currentDifficulty: 5,
    loading: true,
    lastRounds: [],
  });

  const initializeNewGame = async (): Promise<void> => {
    const newState = { ...gameState };
    const filteredWords = ALL_WORDS.filter(
      (word) => word.length === newState.currentDifficulty,
    );
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    newState.currentWord = filteredWords[randomIndex];
    setGameState(newState);
  };

  const changeDifficulty = async (
    newDifficulty: GameDifficulty,
  ): Promise<void> => {
    setGameState({ ...gameState, currentDifficulty: newDifficulty });
    initializeNewGame();
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        initializeNewGame,
        changeDifficulty,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameProvider, useGameProvider };
