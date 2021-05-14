
import { useState } from 'react';
export default function Seat(props){
    
    const {name,isAvailable}=props;
    const [classe, setClasse] = useState('place'); 
    console.log(isAvailable)
   
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
    }else{
        setClasse("place")
    }
     }
    function errorAlert(){
        alert("Esse assento não está disponível")
    }
}