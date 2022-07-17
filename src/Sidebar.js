function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.image} />
        <div class="texto">
          <div class="nome">{props.name}</div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  )
}

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

          <Sugestao image="assets/img/bad.vibes.memes.svg" name="bad.vibes.memes" />
          <Sugestao image="assets/img/chibirdart.svg" name="chibirdart" />
          <Sugestao image="assets/img/razoesparaacreditar.svg" name="razoesparaacreditar" />
          <Sugestao image="assets/img/adorable_animals.svg" name="adorable_animals" />
          <Sugestao image="assets/img/smallcutecats.svg" name="smallcutecats" />
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