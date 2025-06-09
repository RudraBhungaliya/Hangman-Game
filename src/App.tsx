import './App.css'
import HangmanDrawing from './hangmanDrawing'
import HangmanWord from './hangmanWord'
import Keyboard from './keyboard'
import List from './List.json'
import { useCallback, useEffect, useState } from 'react'

function getWord(){
  return List[Math.floor(Math.random() * List.length)]
}

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const[guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetters.length == 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter : string) => {
    if(guessedLetters.includes(letter) || isWinner || isLoser) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLoser])

  const restartGame = () => {
    setGuessedLetters([])
    setWordToGuess(getWord())
  }

  useEffect(() => {
    const handler = (e : KeyboardEvent) => {
      const key = e.key
      if(!key.match(/^[a - z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }
    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  
  useEffect(() => {
    const handler = (e : KeyboardEvent) => {
      const key = e.key
      if(key !== "Enter") return
      e.preventDefault()

      setGuessedLetters([])
      setWordToGuess(getWord())
    }
    document.addEventListener("keypress", handler)
  })

  return (
  <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
      zIndex: "1",
      top: "5rem",
    }}
  >
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {isWinner
        ? "Winner! - Refresh to try again 💯"
        : isLoser
        ? "Nice Try - Refresh to try again ☠️"
        : null}
    </div>

    <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

    <HangmanWord
      reveal={isLoser}
      guessedLetters={guessedLetters}
      wordToGuess={wordToGuess}
    />

    <div style={{ alignSelf: "stretch" }}>
      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>

    {(isWinner || isLoser) && (
      <button
        onClick={restartGame}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          marginTop: "1rem",
          backgroundColor: "#282c34",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        🔁 Restart Game
      </button>
    )}
  </div>
)}