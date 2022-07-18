function IonIcon(props) {
    return (
        <ion-icon name={props.name} />
    )
}

function Topo() {
    return(
        <div className="navbar">
        <div className="container">
          <div className="logo">
            <IonIcon name="logo-instagram" />
            <div className="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div className="logo-mobile">
            <IonIcon name="logo-instagram" />
          </div>

          <div className="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
            <IonIcon name="paper-plane-outline" />
            <IonIcon name="compass-outline" />
            <IonIcon name="heart-outline" />
            <IonIcon name="person-outline" />
          </div>

          <div className="icones-mobile">
            <IonIcon name="paper-plane-outline" />
          </div>
        </div>
      </div>
    )
}

export default Topo;