import React, { useState, useEffect } from 'react';
import './KeyboardPiano.css';
import A from "./Piano Sounds/203458__tesabob2001__a3.mp3";
import B from "./Piano Sounds/203459__tesabob2001__a5.mp3";
import C from "./Piano Sounds/203462__tesabob2001__b4.mp3";
import D from "./Piano Sounds/203463__tesabob2001__b3.mp3";
import E from "./Piano Sounds/203464__tesabob2001__a5.mp3";
import F from "./Piano Sounds/203465__tesabob2001__a4.mp3";
import G from "./Piano Sounds/203466__tesabob2001__c3.mp3";
import H from "./Piano Sounds/203467__tesabob2001__b5.mp3";
import I from "./Piano Sounds/203468__tesabob2001__f3.mp3";
import J from "./Piano Sounds/203470__tesabob2001__e3.mp3";
import K from "./Piano Sounds/203471__tesabob2001__e4.mp3";
import L from "./Piano Sounds/203472__tesabob2001__d4.mp3";
import M from "./Piano Sounds/203473__tesabob2001__d5.mp3";
import N from "./Piano Sounds/203476__tesabob2001__e5.mp3";
import O from "./Piano Sounds/203479__tesabob2001__c3.mp3";
import P from "./Piano Sounds/203480__tesabob2001__c5.mp3";
import Q from "./Piano Sounds/203481__tesabob2001__c4.mp3";
import R from "./Piano Sounds/203482__tesabob2001__d4.mp3";
import S from "./Piano Sounds/203483__tesabob2001__d3.mp3";
import T from "./Piano Sounds/203484__tesabob2001__c6.mp3";
import U from "./Piano Sounds/203485__tesabob2001__c5.mp3";
import V from "./Piano Sounds/203490__tesabob2001__g5.mp3";
import W from "./Piano Sounds/203491__tesabob2001__g4.mp3";
import X from "./Piano Sounds/203493__tesabob2001__g3.mp3";
import Y from "./Piano Sounds/203471__tesabob2001__e4.mp3";
import Z from "./Piano Sounds/203464__tesabob2001__a5.mp3";
import US from "./Piano Sounds/UltraSound.mp3";

const KeyboardPiano = () => {
  const [pressedKey, setPressedKey] = useState(null);
  const [isFirst, setIsFirst] = useState(true);
  console.log(pressedKey, "Key");

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key.toUpperCase();
      setPressedKey(keyPressed);
      playSound(keyPressed);
      setIsFirst(false);
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const playSound = (key) => {
    setIsFirst(false);
    const soundFiles = {
      A: A,
      B: B,
      C: C,
      D: D,
      E: E,
      F: F,
      G: G,
      H: H,
      I: I,
      J: J,
      K: K,
      L: L,
      M: M,
      N: N,
      O: O,
      P: P,
      Q: Q,
      R: R,
      S: S,
      T: T,
      U: U,
      V: V,
      W: W,
      X: X,
      Y: Y,
      Z: Z,
      US: US,
    };

    if (/[A-Za-z]/.test(key)) {
      const audio = new Audio(soundFiles[key]);
      audio.play();
    } else if (/[0-9]/.test(key)) {
      const audio = new Audio(soundFiles['US']);
      audio.play();
    }

  };

  return (
    <>
      <div className="keyboard-piano color-changing-background" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
        <div className='header flex flex-col justify-center items-center' style={{ position: 'sticky', top: 0 }}>
          <h1 className='font-bold text-center uppercase light-effect' style={{ letterSpacing: "20px" }}>Simple Piano Application</h1>
          <p className='text-center'>"Note: Only Press A-Z. Never Press Numbers."</p>
        </div>
        <div>
          <input
            type="text"
            className="piano-input w-full"
            value={pressedKey || ''}
            placeholder={isFirst ? 'Press Any Keys' : ''}
            readOnly
          />
          <div className="keyboard">
            {Array.from(Array(26), (_, index) => {
              const letter = String.fromCharCode(65 + index);
              return (
                <div
                  key={letter}
                  className="piano-key"
                  onClick={() => {
                    setPressedKey(letter);
                    playSound(letter);
                  }}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        </div>
        <div className='footer' style={{ position: 'sticky', bottom: 0 }}>
          <h1 className='font-bold text-center uppercase light-effect' style={{ letterSpacing: "20px" }}>Developed With &#x1F90D; By <a href="https://devaakashportfolio.w3spaces.com/" target="_blank">Aakash</a></h1>
        </div>
      </div>
    </>
  );
};

export default KeyboardPiano;
