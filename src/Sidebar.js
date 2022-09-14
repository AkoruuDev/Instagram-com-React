import { useState } from "react"
import UserEdit from "./services/user-edit";

const sugestoes = [
  {image: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes"},
  {image: "assets/img/chibirdart.svg", name: "chibirdart"},
  {image: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar"},
  {image: "assets/img/adorable_animals.svg", name: "adorable_animals"},
  {image: "assets/img/smallcutecats.svg", name: "smallcutecats"}
]

function User(props) {
  let [nick, setNick] = useState('catanacomics');
  let [myuser, setMyuser] = useState('Catana');
  let [showEdit, setShowEdit] = useState(false); //Olha aqui moço ------

  return (
    <div className='user-box'>
      <div className="usuario">
        <img src={props.image} alt="user" />
        <div className="texto">
          <strong>{nick}</strong>
          {myuser}
        </div>
      </div>
      <div onClick={() => setShowEdit(true)}>
        <ion-icon name="pencil-sharp"></ion-icon>
      </div>
      {showEdit ? <UserEdit
        setNick={setNick}
        nick={nick}
        setMyuser={setMyuser}
        myuser={myuser}
        setShowEdit={setShowEdit}
      /> : ""}
    </div>
  )
}

function Sugestao({ image, name}) {
  const [follow, setFollow] = useState("Seguir");

  function toFollow() {
    if (follow === "Seguir") {
      setFollow("Seguindo");
    } else {
      setFollow("Seguir")
    }
  }

  return(
    <div className="sugestao">
      <div className="usuario">
        <img src={image} alt="user" />
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className={follow} onClick={toFollow}>{follow}</div>
    </div>
  )
}

function Sidebar() {
    return(
      <div className="sidebar">
        <User image="assets/img/catanacomics.svg"/>

        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map((sugestao, i) => (
            <Sugestao key={i} image={sugestao.image} name={sugestao.name} />
          ))}
        </div>

        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}

export default Sidebar;