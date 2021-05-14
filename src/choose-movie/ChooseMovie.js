import axios from 'axios';
import { useState, useEffect } from 'react';
import Movie from "./Movie"

export default function ChooseMovie(){
    const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies");

		requisicao.then(a => {
			setItems(a.data);
           
		});
	}, []);
    console.log(items)
    return(
        
    <div class="choose-movie ">
        <div class="select">Selecione o filme </div>
        <div class="movie-list">
        {items.map(({ posterURL, title, id }) => (
            <Movie key={id} id={id} posterURL={posterURL} movieName={title}/>
          ))}
        </div>
    </div>
    
    )
}