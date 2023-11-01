import './App.css';
import DifficultySelector from './components/difficulty-selector';
import GameBoard from './components/game-board';
import Keyboard from './components/keyboard';
import { GameProvider } from './contexts/word-context';

function App(): JSX.Element {
  return (
    <GameProvider>
      <div className="container">
        <DifficultySelector></DifficultySelector>
        <GameBoard></GameBoard>
        <Keyboard></Keyboard>
      </div>
    </GameProvider>
  );
}

export default App;
