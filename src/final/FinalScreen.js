export default function FinalScreen(props){
    const {collect,otherInfos}=props
    console.log(otherInfos.ids)
    let seats=otherInfos.ids
    return(
        <div class="final-screen ">
        <div class="select">
            Pedido feito <br/> com sucesso!
        </div>
        <div class="title">Filme e sessão</div>
        <div class="sub">{collect.movie.title} <br/>{collect.day.date} {collect.name}</div>
        <div class="title">Ingressos</div>
        <>
        {seats.map((e)=>{
            return(
                <div class="sub">Assento {e}</div>
            )
        })}
        </>
        <div class="title">Comprador</div>
        <div class="sub">Nome: {otherInfos.name} <br/>CPF: {otherInfos.cpf}</div>
        <div class="box-button">
            
            <button class="time">
                Voltar pra Home
            </button>
        </div>
    </div>
    )
}