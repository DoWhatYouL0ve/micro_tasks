import React, {useState} from "react";

export const UseStateEx = () => {
    //let a = 1
    let[a, setA] = useState(1)

    const OnClickHandler = () => {
        setA(++a)
    }
    const OnClickHandlerReset = () => {
        setA(0)
    }

    return (
        <>
            <h1>{a}</h1>
            <button onClick={OnClickHandler}>Plus</button>
            <button onClick={OnClickHandlerReset}>Reset</button>
        </>
    )
}