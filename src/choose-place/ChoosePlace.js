export default function ChoosePlace(){
    return(
        <div class="choose-place ">
        <div class="select">Selecione o(s) assento(s) </div>
        <div class="places">
            <button class="place">01</button>
            <button class="place">02</button>
            <button class="place">03</button>
            <button class="place">04</button>
            <button class="place">05</button>
            <button class="place">06</button>
            <button class="place">07</button>
            <button class="place">08</button>
            <button class="place">09</button>
            <button class="place">10</button>
            <button class="place">01</button>
            <button class="place">02</button>
            <button class="place">03</button>
            <button class="place">04</button>
            <button class="place">05</button>
            <button class="place">06</button>
            <button class="place">07</button>
            <button class="place">08</button>
            <button class="place">09</button>
            <button class="place">10</button>
        </div>
        <div class="types">
            <div>
                <button class="place selecionado"></button>
                <p>Selecionado </p>
            </div>
            <div>
                <button class="place "></button>
                <p>Disponível </p>
            </div>
            <div>
                <button class="place indisponivel"></button>
                <p>Indisponível </p>
            </div>
        </div>
        <div class="infos">
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..."/>
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF..."/>
        </div>
        <div class="box-button">
            <button class="time">
                Reservar assento(s)
            </button>
        </div>

    </div>
    )
}