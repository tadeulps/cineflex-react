
import { useState } from 'react';
export default function Seat(props){
    
    const {name,isAvailable,id,selectedSeats,setSelectedSeats}=props;
    const [classe, setClasse] = useState('place'); 
    const ids=[]
   
   
        if(isAvailable){
            return(
                <button class={classe} onClick={selected}>{name}</button>
        )}else{
            return(
                <button class="place indisponivel" onClick={errorAlert}>{name}</button>
            )
        }
    function selected(){
         if(classe==="place"){
            setClasse('place selecionado')
            setSelectedSeats([...selectedSeats,id])
        }else{
            setClasse("place")
            setSelectedSeats(selectedSeats.filter((e)=>e!==id))
    }
     }
    function errorAlert(){
        alert("Esse assento não está disponível")
    }
   
}