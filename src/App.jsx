import Hero from "./components/Hero"

function App() {
    const personObject = {
        name: "John",
        age: 25,
        address: {
            city: "New York",
            country: "USA",
        },
    }

    return (
        <div>
            <Hero personInfo={personObject}/>
        </div>
    )
}

export default App
1