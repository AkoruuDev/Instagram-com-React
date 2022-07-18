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
      <div className="stories">
        {storiesList.map((storie) => (
          <div className="story">
            <div className="imagem">
              <img src={storie.image} />
            </div>
            <div className="usuario">
              {storie.user}
            </div>
          </div>
        ))}

        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>       
    )
}

export default Stories;