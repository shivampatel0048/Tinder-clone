import React, { useState, useEffect } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from 'axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8001/tinder/card');
                setPeople(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const swiped = (direction, nameToDelete) => {
        console.log("removing" + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen!;")
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__continer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
