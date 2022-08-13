const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

function Base() {
    return (
        <div className="fundo-mobile">
            {icons.map((icon, i) => <ion-icon key={i} name={icon}></ion-icon>)}
        </div>
    )
}

export default Base;