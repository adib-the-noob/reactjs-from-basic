import { useState } from "react";

const App = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const addItem = () => {
        list.push(item);
        setList([...list]);
    };

    const removeItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }

    return (
        <div>
            <table>
                <tbody>
                    {
                        (list.length !== 0) ? list.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <td><button onClick={() => {
                                    removeItem(index);
                                }}>Remove</button></td>
                            </tr>
                        )) : <tr><td>No items</td></tr>
                    }
                </tbody>
            </table>
            <h1>{list.length}</h1>
            <input onChange={(e) => setItem(e.target.value)} placeholder="item"/>
            <button onClick={addItem}>Add</button>
        </div>
    )
};

export default App;