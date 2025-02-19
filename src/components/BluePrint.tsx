
import styled from "styled-components";
import { Character } from "../interfaces/Character";

const AllCharsDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const CharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 26%;
    padding: 2%;
    margin: auto;
    background-color: #1c1c1c;
    color: #f0e68c;
    border-radius: 20px;
    text-align: center;

    font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
`;

const CharacterImage = styled.img`
    width: 100%;
    height: auto;
    margin: auto;
    border-radius: 5px;
`;

const CharacterName = styled.h1`
    font-size: calc(6px + 1vw);
    margin-bottom: calc(0.5vw + 5px);
`;

const CharacterTitle = styled.h2`
    color: #d3af37;
    margin-bottom: calc(0.5vw + 5px);
    font-style: italic;
    font-size: calc(4px + 1vw);
`;

const CharacterClass = styled.p`
    font-size: calc(4px + 1vw);
    color: #ffd700;
`;

export default function Blueprint(props: { data: Character[] }) {
    return (

        <AllCharsDiv>
            {props.data.map((char) => (
                <CharacterCard key={char.id}>

                    <CharacterName>{char.name}</CharacterName>

                    <CharacterTitle>{char.title}</CharacterTitle>

                    <CharacterImage
                        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${char.id}_0.jpg`}
                        alt={`image of ${char.name}`}
                    />
                    <CharacterClass>Class: {char.tags.join(", ")}</CharacterClass>

                </CharacterCard>
            ))}
        </AllCharsDiv>
    );
}
