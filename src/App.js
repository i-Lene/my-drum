import './App.css';
import Keys from './components/Keys';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const keys_array = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];
  const [sameLetter, setSameLetter] = useState('');
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  function handleClick(event) {
    const letter = event.target.innerText;

    switch (letter) {
      case 'q':
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
        setSameLetter(letter)
        audio.play();
        break;
      case 'w':
        let audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
        audio2.play();
        setSameLetter(letter)
        break;
      case 'e':
        let audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
        audio3.play();
        setSameLetter(letter)
        break;
      case 'a':
        let audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
        audio4.play();
        setSameLetter(letter)
        break;
      case 's':
        let audio5 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
        audio5.play();
        break;
      case 'd':
        let audio6 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
        audio6.play();
        break;
      case 'z':
        let audio7 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');
        audio7.play();
        break;
      case 'x':
        let audio8 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
        audio8.play();
        break;
      case 'c':
        let audio9 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');
        audio9.play();
        break;
      default:
        return '';
    };

    setTimeout(() => {
      setSameLetter(false);
    }, 200);
  };

  function handleKeyDown(event) {
    const letter = event.key;

    switch (letter) {
      case 'q':
        let audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
        audio.play();
        setSameLetter(letter);
        break;
      case 'w':
        let audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
        audio2.play();
        setSameLetter(letter);
        break;
      case 'e':
        let audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
        audio3.play();
        setSameLetter(letter);
        break;
      case 'a':
        let audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
        audio4.play();
        setSameLetter(letter);
        break;
      case 's':
        let audio5 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3');
        audio5.play();
        setSameLetter(letter);
        break;
      case 'd':
        let audio6 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
        audio6.play();
        setSameLetter(letter);
        break;
      case 'z':
        let audio7 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3');
        audio7.play();
        setSameLetter(letter);
        break;
      case 'x':
        let audio8 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
        audio8.play();
        setSameLetter(letter);
        break;
      case 'c':
        let audio9 = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3');
        audio9.play();
        setSameLetter(letter);
        break;
      default:
        return '';
    };

    setTimeout(() => {
      setSameLetter(false);
    }, 200);
  };




  const all_keys = keys_array.map(key => {
    return (
      <Keys
        key={key}
        letter={key}
        click={handleClick}
        clickedLetter={sameLetter}
        keyDown={handleKeyDown}
      />
    )
  });

  return (
    <div className="App">
      <h1 className='text'>Let's Make Some Noise!!</h1>
      <div className='drum-wrapper'>
        {all_keys}
      </div>
    </div>
  );
}


export default App;
