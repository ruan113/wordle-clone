import { Button } from '@mui/material';
import { useGameProvider } from '../contexts/word-context';
import './keyboard.css';

function Keyboard(): JSX.Element {
  const { changeDifficulty } = useGameProvider();

  return (
    <div className="keyboard">
      <div className="row">
        <Button variant="outlined" className="btn">
          q
        </Button>
        <Button variant="outlined" className="btn">
          w
        </Button>
        <Button variant="outlined" className="btn">
          e
        </Button>
        <Button variant="outlined" className="btn">
          r
        </Button>
        <Button variant="outlined" className="btn">
          t
        </Button>
        <Button variant="outlined" className="btn">
          y
        </Button>
        <Button variant="outlined" className="btn">
          u
        </Button>
        <Button variant="outlined" className="btn">
          i
        </Button>
        <Button variant="outlined" className="btn">
          o
        </Button>
        <Button variant="outlined" className="btn">
          p
        </Button>
      </div>
      <div className="row">
        <Button variant="outlined" className="btn">
          a
        </Button>
        <Button variant="outlined" className="btn">
          s
        </Button>
        <Button variant="outlined" className="btn">
          d
        </Button>
        <Button variant="outlined" className="btn">
          f
        </Button>
        <Button variant="outlined" className="btn">
          g
        </Button>
        <Button variant="outlined" className="btn">
          h
        </Button>
        <Button variant="outlined" className="btn">
          j
        </Button>
        <Button variant="outlined" className="btn">
          k
        </Button>
        <Button variant="outlined" className="btn">
          l
        </Button>
      </div>
      <div className="row">
        <Button variant="outlined" className="btn">
          z
        </Button>
        <Button variant="outlined" className="btn">
          x
        </Button>
        <Button variant="outlined" className="btn">
          c
        </Button>
        <Button variant="outlined" className="btn">
          v
        </Button>
        <Button variant="outlined" className="btn">
          b
        </Button>
        <Button variant="outlined" className="btn">
          n
        </Button>
        <Button variant="outlined" className="btn">
          m
        </Button>
      </div>
    </div>
  );
}

export default Keyboard;
