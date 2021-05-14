export default function Movie(props){
    const {id,posterURL, movieName}=props
    return(
        <img src={posterURL}
                alt={movieName}/>
    )
}