import './styles.css';
import HeaderChat from '../HeaderChat';
import BodyChat from '../BodyChat';
import InputChat from '../InputChat';

function Chat(){
  return(
    <div className="body-chat">
      <div class="chat">
        <HeaderChat/>
        <BodyChat/>
        <InputChat/>
      </div>
    </div>
  )
};

export default Chat