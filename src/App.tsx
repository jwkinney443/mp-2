import { useState, useEffect } from "react";
import BluePrint from "./components/BluePrint.tsx";
import { Character } from "./interfaces/Character.ts";
import styled from "styled-components";

const ParentDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 90vw;
    gap: 15px;
    padding: 20px;
    margin: auto;
    border: 15px #373f4e solid;
    border-radius: 50px;
    background-color: #c08dcd;
    box-sizing: border-box;
`;

function App() {
    const [data, setData] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch(
                "https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json"
            );

            // Take raw data as json, each object represents character + each key is character's specific id which links to object
            const {data}: { data: Character[] } = await rawData.json();

            // Return array version of just character objects
            setData(Object.values(data));
        }

        fetchData()
            .then(() => console.log("Data fetched successfully!"))
            .catch((e) => console.log("An error occurred: " + e));
    }, [data.length]);

    return (
        <ParentDiv>
            {data.map((character) => (
                <BluePrint key={character.id} data={character} />
            ))}
        </ParentDiv>

    );
}

export default App;
