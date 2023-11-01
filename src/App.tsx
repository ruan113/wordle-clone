import './App.css';
import DifficultySelector from './components/difficulty-selector/difficulty-selector';
import GameBoard from './components/game-board/game-board';
import Keyboard from './components/keyboard/keyboard';
import { GameProvider } from './contexts/game-context';

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
