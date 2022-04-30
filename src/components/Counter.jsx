import { useState } from "react";

export function Counter() {
    const [cont, setCont] = useState(0);

    function increment() {
        setCont(cont + 1);
    }

    return (
        <>
            <h2>{cont}</h2>
            <button type="button" onClick={increment}>increment</button>
        </>
    )
}