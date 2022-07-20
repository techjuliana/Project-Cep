import React from 'react'
import { Container } from './styled'
const logoImg =
    "https://developers.google.com/maps/images/docs-landing-get-started-hero_480.png?hl=pt-br";
export const Home = () => {
   

 return (
    <Container>
        <img alt='map' src={logoImg} className="navbar-img" />
        <h1>Buscador de endereço</h1>
</Container>
  )
}
