export default function UserEdit({setNick, nick, setMyuser, myuser, setShowEdit}) {
    return (
        <div className="user-edit-box">
            <h1 className="edit-title-box">Editar perfil</h1>
            <h3 className="edit-title">Novo nome</h3>
            <input type={'text'} placeholder="Nome" className="edit-input" />
            <h3 className="edit-title">Novo Nickname</h3>
            <input type={'text'} placeholder="@nickname" className="edit-input" />
            <div className="button" onClick={() => {
                setShowEdit(false);
            }}>Salvar</div>
        </div>
    )
}