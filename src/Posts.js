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

function Posts() {
  const [fill, setFill] = React.useState("heart-outline");
  const refer = React.useRef()

  function putFill(element) {
    if (fill === "heart-outline") {
      setFill("heart")
    } else {
      setFill("heart-outline")
    }
  }

  const showPosts = posts.map(post => (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={post.imagePerfil} />
          {post.name}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
  
      <div className="conteudo" onClick={putFill}>
        <img src={post.post} />
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
          <img src={post.perfilReacted} />
          <div className="texto">
            Curtido por <strong>{post.perfilReactedName}</strong> e <strong>outras {post.reactionsNumber} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  ))

  return(
    <div className="posts">
      {showPosts}
    </div>
  )
}

export default Posts;