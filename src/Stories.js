const storiesList = [
  {image: "assets/img/9gag.svg", user:"9gag"},
  {image: "assets/img/meowed.svg", user:"meowed"},
  {image: "assets/img/barked.svg", user:"barked"},
  {image: "assets/img/nathanwpylestrangeplanet.svg", user:"nathanwpylestrangeplanet"},
  {image: "assets/img/wawawicomics.svg", user:"wawawicomics"},
  {image: "assets/img/respondeai.svg", user:"respondeai"},
  {image: "assets/img/filomoderna.svg", user:"filomoderna"},
  {image: "assets/img/memeriagourmet.svg", user:"memeriagourmet"}
];

function Stories() {
    return(
      <div class="stories">
        {storiesList.map((storie) => (
          <div class="story">
            <div class="imagem">
              <img src={storie.image} />
            </div>
            <div class="usuario">
              {storie.user}
            </div>
          </div>
        ))}

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>       
    )
}

export default Stories;