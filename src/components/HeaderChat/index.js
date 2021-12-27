import './styles.css';
import perfil from '../../assets/img/gatinhoPerfil.jpg'
import tell from '../../assets/img/telephone_icon.svg'

function HeaderChat() {
  return (
    <div className="pai">
      <img src={perfil} alt="gatinhoPerfil" />
      <div className="title">
        <p>Converse com a nossa equipe!</p>
        <span>Online</span>
      </div>
      <img className="tell" src={tell} alt="Liga pah nóis" />
    </div>
  )
}

export default HeaderChat