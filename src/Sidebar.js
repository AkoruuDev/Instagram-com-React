const sugestoes = [
  {image: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes"},
  {image: "assets/img/chibirdart.svg", name: "chibirdart"},
  {image: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar"},
  {image: "assets/img/adorable_animals.svg", name: "adorable_animals"},
  {image: "assets/img/smallcutecats.svg", name: "smallcutecats"}
]

function User(props) {
  return (
    <div className="usuario">
      <img src={props.image} alt="user" />
      <div className="texto">
        <strong>{props.nick}</strong>
        {props.name}
      </div>
    </div>
  )
}

function Sugestao({ image, name}) {
  return(
    <div className="sugestao">
      <div className="usuario">
        <img src={image} alt="user" />
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  )
}

function Sidebar() {
    return(
      <div className="sidebar">
        <User image="assets/img/catanacomics.svg" nick="catanacomics" name="Catana"/>

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