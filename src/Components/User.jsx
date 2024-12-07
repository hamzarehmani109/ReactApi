import React, { useState } from 'react';

function User() {
    const [user, setUser] = useState("");
    const [userErr, setUserErr] = useState(false);

   
    function handleLogin(e) {
        e.preventDefault();
      
    }

    function handleUserChange(e) {
        let item = e.target.value;
        setUser(item); 
        if (item.length < 3) {
            alert("User name is not valid")
        } else {
            setUserErr(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Enter Your Name</h1>
                <input 
                    type="text" 
                    placeholder='Enter your name' 

                    value={user} 
                />
                {userErr && <span>User name is not valid</span>} {}
                <button type='submit' onClick={handleUserChange}>Submit</button>
            </form>
        </div>
    );
}

export default User;
