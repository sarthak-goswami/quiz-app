import { useState } from 'react';
import Questions from './Questions';

function Startbtn() {
  const [started, setStarted] = useState(false);

  const onstart = () => {
    setStarted(true);
  };

  return (
    <div className='justify-center items-center flex flex-col h-screen'>
      {!started && (
        <button id="startbtn" className='btn bg-blue-500 rounded' onClick={onstart}>
          Start Quiz
        </button>
      )}
      {started && <div id="q1"><Questions/></div>}
    </div>
  );
}

export default Startbtn
