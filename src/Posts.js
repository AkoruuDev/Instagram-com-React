import React from 'react'

const posts = [
  {
    imagePerfil: "assets/img/meowed.svg",
    name: "meowed",
    post: "assets/img/gato-telefone.svg",
    perfilReacted: "assets/img/respondeai.svg",
    perfilReactedName: "respondeai",
    reactionsNumber: "101.523"
  },
  {
    imagePerfil: "assets/img/barked.svg",
    name: "barked",
    post: "assets/img/dog.svg",
    perfilReacted: "assets/img/adorable_animals.svg",
    perfilReactedName: "adorable_animals",
    reactionsNumber: "99.159"
  }
]

function Post({ imagePerfil, name, post, perfilReacted, perfilReactedName, reactionsNumber }) {
  const [fill, setFill] = React.useState("heart-outline");

  function putFill(element) {
    if (fill === "heart-outline") {
      setFill("heart")
    } else {
      setFill("heart-outline")
    }
  }
  
  return(
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagePerfil} alt="user" />
          {name}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
  
      <div className="conteudo" onClick={putFill}>
        <img src={post} alt="post" />
      </div>
  
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={fill} onClick={() => (putFill(this))}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
  
        <div className="curtidas">
          <img src={perfilReacted} alt="perfilReacted" />
          <div className="texto">
            Curtido por <strong>{perfilReactedName}</strong> e <strong>outras {reactionsNumber} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function Posts() {
  const showPosts = posts.map((post, i) => (
    <Post
      key={i}
      imagePerfil={post.imagePerfil}
      name={post.name}
      post={post.post}
      perfilReacted={post.perfilReacted}
      perfilReactedName={post.perfilReactedName}
      reactionsNumber={post.reactionsNumber}
    />
  ))

  return(
    <div className="posts">
      {showPosts}
    </div>
  )
}

export default Posts;