export default function Bar(props){
   const {name,time,url,hour}=props
   
    return(
    <div class="inf-bar hidden ">
        <img src={url}
            alt=""/>
        <div class="infos ">
            <p>{name}</p>
            <p>{time? `${time}   -  ${hour}` : ''}</p>
        </div>
    </div>
    )
}