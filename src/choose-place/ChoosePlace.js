import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Types from "./Types"
import Seat from "./Seat"
import Buyer from "./Buyer"
import Reservation from "./Reservation"

export default function ChoosePlace(){
    const {idSession} = useParams();
    const [selectedSeats,setSelectedSeats]=useState([]);
    const [place, setPlace] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    console.log(selectedSeats)

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`);

		requisicao.then(a => {
			setPlace(a.data.seats);
           
		});
	}, []);
    
   
  
    return(<>
        <div class="choose-place ">
        <div class="select">Selecione o(s) assento(s) </div>
        <div class="places">
            {place.map((e)=>{
                 return (
                 <Seat name={e.name} isAvailable={e.isAvailable} id={e.id}selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>
                 )
            })}
           
        </div>
        <Types/>
        <Buyer nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} />
        <Reservation nome={nome} cpf={cpf} selectedSeats={selectedSeats}/>

    </div>
    </>
    )
   
}