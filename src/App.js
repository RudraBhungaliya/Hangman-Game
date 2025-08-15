import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import HangmanDrawing from './hangmanDrawing';
import HangmanWord from './hangmanWord';
import Keyboard from './keyboard';
import List from './List.json';
import { useCallback, useEffect, useState } from 'react';
function getWord() {
    return List[Math.floor(Math.random() * List.length)];
}
export default function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord);
    const [guessedLetters, setGuessedLetters] = useState([]);
    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
    const isLoser = incorrectLetters.length === 6;
    const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
    const addGuessedLetter = useCallback((letter) => {
        if (guessedLetters.includes(letter) || isWinner || isLoser)
            return;
        setGuessedLetters((current) => [...current, letter]);
    }, [guessedLetters, isWinner, isLoser]);
    const restartGame = () => {
        setGuessedLetters([]);
        setWordToGuess(getWord());
    };
    useEffect(() => {
        const handler = (e) => {
            const key = e.key.toLowerCase();
            if (!key.match(/^[a-z]$/))
                return;
            e.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener('keypress', handler);
        return () => document.removeEventListener('keypress', handler);
    }, [guessedLetters, addGuessedLetter]);
    useEffect(() => {
        const handler = (e) => {
            if (e.key !== 'Enter')
                return;
            e.preventDefault();
            restartGame();
        };
        document.addEventListener('keypress', handler);
        return () => document.removeEventListener('keypress', handler);
    }, []);
    return (_jsxs("div", { style: {
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            margin: '0 auto',
            alignItems: 'center',
            zIndex: 1,
            top: '5rem',
            position: 'relative',
        }, children: [_jsx("div", { style: { fontSize: '2rem', textAlign: 'center' }, children: isWinner ? ('Winner! - Refresh to try again 💯') : isLoser ? (_jsxs(_Fragment, { children: ["Nice Try - The correct word was:", ' ', _jsx("span", { style: { color: 'red', fontWeight: 'bold' }, children: wordToGuess })] })) : null }), _jsx(HangmanDrawing, { numberOfGuesses: incorrectLetters.length }), _jsx(HangmanWord, { guessedLetters: guessedLetters, wordToGuess: wordToGuess }), _jsx("div", { style: { alignSelf: 'stretch' }, children: _jsx(Keyboard, { disabled: isWinner || isLoser, activeLetters: guessedLetters.filter((l) => wordToGuess.includes(l)), inactiveLetters: incorrectLetters, addGuessedLetter: addGuessedLetter }) }), _jsx("button", { onClick: restartGame, style: {
                    padding: '10px 20px',
                    fontSize: '1.2rem',
                    marginTop: '1rem',
                    backgroundColor: '#282c34',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }, children: "\uD83D\uDD01 Restart Game" })] }));
}
