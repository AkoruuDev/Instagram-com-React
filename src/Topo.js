function IonIcon(props) {
    return (
        <ion-icon name={props.name} />
    )
}

function Topo() {
    return(
        <div class="navbar">
        <div class="container">
          <div class="logo">
            <IonIcon name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <IonIcon name="logo-instagram" />
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            <IonIcon name="paper-plane-outline" />
            <IonIcon name="compass-outline" />
            <IonIcon name="heart-outline" />
            <IonIcon name="person-outline" />
          </div>

          <div class="icones-mobile">
            <IonIcon name="paper-plane-outline" />
          </div>
        </div>
      </div>
    )
}

export default Topo;