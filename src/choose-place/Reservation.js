import axios from 'axios';
import { Link } from "react-router-dom";
export default function Reservation(props){
    const {nome,cpf,selectedSeats}=props
    return(
        <div class="box-button">
             <Link to={`/end`} >
            <button class="time" onClick={post}>
                Reservar assento(s)
            </button>
            </Link>
        </div>
    )
    function post(){
        const final={
            ids:selectedSeats,
            name:nome,
            cpf:cpf
        }
        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', final);
        requisicao.then(()=>(alert('worked')))
    }
   
}