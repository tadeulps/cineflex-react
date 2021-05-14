import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from "./Movie"
import Bar from "../inf-bar/Bar"

export default function ChooseMovie(){
    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		requisicao.then(a => {
			setItems(a.data);
           
		});
	}, []);
   
    return(
        <>
    <div class="choose-movie ">
        <div class="select">Selecione o filme </div>
        <div class="movie-list">
        {items.map(({ posterURL, title, id }) => (
            <Movie key={id} id={id} posterURL={posterURL} movieName={title}/>
          ))}
        </div>
    </div>
   
    </>
    )
}
