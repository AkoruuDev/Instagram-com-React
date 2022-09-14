export default function UserEdit({setNick, nick, setMyuser, myuser, setShowEdit}) {
    let username = "";
    let nickname = "";
    return (
        <div className="user-edit-box">
            <h1 className="edit-title-box">Editar perfil</h1>
            <h3 className="edit-title">Novo nome</h3>
            <input type={'text'} placeholder="Nome" className="edit-input" onChange={e => (username = e.target.value)} />
            <h3 className="edit-title">Novo Nickname</h3>
            <input type={'text'} placeholder="@nickname" className="edit-input" onChange={e => (nickname = e.target.value)} />
            <div className="buttons">
                <div className="button" onClick={() => {
                    setShowEdit(false);
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