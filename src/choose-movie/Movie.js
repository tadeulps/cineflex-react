import { Link } from "react-router-dom";

export default function Movie(props){
    const {id,posterURL, movieName}=props
     
    return(
        <Link to={`/movie/${id}`} >
        <img src={posterURL}
                alt={movieName}/>
        </Link>

    )
}