import './styles.css';
import perfil from '../../assets/img/gatinhoPerfil.jpg'
import tell from '../../assets/img/telephone_icon.svg'

function HeaderChat() {
  return (
    <div class="pai">
      <img src={perfil} alt="gatinhoPerfil" />
      <div class="title">
        <p>Converse com a nossa equipe!</p>
        <span>Online</span>
      </div>
      <img class="tell" src={tell} alt="Liga pah nóis" />
    </div>
  )
}

export default HeaderChat