import React from 'react'

const IsUserLoggedIn = ({items}) => {
    return <div>
        {items.map((obj,idx) => {            
        return(
            <div key={(idx % 2)+""+(Math.random() * 1)}>
                <ul key={idx+""+(Math.random() * 1)}>
                    <li key={(Math.random() * 1)}>Name : {obj.name}</li>
                    <li key={(Math.random() * 1)}>Logged In: {obj.isUserLoggedIn ? "True" : "False"}</li>
                </ul>
            </div>
         )
        })}
    </div>
}
export default IsUserLoggedIn
