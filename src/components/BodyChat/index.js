import moment from 'moment';
import './styles.css';
import perfil from '../../assets/img/gatinhoPerfil.jpg';

const data = moment("02:00 PM", "h:mm A").format("HH:mm");

function BodyChat() {
  return(
    <div class="body">
      <div class="msg">
        <img src={perfil} alt="foto de perfil" />
        <div className="texto">
          <p>
            Ei! Você sabia que com o JivoChat no seu site sua conversão aumenta MUITO? Pra saber mais, é só falar comigo aqui! 😉
          </p>
          <span>
            {data}
          </span>
        </div>
      </div>
    </div>
  )
};

export default BodyChat