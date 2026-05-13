import React, { useState } from 'react'

const Dice = () => {


    const [count, setCount] = useState(1)
    const images = [
        "/dice-images/dice_1.png",
        "/dice-images/dice_2.png",
        "/dice-images/dice_3.png",
        "/dice-images/dice_4.png",
        "/dice-images/dice_5.png",
        "/dice-images/dice_6.png",
    ]


    const handleRoll = () => {
        setCount(Math.floor(Math.random() * 6) + 1)
    }

    return (
        <div>

            <h1>Dice Game (State Example)</h1>

            <img width={100} src={images[count - 1]} alt="" />

            <br />

            <button
                onClick={handleRoll}
                style={{
                    padding: "10px 20px",
                    fontSize: "18px",
                    border: "none",
                    borderRadius: "8px",
                    backgroundColor: "black",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Roll
            </button>
        </div>
    )
}

export default Dice