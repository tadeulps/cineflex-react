import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Types from "./Types"
import Seat from "./Seat"
import Buyer from "./Buyer"
import Reservation from "./Reservation"
import Bar from "../inf-bar/Bar"
export default function ChoosePlace(props){
    const {collect,setCollect,otherInfos,setOtherInfos}=props
    const {idSession} = useParams();
    const [selectedSeats,setSelectedSeats]=useState([]);
    const [place, setPlace] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`);

		requisicao.then(a => {
			setPlace(a.data.seats);
            setCollect(a.data)
            
		});
	}, []);
    console.log(collect)
   
  
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
        <Reservation nome={nome} cpf={cpf} selectedSeats={selectedSeats} setCollect={setCollect} otherInfos={otherInfos} setOtherInfos={setOtherInfos}/>

    </div>
    {collect!=undefined
    ?<Bar  name={collect.movie.title} url={collect.movie.posterURL} time={collect.day.weekday} hour={collect.name}/>
    :'aa'
    }
    </>
    )
   
}
/* name={collect.movie.title}
url={collect.movie.posterUrl}
time={collect.day.weekday}
hour={collect.name}*/