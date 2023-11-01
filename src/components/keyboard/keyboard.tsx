import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { Button } from '@mui/material';
import { useGameProvider } from '../../contexts/game-context';
import './keyboard.css';

function Keyboard(): JSX.Element {
  const { addLetter, removeLetter, submitAttempt } = useGameProvider();

  return (
    <div className="keyboard">
      <div className="row">
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
          <Button
            variant="outlined"
            className="btn"
            onClick={(): void => addLetter(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
      <div className="row">
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
          <Button
            variant="outlined"
            className="btn"
            onClick={(): void => addLetter(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
      <div className="d-flex">
        <Button variant="outlined" className="btn" onClick={submitAttempt}>
          enter
        </Button>
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
          <Button
            variant="outlined"
            className="btn"
            onClick={(): void => addLetter(letter)}
          >
            {letter}
          </Button>
        ))}
        <Button
          variant="outlined"
          className="btn backspace-btn"
          onClick={removeLetter}
        >
          <BackspaceOutlinedIcon></BackspaceOutlinedIcon>
        </Button>
      </div>
    </div>
  );
}

export default Keyboard;
