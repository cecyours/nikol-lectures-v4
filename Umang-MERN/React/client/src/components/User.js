// Method 1 
import React from 'react'

const User = ({ name, age }) => {
    return (
        <div style={{
            border: "1px solid #ccc", margin: "10px", padding:
                "10px", borderRadius: "5px"
        }}>
            <h3     > User Name : {name}</h3>
            <p>Age : {age}</p>
        </div>
    )
}

export default User


// ---------------------
// Method 2


// import React from 'react'

// const User = (props) => {
//     return (
//         <div style={{
//             border: "1px solid #ccc", margin: "10px", padding:
//                 "10px", borderRadius: "5px"
//         }}>
//             <h3>User Name : {props.name}</h3>
//             <p>Age : {props.age}</p>
//         </div>
//     )
// }

// export default User