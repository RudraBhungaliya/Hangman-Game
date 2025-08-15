import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const HEAD = (_jsx("div", { style: {
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    } }));
const BODY = (_jsx("div", { style: {
        width: "10px",
        height: "120px",
        background: "black",
        position: "absolute",
        top: "110px",
        right: "0px"
    } }));
const LEFT_HAND = (_jsx("div", { style: {
        width: "70px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "140px",
        right: "0px",
        rotate: "-30deg"
    } }));
const RIGHT_HAND = (_jsx("div", { style: {
        width: "70px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "140px",
        right: "-60px",
        rotate: "-150deg"
    } }));
const LEFT_LEG = (_jsx("div", { style: {
        width: "70px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "235px",
        right: "0px",
        rotate: "-30deg"
    } }));
const RIGHT_LEG = (_jsx("div", { style: {
        width: "70px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "235px",
        right: "-60px",
        rotate: "-150deg"
    } }));
const PARTS = [HEAD, BODY, LEFT_HAND, RIGHT_HAND, LEFT_LEG, RIGHT_LEG];
export default function HangmanDrawing({ numberOfGuesses }) {
    return (_jsxs(_Fragment, { children: [_jsx("h1", { style: {
                    color: "black",
                    fontFamily: "Segoe UI, Arial, sans-serif",
                    fontSize: "4rem",
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    letterSpacing: "3px",
                    marginTop: "1px",
                    cursor: "pointer",
                    textDecoration: "underline"
                }, children: "HANG-MAN" }), _jsxs("div", { style: { position: "relative", marginTop: "0px"
                }, children: [PARTS.slice(0, numberOfGuesses), _jsx("div", { style: {
                            height: "50px",
                            width: "10px",
                            background: "black",
                            marginLeft: "120px",
                            top: 0,
                            right: 0,
                            position: "absolute"
                        } }), _jsx("div", { style: {
                            height: "10px",
                            width: "200px",
                            background: "black",
                            marginLeft: "120px",
                        } }), _jsx("div", { style: {
                            height: "400px",
                            width: "10px",
                            background: "black",
                            marginLeft: "120px"
                        } }), _jsx("div", { style: { height: "10px", width: "250px", background: "black" } })] })] }));
}
