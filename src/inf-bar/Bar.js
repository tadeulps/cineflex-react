export default function Bar(props){
   const {name,time,url,hour}=props
   console.log(name)
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