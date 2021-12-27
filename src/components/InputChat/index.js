import './styles.css';
import more from '../../assets/img/more.svg';
import clips from '../../assets/img/clips.svg';
import emoji from '../../assets/img/emoji.svg';
import enviar from '../../assets/img/up_arrow2.svg';

function InputChat() {
  return(
    <div className="areaInput">
      <span/>
      <form action="#" method="get">
        <textarea name="envio" id="texto" placeholder="Digite sua mensagem"></textarea>
        <img className="btnEnvia" src={enviar} alt="btn enviar"/>
      </form>
      <div className="more-icons">
        <img src={more} alt="btn more"/>
        <img src={clips} alt="btn anexos"/>
        <img src={emoji} alt="btn emoji"/>
      </div>
    </div>
  )
};

export default InputChat