const sugestoes = [
  {image: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes"},
  {image: "assets/img/chibirdart.svg", name: "chibirdart"},
  {image: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar"},
  {image: "assets/img/adorable_animals.svg", name: "adorable_animals"},
  {image: "assets/img/smallcutecats.svg", name: "smallcutecats"}
]

function User(props) {
  return (
    <div class="usuario">
      <img src={props.image} />
      <div class="texto">
        <strong>{props.nick}</strong>
        {props.name}
      </div>
    </div>
  )
}

function Sidebar() {
    return(
      <div class="sidebar">
        <User image="assets/img/catanacomics.svg" nick="catanacomics" name="Catana"/>

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {sugestoes.map(sugestao => (
            <div class="sugestao">
              <div class="usuario">
                <img src={sugestao.image} />
                <div class="texto">
                  <div class="nome">{sugestao.name}</div>
                  <div class="razao">Segue você</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
          ))}
        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}

export default Sidebar;