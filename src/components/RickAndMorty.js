import { useState, useEffect } from "react";
import { RaMUnit } from "./RaMUnit";

const RickAndMorty = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let charactersData = [];

            for (let i = 1; i < 7; i++) {
                const response = await fetch(`https://rickandmortyapi.com/api/character/${i}`);
                const data = await response.json();
                charactersData.push(data);
            }
            setCharacters(charactersData)
        };
        fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <div id="RickAndMorty">
            <h2>Rick and Morty</h2>
            <div id='RickAndMortyContainer'>
            {characters.map(character => (
                <RaMUnit unit={character} key={character.id} />
            ))}
            </div>
        </div>
    );
};

export { RickAndMorty };
