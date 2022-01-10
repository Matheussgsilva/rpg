import { useEffect } from 'react';

import * as C from './App.styles';

import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
      <C.ButtonArea>
        <img src='/assets/left.png' alt='' onClick={() => char.moveLeft()} />
        <img src='/assets/up.png' alt='' onClick={() => char.moveUp()} />
        <img src='/assets/down.png' alt='' onClick={() => char.moveDown()} />
        <img src='/assets/right.png' alt='' onClick={() => char.moveRight()} />
      </C.ButtonArea>
    </C.Container>
  );
}

export default App;
