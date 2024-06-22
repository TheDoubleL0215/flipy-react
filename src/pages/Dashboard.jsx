import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import DashboardCard from '../components/DashboardCard';
import { useAuth } from "../contexts/AuthContext"
import { fetchDecksFromFirestore } from '../../services/firestore.jsx';

export default function Dashboard() {
    const { currentUser } = useAuth();
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        const getDecks = async () => {
            if (currentUser) {
                const fetchedDecks = await fetchDecksFromFirestore(currentUser.uid);
                setDecks(fetchedDecks);
            }
        };

        getDecks();

    }, []);


    console.log(decks)
    return (
        <>
            <NavBar />
            <div className="px-5">
                <h1 className='text-white my-7 text-3xl font-bold'>Legutóbb létrehozott paklik:</h1>
                <div className="flex gap-3 flex-wrap">
                    {decks.map((deck) => (
                        <DashboardCard key={deck.id} name={deck.name} description={deck.description} quant={deck.cards.length} />
                    ))}
                </div>
            </div>
        </>
    );
}
