type HangmanWordProps = {
  guessedLetters : string[]
  wordToGuess : string
  reveal? : boolean
}

export default function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
} : HangmanWordProps) {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontSize: "3rem",
          textTransform: "uppercase",
          fontFamily: "monospace",
          fontWeight : "bold",
          marginBottom : "2rem",
        }}
      >
        {wordToGuess.split("").map((letter, index) => (
          <span
            key={index}
            style={{ borderBottom: "7px solid black", width: "40px", textAlign: "center", fontFamily : "sans-serif" }}
            >
            <span style = {{
              visibility : guessedLetters.includes(letter) ? "visible" : "hidden",

            }}
            
            >
              {letter}
            </span>
          </span>
        ))}
      </div>
    </>
  )
}

