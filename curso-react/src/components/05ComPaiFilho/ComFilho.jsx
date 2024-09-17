const ComFilho = ({mensagem, enviarMensagemPai}) => {
    return (
        <div>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button onClick={ () => enviarMensagemPai("Oi pai, tudo bom?")}>
                enviar mensagem para o pai!
            </button>
        </div>
    )
}

export default ComFilho