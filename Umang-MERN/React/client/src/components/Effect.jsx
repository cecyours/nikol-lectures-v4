import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [count, setCount] = useState(0)
    const [username, setUsername] = useState('')



    // No Dependency Array
    useEffect(() => {
        console.log("Runs Every Render");
    });


    // Empty Dependency Array
    useEffect(() => {
        // when component mount
        console.log("Runs Only Once");
    }, []);



    // Specific Dependency
    useEffect(() => {
        console.log("Count Changed");
    }, [count]);



    // Multiple Dependencies
    useEffect(() => {
        console.log("Runs when count or name changes");
    }, [count, username]);

    return (
        <div>
            <h1> {count}</h1>


            <input type="text" name="username" id="" onBlur={(e) => setUsername(e.target.value)} />

            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Effect