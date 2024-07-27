import ComFilho from "./ComFilho"

const ComPai = () => {

    function receberMensagemFilho(mensagem){
        alert("Recebi do meu filho: " + mensagem)
    }

    return (
        <div>
            <ComFilho mensagem="Oi filho" enviarMensagemPai={receberMensagemFilho}/>
        </div>
    )
}

export default ComPai