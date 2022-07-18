const icons = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

function Base() {
    return (
        <div class="fundo-mobile">
            {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
        </div>
    )
}

export default Base;