function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagePerfil} />
          {props.name}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.post} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.perfilReacted} />
          <div class="texto">
            Curtido por <strong>{props.perfilReactedName}</strong> e <strong>outras {props.reactionsNumber} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}


function Posts() {
    return(
      <div class="posts">
        <Post
          imagePerfil="assets/img/meowed.svg"
          name="meowed"
          post="assets/img/gato-telefone.svg"
          perfilReacted="assets/img/respondeai.svg"
          perfilReactedName="respondeai"
          reactionsNumber="101.523"
        />

        <Post
          imagePerfil="assets/img/barked.svg"
          name="barked"
          post="assets/img/dog.svg"
          perfilReacted="assets/img/adorable_animals.svg"
          perfilReactedName="adorable_animals"
          reactionsNumber="99.159"
        />
      </div>
  )
}

export default Posts;