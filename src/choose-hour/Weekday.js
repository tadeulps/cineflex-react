import { Link } from "react-router-dom";
export default function Weekday(props){
    
    const {weekday,date,hours}=props
    
    return(
        <>
        <div class="day"> {weekday} - {date}</div>
        {hours.map((e)=>{
                return (
                    <Link to={`/session/${e.id}`} >
                    <button class="time">{e.name}</button>
                    </Link>
                )
            })} 
        </>
    )
}