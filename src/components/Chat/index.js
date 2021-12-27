import React, { useState } from 'react';

import './styles.css';
import HeaderChat from '../HeaderChat';
import BodyChat from '../BodyChat';
import InputChat from '../InputChat';

function Chat(){

  const [ displayCss, setDisplayCss ] = useState('none');

  const [ textButton, setTextButton] = useState('🡅')

  function changeDisplay() {
    // let layoutA = document.getElementsByClassName('dialog-chat');
    
    if (displayCss === 'block') {
      setDisplayCss( 'none' )
      setTextButton('🡅')
    } else {
      setDisplayCss( 'block' )
      setTextButton('X')
    }

    return;
  }

  return(
    <span id="display-chat">
      <div className="body-chatdom">
        <div className="chat">
          <button
            className='chat-button'
            onClick={ changeDisplay }
          >
            {textButton}
          </button>
          <HeaderChat/>
          <div className='dialog-chat' style={{display: displayCss}}>
            <BodyChat/>
            <InputChat/>
          </div>
        </div>
      </div>
    </span>
  )
};

export default Chat