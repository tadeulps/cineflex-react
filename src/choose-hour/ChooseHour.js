import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Weekday from "./Weekday"

export default function ChooseHour(props){
    const {collect,setCollect}=props
    const {idMovie} = useParams();
    const [movieList, setMovieList] = useState([]);
    let testando=0

	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`);

		requisicao.then(a => {
			setMovieList(a.data.days);
            testando=a.data
            console.log(testando.title)
		});
	}, []);
    

    return(
    <div class="choose-hour ">
        <div class="select">Selecione o horário </div>
        {movieList.map((e)=>{
            return (
                <Weekday weekday={e.weekday} date={e.date} hours={e.showtimes} collect={collect} setCollect={setCollect}/>
            )
        })}
        
    </div>
    )
}