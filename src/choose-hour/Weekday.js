import { Link } from "react-router-dom";
export default function Weekday(props){
    console.log(props.weekday)
    const {weekday,date,hours}=props
    console.log(hours)
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