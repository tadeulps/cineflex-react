import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Types from "./Types"
import Seat from "./Seat"

export default function ChoosePlace(){
    const {idSession} = useParams();
    console.log(idSession)
    const [place, setPlace] = useState([]);
     

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`);

		requisicao.then(a => {
			setPlace(a.data.seats);
           
		});
	}, []);
    
   
    console.log(place)
    return(<>
        <div class="choose-place ">
        <div class="select">Selecione o(s) assento(s) </div>
        <div class="places">
            {place.map((e)=>{
                 return (
                 <Seat name={e.name} isAvailable={e.isAvailable}/>
                 )
            })}
           
        </div>
        <Types/>
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
    </>
    )
   
}