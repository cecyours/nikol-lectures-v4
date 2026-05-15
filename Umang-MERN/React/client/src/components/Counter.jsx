import React, { useEffect, useState } from 'react'

const Counter = () => {

  // Declare state variable 'count' with initial value 0

  const [count, setCount] = useState(0)   // 0 is default/initial value of count


  useEffect(() => {
    console.log("Component Mount");
  }, [])



  useEffect(() => {
    console.log("Component Updating");

    // dependency
  }, [count])



  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);



  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px auto",
        width: "300px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9"
      }}
    >

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}  >
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}

        style={{
          marginLeft: "10px"
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{
        marginLeft: "10px"
      }}>
        Reset
      </button>



    </div>
  )
}

export default Counter