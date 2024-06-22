import React, { useRef, useState } from 'react';
import NavBar from '../components/NavBar';
import NewDeckCard from '../components/NewDeckCard.jsx';
import { Plus } from "lucide-react";
import { commitDeckToFirestore } from "../../services/firestore"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router-dom';

export default function NewDeck() {
    const { currentUser } = useAuth()
    const [cards, setCards] = useState([{ id: 1 }]);
    const nameRef = useRef()
    const descriptionRef = useRef()
    const navigate = useNavigate()

    const addCard = () => {
        setCards([...cards, { id: Date.now() }]);
    };

    const removeCard = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    const handleCardChange = (id, field, value) => {
        setCards(cards.map(card =>
            card.id === id ? { ...card, [field]: value } : card
        ));
    };

    const handleSave = async (e) => {
        e.preventDefault()
        const submitPackage = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            cards: cards
        }
        console.log(submitPackage)
        await commitDeckToFirestore(currentUser.uid, submitPackage)
        navigate("/");

    };

    return (
        <>
            <NavBar />
            <div className="flex w-full">

                <div className="sticky top-24 px-5 my-7 w-1/2 h-full">
                    <form onSubmit={handleSave}>
                        <h1 className='text-text text-3xl font-bold'>Új pakli létrehozása</h1>
                        <div className="my-6">
                            <input required ref={nameRef} type="text" placeholder='Név' className="block w-full p-4 border border-neutral-800 rounded-lg bg-secondary text-base placeholder-gray-400 text-white" />
                        </div>
                        <div className="my-6">
                            <textarea placeholder='Leírás' ref={descriptionRef} rows="3" className="resize-none w-full p-4 border border-neutral-800 rounded-lg bg-secondary text-base placeholder-gray-400 text-white" />
                        </div>
                        <div className="my-6">
                            <button type="submit" className="px-5 py-3 w-1/4 text-base font-medium text-center text-primary-950 bg-primary-500 rounded-lg hover:bg-primary-600 hover:text-white">Pakli mentése</button>
                        </div>
                    </form>
                </div>

                <div className="flex top-24 w-1/2 flex-col px-5 my-7 gap-7 items-center h-full rounded-lg">
                    {
                        cards.map((card, index) => (
                            <NewDeckCard
                                key={card.id}
                                quant={index + 1}
                                onDelete={() => removeCard(card.id)}
                                onChange={(field, value) => handleCardChange(card.id, field, value)} />
                        ))
                    }
                    <div className="w-full">
                        <button type="button" onClick={addCard} className="flex gap-2 hover:border-primary-500 justify-center items-center px-5 py-5 w-full text-base font-medium text-center border border-neutral-700 rounded-lg text-white transition-colors duration-150">
                            <Plus />
                            Új kártya
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
