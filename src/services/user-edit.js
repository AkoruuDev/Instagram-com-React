export default function UserEdit({setNick, setMyuser, setImage, setShowEdit}) {
    let username = "";
    let nickname = "";
    let image = "";
    return (
        <div className="user-edit-box">
            <h1 className="edit-title-box">Editar perfil</h1>
            <h3 className="edit-title">Nova foto de perfil</h3>
            <input type={'text'} placeholder="https://your-image-here.png" className="edit-input" onChange={e => (image = e.target.value)} />
            <h3 className="edit-title">Novo nome</h3>
            <input type={'text'} placeholder="Nome" className="edit-input" onChange={e => (username = e.target.value)} />
            <h3 className="edit-title">Novo Nickname</h3>
            <input type={'text'} placeholder="@nickname" className="edit-input" onChange={e => (nickname = e.target.value)} />
            <div className="buttons">
                <div className="button" onClick={() => {
                    setShowEdit(false);
                    if (image !== "") {
                        setImage(image);
                    }
                    if (username !== "") {
                        setMyuser(username);
                    }
                    if (nickname !== "") {
                        setNick(nickname);
                    }
                }}>Salvar</div>
                <div className="button" onClick={() => setShowEdit(false)}>Cancelar</div>
            </div>
        </div>
    )
}