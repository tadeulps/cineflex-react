
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
            add()
        }else{
            setClasse("place")
    }
     }
    function errorAlert(){
        alert("Esse assento não está disponível")
    }
    function add(){
        const newArray = [];
        newArray.push(selectedSeats)
        setSelectedSeats([id])
    }
}