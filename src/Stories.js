function Storie(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.image} />
      </div>
      <div class="usuario">
        {props.user}
      </div>
    </div>
  )
}

function Stories() {
    return(
      <div class="stories">
        <Storie image="assets/img/9gag.svg" user='9gag' />
        <Storie image="assets/img/meowed.svg" user='meowed' />
        <Storie image="assets/img/barked.svg" user='barked' />
        <Storie image="assets/img/nathanwpylestrangeplanet.svg" user='nathanwpylestrangeplanet' />
        <Storie image="assets/img/wawawicomics.svg" user='wawawicomics' />
        <Storie image="assets/img/respondeai.svg" user='respondeai' />
        <Storie image="assets/img/filomoderna.svg" user='filomoderna' />
        <Storie image="assets/img/memeriagourmet.svg" user='memeriagourmet' />

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>       
    )
}

export default Stories;