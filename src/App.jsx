import { useState } from "react";

const App = () => {
    const [ myObj, setMyObj] = useState({
        "userName" : "ADIB",
        "passWord" : "hacker"
    });

    const changeValueObj = () => {
        setMyObj(
            prebObj => ({
                ...prebObj,
                "userName" : "Abdul Adib"
            })
        )
    }
    return (
        <div>
            <p>This users name is {myObj.userName}</p>
        <button onClick={changeValueObj}>ChangeName</button>
        </div>
    )
}

export default App;