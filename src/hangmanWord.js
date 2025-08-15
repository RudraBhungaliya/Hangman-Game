import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export default function HangmanWord({ guessedLetters, wordToGuess, reveal = false, }) {
    return (_jsx(_Fragment, { children: _jsx("div", { style: {
                display: "flex",
                gap: "10px",
                fontSize: "3rem",
                textTransform: "uppercase",
                fontFamily: "monospace",
                fontWeight: "bold",
                marginBottom: "2rem",
            }, children: wordToGuess.split("").map((letter, index) => (_jsx("span", { style: { borderBottom: "7px solid black", width: "40px", textAlign: "center", fontFamily: "sans-serif" }, children: _jsx("span", { style: {
                        visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
                    }, children: letter }) }, index))) }) }));
}
