import React, { useState } from 'react'

const TypingCounter = () => {


    const [wordCount, setWordCount] = useState(0)
    const [charCount, setCharCount] = useState(0)
    const [sentanceCount, setSentanceCount] = useState(0)
    const [peraCount, setPeraCount] = useState(0)
    const [spaceCount, setSpaceCount] = useState(0)

    const handleWordCounte = (value) => {
        setCharCount(value.length)
        setWordCount(
            value
                .trim()
                .split(/[.\s()\-]+/)
                .filter(word => word.length > 0).length
        );
        setSentanceCount(value.split('.').length - 1)
        setPeraCount(value.split(/\n\s*\n/).length)
        setSpaceCount(value.match(/\s/g)?.length || 0)

    }




    return (
        <div>
            <h1>Typing Counter</h1>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px", backgroundColor: "lightblue" }}>
                <p>Word : {wordCount}</p>
                <p>Character :  {charCount}</p>
                <p>Sentance :  {sentanceCount}</p>
                <p>Peragraph  :  {peraCount}</p>
                <p>Space   :  {spaceCount}</p>
            </div>

            <textarea
                rows={10}
                cols={60}
                type="text" style={{ padding: "12px" }}
                onChange={(e) => handleWordCounte(e.target.value)} />




        </div>
    )
}

export default TypingCounter    