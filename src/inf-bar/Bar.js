export default function Bar(props){
   const {name}=props
   console.log(name)
    return(
    <div class="inf-bar hidden ">
        <img src="/images/2067-filme-ficcao-cientifica-humanidade-em-busca-de-oxigenio-utilizando-viagem-no-tempo.jpg"
            alt=""/>
        <div class="infos ">
            <p>{name}</p>
            <p>aaaaa</p>
        </div>
    </div>
    )
}