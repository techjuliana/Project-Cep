import React, {useState} from "react";
import { FiSearch } from "react-icons/fi";
import api from "../../services/api";
import { Container } from "./styled";

export const Home = () => {
    const logoImg =
  "https://developers.google.com/maps/images/docs-landing-get-started-hero_480.png?hl=pt-br";
    const [input, setInput]=useState('');
    const [cep, setCep]=useState({});


    async function handleSearch(){

if(input===''){
    alert("Campo vazio! Preencha com um CEP ;) ")
    return;
}

try{
    const response = await api.get(`${input}/json`);
    setCep(response.data)
    setInput("");
}catch{
    alert("Esse Cep não é ");
    setInput("")
}

  return (
    <Container>
      <img alt="map" src={logoImg} className="navbar-img" />

      <h1>Buscador de endereço</h1>

      <div className="containerInput">
        <input
        type="text" 
        placeholder="Digite o Cep..." 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        
        <button> 
          <FiSearch size={20} color="#fff" />
        </button>
      </div>

      <div className="main" >
        <h2>Resultado da busca, pelo CEP:</h2>
        <span>Rua:</span>
        <span>Complemento:</span>
        <span>Bairro:</span>
        <span>Cidade:</span>
        </div>

    </Container>
  );
};
