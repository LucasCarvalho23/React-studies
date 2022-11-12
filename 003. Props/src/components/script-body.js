import React from 'react';
import Date from './Date';

export default function Corpo() {

    const canalVar = "Nerdzagem" 
    const youtubeVar = "@canalnerdzagem" 
    const jogoVar = "Assassin's Creed Origins"

    return (

        <section>

            <h2>Canal com conteúdo de jogos</h2>
            <p>Jogos de PS4</p>
            <p>Jogos de outras plataformas</p>

            <Date 
                canal = {canalVar}
                youtube = {youtubeVar}
                jogo = {jogoVar}
            />

        </section>

    )

}