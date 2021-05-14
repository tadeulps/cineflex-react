import { useState } from 'react';
export default function Buyer(props){
   const{nome,setNome,cpf,setCpf}=props
    return(
        <div class="infos">
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)}/>
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)}/>
        </div>
    )
}