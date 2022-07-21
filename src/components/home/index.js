import React, {useState} from "react";
import { FiSearch } from "react-icons/fi";
import api from "../../services/api";
import { Container } from "./styled";

export const Home = () => {
    const logoImg = "https://www.gstatic.com/images/branding/product/2x/maps_64dp.png";
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
    alert("Esse Cep não é valido :( ");
    setInput("")
   }
}

  return (
    <Container>
      <img alt="map" src={logoImg} className="navbar-img" />

      <h1>Buscador de endereço</h1>

      <div className="containerInput">
        <input
        type="text" 
        placeholder="Digite o cep..." 
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        />
        
        <button onClick={handleSearch}> 
          <FiSearch size={20} color="#fff" />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="main" >
        <h2>Informações encontradas</h2>
        <span>{cep.cep}</span>
        <span>Rua: {cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>Bairro: {cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
        </div>
      )}
    </Container>
  );
};
