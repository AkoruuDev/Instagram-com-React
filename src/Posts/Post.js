import React from 'react'

export default function Post({ imagePerfil, name, post, perfilReacted, perfilReactedName, reactionsNumber }) {
    const [fill, setFill] = React.useState("heart-outline");

    function putFill() {
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
                <span className={fill}><ion-icon name={fill} onClick={() => (putFill())}></ion-icon></span>
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