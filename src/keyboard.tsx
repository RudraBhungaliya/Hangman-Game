import './App.css'

const KEYS = [
  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z"
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "3px",
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)

        let btnStyle = {}
        if(isActive) btnStyle = { backgroundColor: "lightskyblue", color: "black" }
        else if(isInactive) btnStyle = { backgroundColor: "#ff4d4d", color: "white" }

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            className="btn"
            disabled={isActive || isInactive || disabled}
            style={btnStyle}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
